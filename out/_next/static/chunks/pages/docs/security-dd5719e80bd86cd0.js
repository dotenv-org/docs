(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9277],{3019:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/security",function(){return s(2918)}])},2918:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return l}});var n=s(5893),r=s(1151),a=s(5825);function i(e){let t=Object.assign({h5:"h5",h1:"h1",p:"p",h3:"h3",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h5,{children:"dotenv-vault"}),"\n",(0,n.jsx)(t.h1,{children:"Security"}),"\n",(0,n.jsx)(t.p,{children:"Security is an evermoving target - an arms race. But that doesn't mean it should be hard to use. Good design can make complex things simple, and that is what we are after at Dotenv.",className:"lead"}),"\n",(0,n.jsx)(t.h3,{children:"Background"}),"\n",(0,n.jsxs)(t.p,{children:["Dotenv is a security tool. It has been since it was first developed in 2013. We saw developers struggling to keep their secrets safe so we pioneered the ",(0,n.jsx)(t.code,{children:".env"})," file format standard. The design led to better DSX (Developer Security Experience) - which led to safer secrets for millions of developers."]}),"\n",(0,n.jsx)(t.h3,{children:"Problem"}),"\n",(0,n.jsxs)(t.p,{children:["What is the problem with ",(0,n.jsx)(t.code,{children:".env"})," files today? The world has changed. Developers manage secrets at greater scale than a decade ago. ",(0,n.jsx)(t.code,{children:".env"})," files are not easily shareable between machines, environments, and team members. As a result, developers often share secrets over Slack and email. It's not scaleable and fraught with security risks. For a CTO or CSO it is a risk they should not take."]}),"\n",(0,n.jsx)(t.h3,{children:"Competing Solutions"}),"\n",(0,n.jsx)(t.p,{children:"The other side of the coin is not so good either. Complex security software like HashiCorp Vault is difficult to fully understand and introduces new friction, complexities, and attack vectors. Friction and complexity almost always lead to negative security events because people are lazy."}),"\n",(0,n.jsxs)(t.p,{children:["But another word for lazy in software is elegance. Developers often chose ",(0,n.jsx)(t.code,{children:".env"})," because it was an elegant security alternative. Elegance has a great deal of value when it comes to security because it increases the likelihood of an individual working toward security rather than against it."]}),"\n",(0,n.jsx)(t.p,{children:"So all this said, we have an elegant solution for yesteryear and new problems today. What do we do?"}),"\n",(0,n.jsx)(t.h3,{children:"The .env.vault Solution"}),"\n",(0,n.jsxs)(t.p,{children:["We've decided to introduce the ",(0,n.jsx)(t.code,{children:".env.vault"})," file format and a few supporting file formats to make syncing, encrypting, and deploying your secrets elegant and safe at modern scale."]}),"\n",(0,n.jsxs)(t.p,{children:["It's an exciting development, and we hope you come on this journey with us. We remember when people were telling us the ",(0,n.jsx)(t.code,{children:".env"})," file was unnecesary, too simple, just put your secrets in code !, etc."]}),"\n",(0,n.jsxs)(t.p,{children:["Today the ",(0,n.jsx)(t.code,{children:".env.vault"})," is predictably getting some of the same pushback, but we are just as confident the ",(0,n.jsx)(t.code,{children:".env.vault"})," file format standard will follow the same adoption trajectory as the ",(0,n.jsx)(t.code,{children:".env"})," file format."]}),"\n",(0,n.jsx)(t.p,{children:"Get involved early with its development and usage! Try it out, contribute to its development, and keep your secrets safer."}),"\n",(0,n.jsx)("div",{className:"my-16 xl:max-w-none",children:(0,n.jsxs)("div",{className:"not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3",children:[(0,n.jsx)("div",{className:"flex flex-row-reverse gap-6",children:(0,n.jsxs)("div",{className:"flex-auto",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-white",children:(0,n.jsx)(t.p,{children:".env"})}),(0,n.jsx)("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:"Tried and true. For development secrets"}),"\n",(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsx)(a.z,{href:"/docs/security/env",variant:"text",arrow:"right",children:"Read more"})})]})},"env"),(0,n.jsx)("div",{className:"flex flex-row-reverse gap-6",children:(0,n.jsxs)("div",{className:"flex-auto",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-white",children:(0,n.jsx)(t.p,{children:".env.vault"})}),(0,n.jsx)("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:"Modern encryption standard for deploying secrets just-in-time"}),"\n",(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsx)(a.z,{href:"/docs/security/env-vault",variant:"text",arrow:"right",children:"Read more"})})]})},"Push"),(0,n.jsx)("div",{className:"flex flex-row-reverse gap-6",children:(0,n.jsxs)("div",{className:"flex-auto",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-white",children:(0,n.jsx)(t.p,{children:".env.me"})}),(0,n.jsx)("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:"Authorizes you to access a project's shared .env file"}),"\n",(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsx)(a.z,{href:"/docs/security/env-me",variant:"text",arrow:"right",children:"Read more"})})]})},"Pull"),(0,n.jsx)("div",{className:"flex flex-row-reverse gap-6",children:(0,n.jsxs)("div",{className:"flex-auto",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-white",children:(0,n.jsx)(t.p,{children:"DOTENV_KEY"})}),(0,n.jsx)("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:"The DOTENV_KEY unlocks your encrypted .env.vault secrets"}),"\n",(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsx)(a.z,{href:"/docs/security/dotenv-key",variant:"text",arrow:"right",children:"Read more"})})]})},"dotenv-key"),(0,n.jsx)("div",{className:"flex flex-row-reverse gap-6",children:(0,n.jsxs)("div",{className:"flex-auto",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-white",children:(0,n.jsx)(t.p,{children:"Integration Tokens"})}),(0,n.jsx)("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:"Integration tokens, also known as IT tokens, are limited access tokens"}),"\n",(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsx)(a.z,{href:"/docs/security/env-it",variant:"text",arrow:"right",children:"Read more"})})]})},"env-it"),(0,n.jsx)("div",{className:"flex flex-row-reverse gap-6",children:(0,n.jsxs)("div",{className:"flex-auto",children:[(0,n.jsx)("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-white",children:(0,n.jsx)(t.p,{children:"Vault"})}),(0,n.jsx)("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:"Vault stores your secrets securely"}),"\n",(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsx)(a.z,{href:"/docs/security/vault",variant:"text",arrow:"right",children:"Read more"})})]})},"vault")]})})]})}var l=!0;t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3019)}),_N_E=e.O()}]);