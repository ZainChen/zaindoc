"use strict";(self.webpackChunkzaindoc=self.webpackChunkzaindoc||[]).push([[4982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,g=d["".concat(l,".").concat(s)]||d[s]||p[s]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={},i="Git \u547d\u4ee4",c={unversionedId:"note/command/git-command",id:"note/command/git-command",title:"Git \u547d\u4ee4",description:"---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/note/command/git-command.md",sourceDirName:"note/command",slug:"/note/command/git-command",permalink:"/zaindoc/zh-CN/docs/note/command/git-command",draft:!1,editUrl:"https://github.com/ZainChen/zaindoc/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/note/command/git-command.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebarIdNote",previous:{title:"\u547d\u4ee4",permalink:"/zaindoc/zh-CN/docs/note/command/"},next:{title:"Npm \u547d\u4ee4",permalink:"/zaindoc/zh-CN/docs/note/command/npm-command"}},l={},m=[{value:"\u5220\u9664 Git \u8fc7\u6ee4\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939",id:"\u5220\u9664-git-\u8fc7\u6ee4\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939",level:3},{value:"\u91cd\u7f6e\u5206\u652f",id:"\u91cd\u7f6e\u5206\u652f",level:3},{value:"\u5220\u9664 tag",id:"\u5220\u9664-tag",level:3},{value:"\u540c\u6b65\u672c\u5730\u7684\u8fdc\u7a0b\u5206\u652f",id:"\u540c\u6b65\u672c\u5730\u7684\u8fdc\u7a0b\u5206\u652f",level:3}],u={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-\u547d\u4ee4"},"Git \u547d\u4ee4"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5220\u9664-git-\u8fc7\u6ee4\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939"},"\u5220\u9664 Git \u8fc7\u6ee4\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 Git \u6e05\u9664\u6240\u6709\u672a\u88ab\u8ddf\u8e2a\u7684\u6587\u4ef6\u548c\u76ee\u5f55\n# -f\uff1a\u5f3a\u5236\u5220\u9664\uff08\u65e0\u9700\u786e\u8ba4\uff09\n# -x\uff1a\u5305\u62ec\u5ffd\u7565\u6e05\u5355\u4e2d\u5217\u51fa\u7684\u6587\u4ef6\u548c\u76ee\u5f55\n# -d: \u5305\u542b\u672a\u88ab\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u8ddf\u8e2a\u7684\u76ee\u5f55\uff08\u6ce8\u610f\uff1a\u6b64\u9009\u9879\u4f1a\u5220\u9664\u5305\u62ec\u7a7a\u76ee\u5f55\uff09\ngit clean -fxd\n")),(0,a.kt)("h3",{id:"\u91cd\u7f6e\u5206\u652f"},"\u91cd\u7f6e\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5207\u6362\u5230\u65e7\u7684\u5206\u652f dev\ngit checkout dev\n\n# \u5c06\u65e7\u7684\u5206\u652f dev \u91cd\u7f6e\u6210 master\ngit reset --hard master\n\n# \u518d\u63a8\u5f3a\u5236\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93(\u9700\u8981\u8fdc\u7a0b\u4ed3\u5e93\u5f00\u542f\u5f3a\u5236\u63a8\u9001\u6743\u9650)\ngit push origin dev --force\n")),(0,a.kt)("h3",{id:"\u5220\u9664-tag"},"\u5220\u9664 tag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u672c\u5730 tag\ngit tag --delete TagName\n\n# \u540c\u6b65\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push origin :TagName\n")),(0,a.kt)("h3",{id:"\u540c\u6b65\u672c\u5730\u7684\u8fdc\u7a0b\u5206\u652f"},"\u540c\u6b65\u672c\u5730\u7684\u8fdc\u7a0b\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u672c\u5730\u5206\u652f\u548c\u8ffd\u8e2a\u60c5\u51b5\ngit remote show origin\n\n# \u5220\u672c\u5730\u591a\u4f59\u7684\u8fdc\u7a0b\u5206\u652f\ngit remote prune origin\n")))}p.isMDXComponent=!0}}]);