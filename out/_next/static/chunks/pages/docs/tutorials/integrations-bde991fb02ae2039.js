(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1392],{3552:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/tutorials/integrations",function(){return r(7590)}])},1370:function(e,n,r){"use strict";r.d(n,{c:function(){return t}});var o=r(5893),d=r(5675),i=r.n(d);function t(e){return(0,o.jsx)("div",{className:"w-full p-7 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md",children:(0,o.jsxs)("div",{className:"border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg",children:[(0,o.jsx)("div",{className:"p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800",children:(0,o.jsxs)("div",{className:"flex py-1 px-2",children:[(0,o.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,o.jsx)("span",{className:"h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"}),(0,o.jsx)("span",{className:"h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"}),(0,o.jsx)("span",{className:"h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"})]}),(0,o.jsx)("div",{className:"text-right w-full text-zinc-400 text-xs",children:e.www})]})}),(0,o.jsx)("div",{className:"p-0",children:(0,o.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"hover:brightness-105",children:(0,o.jsx)(i(),{src:e.url,width:"0",height:"0",alt:"",className:"p-0 m-0 w-full",unoptimized:!0})})})]})})}},7590:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return s}});var o=r(5893),d=r(1151),i=r(1370);function t(e){let n=Object.assign({h5:"h5",h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,d.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h5,{children:"Tutorials"}),"\n",(0,o.jsx)(n.h1,{children:"Integrate Everywhere"}),"\n",(0,o.jsx)(n.h2,{id:"run-dotenv-vault-build",children:"Run dotenv-vault build"}),"\n",(0,o.jsx)(n.p,{children:"Open terminal, enter your project's root directory (where your .env.vault file is), and run dotenv-vault build."}),"\n",(0,o.jsx)(n.pre,{code:"$ npx dotenv-vault build\n",children:(0,o.jsx)(n.code,{children:"$ npx dotenv-vault build\n"})}),"\n",(0,o.jsx)(i.c,{url:"/assets/img/cloudinary/npx-build_qqcbcb.gif"}),"\n",(0,o.jsxs)(n.p,{children:["Your ",(0,o.jsx)(n.code,{children:".env.vault"})," file should now look something like this."]}),"\n",(0,o.jsx)(n.pre,{code:'DOTENV_VAULT=vlt_509ada...\nDOTENV_VAULT_DEVELOPMENT="Z53YGRqDcfkQZ..."\nDOTENV_VAULT_CI="Ib3n/NKbTVO..."\nDOTENV_VAULT_STAGING="up1/d3F13uCKrbsU..."\nDOTENV_VAULT_PRODUCTION="oJ6qWV1erwlU1TP4..."\n',children:(0,o.jsx)(n.code,{children:'DOTENV_VAULT=vlt_509ada...\nDOTENV_VAULT_DEVELOPMENT="Z53YGRqDcfkQZ..."\nDOTENV_VAULT_CI="Ib3n/NKbTVO..."\nDOTENV_VAULT_STAGING="up1/d3F13uCKrbsU..."\nDOTENV_VAULT_PRODUCTION="oJ6qWV1erwlU1TP4..."\n'})}),"\n",(0,o.jsx)(n.p,{children:"As you can see, your environment variables are encrypted per environment."}),"\n",(0,o.jsx)(n.h2,{id:"set-dotenv-key",children:"Set DOTENV_KEY"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"DOTENV_KEY"})," decrypts the encrypted values from ",(0,o.jsx)(n.code,{children:"DOTENV_VAULT_PRODUCTION"}),". Run dotenv-vault keys production."]}),"\n",(0,o.jsx)(n.pre,{code:"$ npx dotenv-vault keys production\n",children:(0,o.jsx)(n.code,{children:"$ npx dotenv-vault keys production\n"})}),"\n",(0,o.jsx)(n.p,{children:"That will output your DOTENV_KEY."}),"\n",(0,o.jsx)(n.pre,{code:"dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production\n",children:(0,o.jsx)(n.code,{children:"dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"DOTENV_KEY"})," on your infrastructure. For example, on Heroku:"]}),"\n",(0,o.jsx)(n.pre,{code:"$ heroku config:set DOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production'\n",children:(0,o.jsx)(n.code,{children:"$ heroku config:set DOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"require-dotenv-16-1-0",children:"Require dotenv >= 16.1.0"}),"\n",(0,o.jsxs)(n.p,{children:["The last step is to require ",(0,o.jsx)(n.a,{href:"https://github.com/motdotla/dotenv",children:"dotenv >= 16.1.0"})," into your code."]}),"\n",(0,o.jsx)(n.p,{children:"As early as possible in your application, import and configure dotenv:"}),"\n",(0,o.jsx)(n.pre,{code:"require('dotenv').config()\nconsole.log(process.env) // remove this after you've confirmed it working\n",children:(0,o.jsx)(n.code,{children:"require('dotenv').config()\nconsole.log(process.env) // remove this after you've confirmed it working\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: ",(0,o.jsx)(n.a,{href:"/docs/libraries",children:"Other languages like Ruby, Python, PHP, etc are also supported"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"That's it!"}),"\n",(0,o.jsxs)(n.p,{children:["When your app boots, it will recognize the ",(0,o.jsx)(n.code,{children:"DOTENV_KEY"}),", decrypt the ",(0,o.jsx)(n.code,{children:".env.vault"})," file, and load the variables to ",(0,o.jsx)(n.code,{children:"ENV"}),". If a ",(0,o.jsx)(n.code,{children:"DOTENV_KEY"})," is not set (like during development on your local machine) it will fall back to regular dotenv."]})]})}var s=!0;n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}},function(e){e.O(0,[5675,9774,2888,179],function(){return e(e.s=3552)}),_N_E=e.O()}]);