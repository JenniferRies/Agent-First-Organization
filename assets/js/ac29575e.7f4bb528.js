"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2838],{6070:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Workers/SearchWorker","title":"SearchWorker","description":"Introduction","source":"@site/docs/Workers/SearchWorker.mdx","sourceDirName":"Workers","slug":"/Workers/SearchWorker","permalink":"/Agent-First-Organization/docs/Workers/SearchWorker","draft":false,"unlisted":false,"editUrl":"https://github.com/ArticulateAI/Agent-First-Organization/tree/v0.0.1/docs/docs/Workers/SearchWorker.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DatabaseWorker","permalink":"/Agent-First-Organization/docs/Workers/DatabaseWorker"},"next":{"title":"DefaultWorker","permalink":"/Agent-First-Organization/docs/Workers/DefaultWorker"}}');var a=r(4848),i=r(8453);const o={},s="SearchWorker",c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Class Attributes",id:"class-attributes",level:3},{value:"Visualization",id:"visualization",level:4},{value:"Instantiation",id:"instantiation",level:2},{value:"Execution",id:"execution",level:2},{value:"Search Retrieval",id:"search-retrieval",level:3},{value:"Generation",id:"generation",level:3},{value:"Sample Conversation",id:"sample-conversation",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"searchworker",children:"SearchWorker"})}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Search Workers retrieve real-time data from the web or databases, and generate coherent and user-specific responses. The searched results enable them to address complex and time-sensitive queries effectively by integrating up-to-date information with their foundational knowledge."}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(n.p,{children:["With a similar structrue to the ",(0,a.jsx)(n.a,{href:"/Agent-First-Organization/docs/Workers/RAGWorker",children:"RAGWorker"}),", instead of retrieving from local documents, it retrieves from the internet instead through Tavily's search engine API."]}),"\n",(0,a.jsx)(n.admonition,{title:"Tavily API Integration",type:"tip",children:(0,a.jsxs)(n.p,{children:["You can get an API key by visiting ",(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/tools/tavily_search/#:~:text=key%20by%20visiting-,this%20site,-and%20creating%20an",children:"this site"})," and creating an account."]})}),"\n",(0,a.jsx)(n.h3,{id:"class-attributes",children:"Class Attributes"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"description"}),": ",(0,a.jsx)(n.em,{children:'"Answer the user\'s questions based on search engine results"'}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.code,{children:"llm"}),": LLM model to be used for path generation",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.code,{children:"action_graph"}),": LangGraph StateGraph"]}),"\n",(0,a.jsx)(n.h4,{id:"visualization",children:"Visualization"}),"\n",(0,a.jsx)(n.mermaid,{value:'graph LR;\n    start["START"]--"search()"--\x3esearch_engine["search_engine"]--"context_generate()"--\x3etool_generator["tool_generator"];'}),"\n",(0,a.jsx)(n.h2,{id:"instantiation",children:"Instantiation"}),"\n",(0,a.jsx)(n.p,{children:"On instantiation, the LLM model and the StateGraph is created with the nodes and edges declaration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'def __init__(self):\n        super().__init__()\n        self.action_graph = self._create_action_graph()\n        self.llm = ChatOpenAI(model=MODEL["model_type_or_path"], timeout=30000)\n\ndef _create_action_graph(self):\n    workflow = StateGraph(MessageState)\n    # Add nodes for each worker\n    search_engine = SearchEngine()\n    workflow.add_node("search_engine", search_engine.search)\n    workflow.add_node("tool_generator", ToolGenerator.context_generate)\n    # Add edges\n    workflow.add_edge(START, "search_engine")\n    workflow.add_edge("search_engine", "tool_generator")\n    return workflow\n'})}),"\n",(0,a.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,a.jsx)(n.h3,{id:"search-retrieval",children:"Search Retrieval"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"search_engine"})," node calls the ",(0,a.jsx)(n.code,{children:"SearchEngine.retrieve"})," method which first converts the chat history dependent query to a independent query and runs it via the Tavily's search engine API. It returns the series of URL and its content as the context."]}),"\n",(0,a.jsx)(n.h3,{id:"generation",children:"Generation"}),"\n",(0,a.jsxs)(n.p,{children:["The generation part is the exact same as ",(0,a.jsx)(n.a,{href:"/Agent-First-Organization/docs/Workers/RAGWorker#generation",children:"RAGWorker's generation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"sample-conversation",children:"Sample Conversation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="searchworker_function_sample.json"',children:"Bot: Hello! How can I help you today?\nYou: I want to know the latest gaming result of Formula 1.\nBot: The latest gaming result from Formula 1 is that Charles Leclerc won the United States Grand Prix, with Ferrari achieving a one-two finish. Max Verstappen finished behind the Ferrari drivers.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can checkout the ",(0,a.jsx)(n.a,{href:"https://smith.langchain.com/public/f55696d8-310d-4060-a90c-d6fae0b6a254/r",children:"LangSmith Trace"})," for the execution process. The Search Worker first searches online resources relevant to the user's query and then generates the final response."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);