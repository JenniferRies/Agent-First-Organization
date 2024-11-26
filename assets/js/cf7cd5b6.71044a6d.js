"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3119],{5214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Agents/MessageAgent","title":"MessageAgent","description":"Introduction","source":"@site/docs/Agents/MessageAgent.mdx","sourceDirName":"Agents","slug":"/Agents/MessageAgent","permalink":"/Agent-First-Organization/docs/Agents/MessageAgent","draft":false,"unlisted":false,"editUrl":"https://github.com/ArticulateAI/Agent-First-Organization/tree/v0.0.1/docs/docs/Agents/MessageAgent.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Agents","permalink":"/Agent-First-Organization/docs/Agents/"},"next":{"title":"RAGAgent","permalink":"/Agent-First-Organization/docs/Agents/RAGAgent"}}');var r=n(4848),a=n(8453);const o={},i="MessageAgent",c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Visualization",id:"visualization",level:4},{value:"Class Attributes",id:"class-attributes",level:3},{value:"Instantiation",id:"instantiation",level:2},{value:"Execution",id:"execution",level:2},{value:"0. Calling <code>execute()</code>",id:"0-calling-execute",level:4},{value:"1. Unpack MessageState",id:"1-unpack-messagestate",level:4},{value:"2. Check for Predefined Static Response",id:"2-check-for-predefined-static-response",level:4},{value:"3. Generate Response",id:"3-generate-response",level:4},{value:"4. Connect to the LangChain",id:"4-connect-to-the-langchain",level:4},{value:"Code",id:"code",level:3}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"messageagent",children:"MessageAgent"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Message Agents are the basis of the rest of the agents and is responsible for the handling the chat response of the bot. Essential to nearly every conversational component, it can be combined with other agents to create integrate more complicated processes into the conversation."}),"\n",(0,r.jsx)(t.h1,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsxs)(t.p,{children:["As the base component for all response, MessageAgent demonstrates the versatility of the agent system and how it builds on top of base LLM mechanism for a targetted and structured approach scaffoled by ",(0,r.jsx)(t.code,{children:"orchestrator_message"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:['MessageAgents consists of only two nodes, a start node and the "generator" node which calls the ',(0,r.jsx)(t.code,{children:"generator(MessageState)"})," method on ",(0,r.jsx)(t.code,{children:"execute"}),". Although the generator function is defined and assigned on instantiation, it will only be called during execution."]}),"\n",(0,r.jsx)(t.h4,{id:"visualization",children:"Visualization"}),"\n",(0,r.jsx)(t.mermaid,{value:'graph LR;\n    start["START"]--"generator()"--\x3egenerator["generator"];'}),"\n",(0,r.jsx)(t.h3,{id:"class-attributes",children:"Class Attributes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"description"}),":      ",(0,r.jsx)(t.em,{children:'"The agent that used to deliver the message to the user, either a question or provide some information."'}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"llm"}),": LLM model to be used for path generation",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"action_graph"}),": LangGraph StateGraph"]}),"\n",(0,r.jsx)(t.h2,{id:"instantiation",children:"Instantiation"}),"\n",(0,r.jsx)(t.p,{children:"On instantiation, the LLM model and the StateGraph is created."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'def __init__(self):\n    super().__init__()\n    self.llm = ChatOpenAI(model=MODEL["model_type_or_path"], timeout=30000)\n    self.action_graph = self._create_action_graph()\n\ndef _create_action_graph(self):\n        workflow = StateGraph(MessageState)\n        # Add nodes for each agent\n        workflow.add_node("generator", self.generator)\n        # Add edges\n        workflow.add_edge(START, "generator")\n        return workflow\n'})}),"\n",(0,r.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,r.jsxs)(t.h4,{id:"0-calling-execute",children:["0. Calling ",(0,r.jsx)(t.code,{children:"execute()"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"execute()"})," method is called which invokes the StateGraph on the MessageState and runs generator on the input MessageState. It returns the invoked StateGraph which allows it to be nested into other agents."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:"def execute(self, msg_state: MessageState):\n    graph = self.action_graph.compile()\n    result = graph.invoke(msg_state)\n    return result\n"})}),"\n",(0,r.jsx)(t.h4,{id:"1-unpack-messagestate",children:"1. Unpack MessageState"}),"\n",(0,r.jsxs)(t.p,{children:["First, the first stage unpacks the ",(0,r.jsx)(t.a,{href:"/Agent-First-Organization/docs/MessageState",children:"MessageState"})," object."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:"def generator(self, state: MessageState) -> MessageState:\n    # get the input message\n    user_message = state['user_message']\n    orchestrator_message = state['orchestrator_message']\n    message_flow = state.get('response', \"\") + \"\\n\" + state.get(\"message_flow\", \"\")\n\n    # get the orchestrator message content\n    orch_msg_content = orchestrator_message.message\n    orch_msg_attr = orchestrator_message.attribute\n    direct_response = orch_msg_attr.get('direct_response', False)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"2-check-for-predefined-static-response",children:"2. Check for Predefined Static Response"}),"\n",(0,r.jsx)(t.p,{children:"Next, it then checks if it has a predefined static response to respond at the node that should be done without generation."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:"    if direct_response:\n        return orch_msg_content\n"})}),"\n",(0,r.jsx)(t.h4,{id:"3-generate-response",children:"3. Generate Response"}),"\n",(0,r.jsxs)(t.p,{children:["Then, it checks if an ",(0,r.jsx)(t.code,{children:"orchestrator_message"}),"(",(0,r.jsx)(t.code,{children:"node['attribute']['value']"})," in ",(0,r.jsx)(t.a,{href:"/Agent-First-Organization/docs/Taskgraph/intro",children:"TaskGraph"}),") exists. If exists, ",(0,r.jsx)(t.code,{children:"orchestrator_message"})," holds the pre-generated text for which the response would be built off on. Otherwise, it will generate from scratch"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'    if message_flow and message_flow != "\\n":\n        prompt = PromptTemplate.from_template(message_flow_generator_prompt)\n        input_prompt = prompt.invoke({"sys_instruct": state["sys_instruct"], "message": orch_msg_content, "formatted_chat": user_message.history, "initial_response": message_flow})\n    else:\n        prompt = PromptTemplate.from_template(message_generator_prompt)\n        input_prompt = prompt.invoke({"sys_instruct": state["sys_instruct"], "message": orch_msg_content, "formatted_chat": user_message.history})\n'})}),"\n",(0,r.jsx)(t.h4,{id:"4-connect-to-the-langchain",children:"4. Connect to the LangChain"}),"\n",(0,r.jsx)(t.p,{children:"Lastly, it generates and processes the text into a string output and returns the updated MessageState."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'    logger.info(f"Prompt: {input_prompt.text}")\n    chunked_prompt = chunk_string(input_prompt.text, tokenizer=MODEL["tokenizer"], max_length=MODEL["context"])\n    final_chain = self.llm | StrOutputParser()\n    answer = final_chain.invoke(chunked_prompt)\n\n    state["message_flow"] = ""\n    state["response"] = answer\n    return state\n'})}),"\n",(0,r.jsx)(t.h3,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'def generator(self, state: MessageState) -> MessageState:\n    # get the input message\n    user_message = state[\'user_message\']\n    orchestrator_message = state[\'orchestrator_message\']\n    message_flow = state.get(\'response\', "") + "\\n" + state.get("message_flow", "")\n\n    # get the orchestrator message content\n    orch_msg_content = orchestrator_message.message\n    orch_msg_attr = orchestrator_message.attribute\n    direct_response = orch_msg_attr.get(\'direct_response\', False)\n    if direct_response:\n        return orch_msg_content\n    \n    if message_flow and message_flow != "\\n":\n        prompt = PromptTemplate.from_template(message_flow_generator_prompt)\n        input_prompt = prompt.invoke({"sys_instruct": state["sys_instruct"], "message": orch_msg_content, "formatted_chat": user_message.history, "initial_response": message_flow})\n    else:\n        prompt = PromptTemplate.from_template(message_generator_prompt)\n        input_prompt = prompt.invoke({"sys_instruct": state["sys_instruct"], "message": orch_msg_content, "formatted_chat": user_message.history})\n    logger.info(f"Prompt: {input_prompt.text}")\n    chunked_prompt = chunk_string(input_prompt.text, tokenizer=MODEL["tokenizer"], max_length=MODEL["context"])\n    final_chain = self.llm | StrOutputParser()\n    answer = final_chain.invoke(chunked_prompt)\n\n    state["message_flow"] = ""\n    state["response"] = answer\n    return state\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);