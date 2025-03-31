import os
from gtts import gTTS
from typing import Any, Iterator, Union

from langgraph.graph import StateGraph, START
from langchain_openai import ChatOpenAI

from arklex.env.workers.worker import BaseWorker, register_worker
from arklex.utils.graph_state import MessageState
from arklex.env.tools.pronunciation_tool import shoutEcho
from arklex.env.tools.utils import ToolGenerator
from arklex.env.tools.RAG.retrievers.faiss_retriever import RetrieveEngine
from arklex.utils.model_config import MODEL
from arklex.utils.model_provider_config import PROVIDER_MAP


@register_worker
class RAGWorker(BaseWorker):

    description = "Answer the user's questions based on WordReference translations and ThoughtCo grammar lessons"

    def __init__(self):
        super().__init__()
        self.action_graph = self._create_action_graph()
        self.llm = ChatOpenAI(model=MODEL["model_type_or_path"], timeout=30000)
       
     
    def _create_action_graph(self):
       
        workflow = StateGraph(MessageState)
        # Add nodes for each worker

        workflow.add_node("retriever", RetrieveEngine.faiss_retrieve)
        workflow.add_node("tool_generator", ToolGenerator.context_generate)
       
        # Add edges
        workflow.add_edge(START, "retriever")
        workflow.add_edge("retriever", "tool_generator")

        return workflow
    

    def execute(self, msg_state: MessageState):
        graph = self.action_graph.compile()        
        result = graph.invoke(msg_state)
        return result
