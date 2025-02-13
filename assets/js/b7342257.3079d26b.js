"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2883],{8315:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Workers/DefaultWorker","title":"DefaultWorker","description":"Introduction","source":"@site/docs/Workers/DefaultWorker.mdx","sourceDirName":"Workers","slug":"/Workers/DefaultWorker","permalink":"/Agent-First-Organization/docs/Workers/DefaultWorker","draft":false,"unlisted":false,"editUrl":"https://github.com/arklexai/Agent-First-Organization/tree/main/docs/docs/Workers/DefaultWorker.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"SearchWorker","permalink":"/Agent-First-Organization/docs/Workers/SearchWorker"},"next":{"title":"Introduction","permalink":"/Agent-First-Organization/docs/Evaluation/intro"}}');var n=t(4848),s=t(8453);const i={},a="DefaultWorker",l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Class Attributes",id:"class-attributes",level:3},{value:"Visualization",id:"visualization",level:4},{value:"Instantiation",id:"instantiation",level:2},{value:"Execution",id:"execution",level:2},{value:"Choosing the Worker",id:"choosing-the-worker",level:3},{value:"Execution",id:"execution-1",level:2},{value:"Code",id:"code",level:2}];function h(e){const r={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"defaultworker",children:"DefaultWorker"})}),"\n",(0,n.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(r.p,{children:"DefaultWorker a special type of workers that acts as a wildcard and as a backup in case the taskgraph does not assign any other worker to it. The DefaultWorker allows for execution-side worker selection and allows more flexibility and generality with the worker choice."}),"\n",(0,n.jsx)(r.h1,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsxs)(r.p,{children:["Selected by the ",(0,n.jsx)(r.a,{href:"/Agent-First-Organization/docs/Taskgraph/intro",children:"TaskGraph"})," when it fails to find a fitting worker during the TaskGraph generation, DefaultWorker looks through the possible workers and selects an appropriate on on execution by allowing the LLM to best match the task with a list of bots and their descriptions."]}),"\n",(0,n.jsx)(r.h3,{id:"class-attributes",children:"Class Attributes"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"description"}),": ",(0,n.jsx)(r.em,{children:'"Default Worker if there is no specific worker for the user\'s query"'}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.code,{children:"llm"}),": LLM model to be used for path generation",(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.code,{children:"base_choice"}),': "MessageWorker"',(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.code,{children:"available_workers"}),": List of workers available to choose from\\"]}),"\n",(0,n.jsx)(r.h4,{id:"visualization",children:"Visualization"}),"\n",(0,n.jsx)(r.mermaid,{value:'flowchart LR;\n    input["input"]\n\n    subgraph DefaultWorker\n        direction LR\n        choose["_choose_worker()"]-.->Workers\n        subgraph Workers\n            direction LR\n            workerA["Worker A"]\n            workerB["Worker B"]\n            workerDot["..."]\n            workerX["Worker X"]\n        end\n    end\n\n    input --\x3e choose\n    Workers --"[worker].execute()"--\x3e response'}),"\n",(0,n.jsx)(r.h2,{id:"instantiation",children:"Instantiation"}),"\n",(0,n.jsx)(r.p,{children:"On instantiation, unlike most workers, no StatesGraph are created as DefaultWorker will directly call the selected worker without changing the input."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def __init__(self):\n    super().__init__()\n    self.llm = ChatOpenAI(model=MODEL["model_type_or_path"], timeout=30000)\n    self.base_choice = "MessageWorker"\n    available_workers = os.getenv("AVAILABLE_WORKERS", "").split(",")\n    self.available_workers = {name: WORKER_REGISTRY[name].description for name in available_workers if name != "DefaultWorker"}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"execution",children:"Execution"}),"\n",(0,n.jsx)(r.h3,{id:"choosing-the-worker",children:"Choosing the Worker"}),"\n",(0,n.jsxs)(r.p,{children:["Passing into a dictionary of worker name and the description of the possible candidate workers, the LLM has 2 tries to select a fitting candidate worker otherwise it defaults to the base choice worker which is the ",(0,n.jsx)(r.a,{href:"/Agent-First-Organization/docs/Workers/MessageWorker",children:"MessageWorker"}),"."]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:" choose_worker_prompt "}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'choose_worker_prompt = """You are an assistant that has access to the following set of tools. Here are the names and descriptions for each tool:\n{workers_info}\nBased on the conversation history, choose the appropriate worker to respond to the user\'s message.\nConversation:\n{formatted_chat}\nThe response must be the name of one of the workers ({workers_name}).\nAnswer:\n'})})]}),"\n",(0,n.jsx)(r.h2,{id:"execution-1",children:"Execution"}),"\n",(0,n.jsxs)(r.p,{children:["After selecting the worker, DefaultWorker's ",(0,n.jsx)(r.code,{children:"execute()"})," merely returns the invoked return of the selected worker by returning the chosen worker's ",(0,n.jsx)(r.code,{children:"execute()"}),"."]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"code",children:"Code"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'class DefaultWorker(BaseWorker):\n\n    description = "Default worker decided by chat records if there is no specific worker for the user\'s query"\n\n    def __init__(self):\n        super().__init__()\n        self.llm = ChatOpenAI(model=MODEL["model_type_or_path"], timeout=30000)\n        self.base_choice = "MessageWorker"\n        available_workers = os.getenv("AVAILABLE_WORKERS", "").split(",")\n        self.available_workers = {name: WORKER_REGISTRY[name].description for name in available_workers if name != "DefaultWorker"}\n\n    def _choose_worker(self, state: MessageState, limit=2):\n        user_message = state[\'user_message\']\n        task = state["orchestrator_message"].attribute.get("task", "")\n        workers_info = "\\n".join([f"{name}: {description}" for name, description in self.available_workers.items()])\n        workers_name = ", ".join(self.available_workers.keys())\n\n        prompt = PromptTemplate.from_template(choose_worker_prompt)\n        input_prompt = prompt.invoke({"message": user_message.message, "formatted_chat": user_message.history, "task": task, "workers_info": workers_info, "workers_name": workers_name})\n        chunked_prompt = chunk_string(input_prompt.text, tokenizer=MODEL["tokenizer"], max_length=MODEL["context"])\n        final_chain = self.llm | StrOutputParser()\n        while limit > 0:\n            answer = final_chain.invoke(chunked_prompt)\n            for worker_name in self.available_workers.keys():\n                if worker_name in answer:\n                    logger.info(f"Chosen worker for the default worker: {worker_name}")\n                    return worker_name\n            limit -= 1\n        logger.info(f"Base worker chosen for the default worker: {self.base_choice}")\n        return self.base_choice\n    \n    def execute(self, msg_state: MessageState):\n        chose_worker = self._choose_worker(msg_state)\n        worker = WORKER_REGISTRY[chose_worker]()\n        result = worker.execute(msg_state)\n        return result\n'})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var o=t(6540);const n={},s=o.createContext(n);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);