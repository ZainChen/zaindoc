"use strict";(self.webpackChunkzaindoc=self.webpackChunkzaindoc||[]).push([[7920],{8824:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(7294),r=a(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=u();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}},1473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(7294),r=a(2263),l=a(3929),s=a(5742),c=a(9960),u=a(5999),o=a(373),m=a(902),h=a(8824),i=a(143),p=a(6550),d=a(412);const g="q";const f=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:a}}=(0,r.Z)();return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get(g)||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set(g,a):n.delete(g),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var y=a(22),E=a(8202),I=a(2539),S=a(726),R=a(1073),w=a(311),P=a(3926),b=a(1029);const F={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function k(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,i.gA)();let a=e;try{const{preferredVersion:e}=(0,o.J)(t?.pluginId??b.gQ);e&&!e.isLast&&(a=e.path+"/")}catch(_){if(b.l9&&!(_ instanceof m.i6))throw _}const{selectMessage:l}=(0,h.c)(),{searchValue:c,updateSearchPath:p}=f(),[d,g]=(0,n.useState)(c),[I,S]=(0,n.useState)(),[R,P]=(0,n.useState)(),k=(0,n.useMemo)((()=>d?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:d}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[d]);(0,n.useEffect)((()=>{p(d),I&&(d?I(d,(e=>{P(e)})):P(void 0))}),[d,I]);const C=(0,n.useCallback)((e=>{g(e.target.value)}),[]);return(0,n.useEffect)((()=>{c&&c!==d&&g(c)}),[c]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.w)(a);S((()=>(0,E.v)(e,t,100)))}()}),[a]),n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,k)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,k),n.createElement("input",{type:"search",name:"q",className:F.searchQueryInput,"aria-label":"Search",onChange:C,value:d,autoComplete:"off",autoFocus:!0}),!I&&d&&n.createElement("div",null,n.createElement(w.Z,null)),R&&(R.length>0?n.createElement("p",null,l(R.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:R.length}))):n.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),n.createElement("section",null,R&&R.map((e=>n.createElement(v,{key:e.document.i,searchResult:e}))))))}function v(e){let{searchResult:{document:t,type:a,page:r,tokens:l,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:r.b).slice(),h=o?t.s:t.t;return u||m.push(r.t),n.createElement("article",{className:F.searchResultItem},n.createElement("h2",null,n.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,I.C)(h,l):(0,S.o)(h,(0,R.m)(s,"t"),l,100)}})),m.length>0&&n.createElement("p",{className:F.searchResultItemPath},(0,P.e)(m)),o&&n.createElement("p",{className:F.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,R.m)(s,"t"),l,100)}}))}const C=function(){return n.createElement(l.Z,null,n.createElement(k,null))}}}]);