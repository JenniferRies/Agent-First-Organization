"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1446],{8454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"tutorials/roleplay-chatbot","title":"Roleplay Bot","description":"Build a basic chatbot with MessageAgents","source":"@site/docs/tutorials/roleplay-chatbot.md","sourceDirName":"tutorials","slug":"/tutorials/roleplay-chatbot","permalink":"/Agent-First-Organization/docs/tutorials/roleplay-chatbot","draft":false,"unlisted":false,"editUrl":"https://github.com/ArticulateAI/Agent-First-Organization/tree/v0.0.1/docs/docs/tutorials/roleplay-chatbot.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Tutorials","permalink":"/Agent-First-Organization/docs/tutorials/intro"},"next":{"title":"Customer Service Bot","permalink":"/Agent-First-Organization/docs/tutorials/customer-service"}}');var o=n(4848),r=n(8453);const s={},a="Roleplay Bot",l={},h=[{value:"Intro",id:"intro",level:2},{value:"Setting up the Config File",id:"setting-up-the-config-file",level:2},{value:"Generating a TaskGraph",id:"generating-a-taskgraph",level:2},{value:"Running the Bot",id:"running-the-bot",level:2},{value:"Sample Conversation",id:"sample-conversation",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"roleplay-bot",children:"Roleplay Bot"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Build a basic chatbot with MessageAgents"})}),"\n",(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll walk through building a roleplay bot using ",(0,o.jsx)(t.strong,{children:"AgentOrg"}),"'s framework. This bot will pretend to be a role you assigned to it and have a practice conversation with you based on the objective you set."]}),"\n",(0,o.jsx)(t.p,{children:"By the end of this tutorial, you'll know how to set up the config file, build a basic conversation flow, and power a bot with it! This tutorial covers the absolute basics of our framework and sets up for much more!"}),"\n",(0,o.jsx)(t.h2,{id:"setting-up-the-config-file",children:"Setting up the Config File"}),"\n",(0,o.jsxs)(t.p,{children:["In its core, bot is powered through a ",(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Taskgraph/intro",children:"TaskGraph"}),' which is the structure that links various tasks together to fulfill the overall role of the bot. Every "node" represents a task which has an ',(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Agents/",children:"Agent"})," that is selected to complete task, and would engages the user for their response. With the user response, the TaskGraph will decide which next node to travel to."]}),"\n",(0,o.jsxs)(t.p,{children:["While there are a lot of pre-built agents (and the ability to write custom agents too!), for this simple task, we will only be using two of the most basic agents. ",(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Agents/MessageAgent",children:"MessageAgent"})," and ",(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Agents/DefaultAgent",children:"DefaultAgent"}),". Message Agent is the base agent in handling message responses and DefaultAgent is there in case MessageAgent is not deemed suitable."]}),"\n",(0,o.jsxs)(t.p,{children:["Here is the simple structure for a ",(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Config",children:"Config"})," JSON file:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"role (Required)"}),': The general "role" of the chatbot you want to create. For instance, "roleplay bot", "customer service assistant", "data analyst", "shopping assistant", etc.']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"user_objective (Required)"}),': The user\'s goal that the chatbot wants to achieve. Related to the user experience. Description in third person. For instance, "The customer service assistant helps users with customer service inquiries. It can provide information about products, services, and policies, as well as help users resolve issues and complete transactions."']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"agents (Required, List(AgentClassName))"}),": The ",(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Agents/",children:"Agents"})," pre-defined under ",(0,o.jsx)(t.code,{children:"agentorg/agents"})," folder in the codebase that you want to use for the chatbot."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Now, lets see it with the Roleplay Bot example."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n    "role": "roleplay villain",\n    "user_objective": "The villain is a talking big evil red dragon that is trying to stop the user from finishing their quest to retrieve the holy grail. It is deadly and have killed many knights and heros in the past.",\n    "builder_objective": "",\n    "domain": "action roleplay",\n    "intro": "",\n    "docs": [],\n    "tasks": [],\n    "agents": [\n        "MessageAgent"\n    ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"With our Config in place, the vast majority of work is surprisingly already done! The rest is simply bringing the bot to life."}),"\n",(0,o.jsx)(t.h2,{id:"generating-a-taskgraph",children:"Generating a TaskGraph"}),"\n",(0,o.jsx)(t.p,{children:"Now that we have a Config file, generating the graph is the easy part. All you need to do is run the following command:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"python create.py --config ./examples/roleplay.json --output-dir ./examples/roleplay"})}),"\n",(0,o.jsxs)(t.p,{children:["It will first enter into a ",(0,o.jsx)(t.em,{children:"task planning"})," interactive panel where you can see the generated tasks this bot will handle and the following steps to complete the specific tasks. You can also modify the tasks and steps as needed. Once you are satisfied with result, you could press ",(0,o.jsx)(t.code,{children:"s"})," to save the ",(0,o.jsx)(t.em,{children:"task planning"})," file then it will further generate the final ",(0,o.jsx)(t.em,{children:"TaskGraph"})," file."]}),"\n",(0,o.jsxs)(t.p,{children:["TaskGraph provides the graph that the bot will traverse through during the conversation. It provides a guideline for the conversation to make it more controllable and reliable. The details can be viewed at ",(0,o.jsx)(t.a,{href:"/Agent-First-Organization/docs/Taskgraph/Generation",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"running-the-bot",children:"Running the Bot"}),"\n",(0,o.jsx)(t.p,{children:"With the TaskGraph in place, we can run the bot with the following command:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"python run.py --input-dir ./examples/roleplay"})}),"\n",(0,o.jsx)(t.p,{children:"It will initialize the service (e.g. NLU apis) you need to start the bot and you can start interacting with it!"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"sample-conversation",children:"Sample Conversation"}),"\n",(0,o.jsx)(t.p,{children:"Here is a sample conversation of the roleplay bot:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"> Bot: Greetings, foolish adventurer! I am the mighty red dragon, guardian of the secrets you seek. Turn back now, lest you join the countless knights who have perished before you. What brings you to my fiery domain in pursuit of the elusive holy grail?\n\n> User: I am questing for the holy grail for the hand of the princess!\n\n> Bot: Greetings, intrepid seeker! How may I be of service to you today? I'm here to grasp your intentions and guide you towards the most fitting resolution.\n\n> User: I want the grail.\n\n> Bot: Ah, you dare to claim the grail, do you? Know this, brave soul: many have tried and met their doom at my claws. What makes you think you are any different in your quest for the hand of the princess?\n\n> User: I am powered by true love and I know that with her protection charm she has given me, I would conquer you and retrieve the grail!   \n\n> Bot: Ah, you dare to claim the grail, do you? Know this, brave soul: many have tried and met their doom at my claws. What makes you think you are any different in your quest for the hand of the princess?\n\n> User: I am powered by true love and I know that with her protection charm she has given me, I would conquer you and retrieve the grail!   \n\n> Bot: Ah, you think your wit and charm will be enough to bring me, the formidable red dragon, to my knees? Many have tried to outsmart and sway me with their clever words, only to meet their end in my fiery domain. What makes you so confident that your quest for the holy grail and the princess's hand will lead to a different fate?\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);