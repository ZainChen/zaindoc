"use strict";(self.webpackChunkzaindoc=self.webpackChunkzaindoc||[]).push([[8943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="Git commands",c={unversionedId:"note/command/git-command",id:"note/command/git-command",title:"Git commands",description:"---",source:"@site/docs/note/command/git-command.md",sourceDirName:"note/command",slug:"/note/command/git-command",permalink:"/zaindoc/docs/note/command/git-command",draft:!1,editUrl:"https://github.com/ZainChen/zaindoc/tree/main/docs/note/command/git-command.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Command",permalink:"/zaindoc/docs/note/command/"},next:{title:"Npm command",permalink:"/zaindoc/docs/note/command/npm-command"}},l={},d=[{value:"Delete Files and Directories Filtered by Git",id:"delete-files-and-directories-filtered-by-git",level:3},{value:"Reset Branch",id:"reset-branch",level:3},{value:"Delete Tag",id:"delete-tag",level:3}],s={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-commands"},"Git commands"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"delete-files-and-directories-filtered-by-git"},"Delete Files and Directories Filtered by Git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Use Git to clear all untracked files and directories\n# -f: Force deletion (no confirmation required)\n# -x: Includes files and directories listed in the ignore checklist\n# -d: Includes directories not tracked by the version control system (note: this option will delete even empty directories)\ngit clean -fxd\n")),(0,o.kt)("h3",{id:"reset-branch"},"Reset Branch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Switch to the old branch "dev"\ngit checkout dev\n\n# Reset the old branch "dev" to "master"\ngit reset --hard master\n\n# Then, push the force to the remote repository (requires force push permission)\ngit push origin dev --force\n')),(0,o.kt)("h3",{id:"delete-tag"},"Delete Tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Delete local tag\ngit tag --delete TagName\n\n# Synchronize to the remote repository\ngit push origin :TagName\n")))}p.isMDXComponent=!0}}]);