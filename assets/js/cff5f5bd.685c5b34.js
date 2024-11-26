"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1250],{5662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Evaluation/UserSimulator","title":"User Simulator","description":"In order to evaluate the performance of the chatbot, we will simulate user interactions with the chatbot. The user simulator consist of two-pass process:","source":"@site/docs/Evaluation/UserSimulator.md","sourceDirName":"Evaluation","slug":"/Evaluation/UserSimulator","permalink":"/Agent-First-Organization/docs/Evaluation/UserSimulator","draft":false,"unlisted":false,"editUrl":"https://github.com/ArticulateAI/Agent-First-Organization/tree/v0.0.1/docs/docs/Evaluation/UserSimulator.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/Agent-First-Organization/docs/Evaluation/intro"},"next":{"title":"Metrics","permalink":"/Agent-First-Organization/docs/Evaluation/Metrics"}}');var o=n(4848),r=n(8453);const i={},a="User Simulator",l={},c=[{value:"Parameters",id:"parameters",level:2}];function u(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"user-simulator",children:"User Simulator"})}),"\n",(0,o.jsxs)(t.p,{children:["In order to evaluate the performance of the chatbot, we will simulate user interactions with the chatbot. The user simulator consist of ",(0,o.jsx)(t.strong,{children:"two-pass"})," process:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Simulate user's utterances based on the config file and interact with the built chatbot to get the task success rate based on the completion of user's goal and builder's goal."}),"\n",(0,o.jsx)(t.li,{children:"Simulate user's utterances based on the generated taskgraph and interact with the built chatbot to get the intent prediction accuracy to evaluate the NLU performance."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The user simulator can be used to generate a large number of user inputs to evaluate the chatbot's performance under different scenarios."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(t.p,{children:"The following parameters control the generation of synthetic conversations:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"--num_convos"}),": Number of synthetic conversations to simulate. Default is 5."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"--num_goals"}),": Number of goals/tasks to simulate. Default is 5."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"--max_turns"}),": Maximum number of turns per conversation. Default is 5."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"--model"}),": The openai model type used to synthesize user's utterance. Default is ",(0,o.jsx)(t.code,{children:"gpt-4o"}),". You could change it to other models like ",(0,o.jsx)(t.code,{children:"gpt-4o-mini"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," ",(0,o.jsx)(t.code,{children:"--max_turns"})," will affect the ",(0,o.jsx)(t.strong,{children:"User's goal completion efficiency"})," metrics since if the maximum number of turns is set to be small (e.g 2, 3), the chatbot may not be able to complete the user's goal and the efficiency will be ",(0,o.jsx)(t.code,{children:"--max_turns"})," which is not the actual efficiency. Normally, it should be set to a larger number like 5 - 10."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);