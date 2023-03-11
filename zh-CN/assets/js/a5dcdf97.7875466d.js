"use strict";(self.webpackChunkzaindoc=self.webpackChunkzaindoc||[]).push([[7932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Git \u547d\u4ee4",c={unversionedId:"note/Git/Git \u547d\u4ee4",id:"note/Git/Git \u547d\u4ee4",title:"Git \u547d\u4ee4",description:"---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/note/Git/Git \u547d\u4ee4.md",sourceDirName:"note/Git",slug:"/note/Git/Git \u547d\u4ee4",permalink:"/zaindoc/zh-CN/docs/note/Git/Git \u547d\u4ee4",draft:!1,editUrl:"https://github.com/ZainChen/zaindoc/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/note/Git/Git \u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Git \u76f8\u5173\u7b14\u8bb0",permalink:"/zaindoc/zh-CN/docs/note/Git/"},next:{title:"Github \u591a\u8d26\u53f7\u8fde\u63a5",permalink:"/zaindoc/zh-CN/docs/note/Git/Github \u591a\u8d26\u53f7\u8fde\u63a5"}},l={},u=[{value:"\u91cd\u7f6e\u5206\u652f",id:"\u91cd\u7f6e\u5206\u652f",level:3},{value:"\u5220\u9664 tag",id:"\u5220\u9664-tag",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-\u547d\u4ee4"},"Git \u547d\u4ee4"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u91cd\u7f6e\u5206\u652f"},"\u91cd\u7f6e\u5206\u652f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5207\u6362\u5230\u65e7\u7684\u5206\u652f dev\ngit checkout dev\n\n// \u5c06\u65e7\u7684\u5206\u652f dev \u91cd\u7f6e\u6210 master\ngit reset --hard master\n\n// \u518d\u63a8\u5f3a\u5236\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push origin dev --force\n")),(0,o.kt)("h3",{id:"\u5220\u9664-tag"},"\u5220\u9664 tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5220\u9664\u672c\u5730 tag\ngit tag --delete TagName\n\n// \u540c\u6b65\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push origin :TagName\n")))}s.isMDXComponent=!0}}]);