(self.webpackChunktinasaurus=self.webpackChunktinasaurus||[]).push([[4195],{420:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var n=a(7294),r=a(7961),s=a(7462),o=a(6010);const i="features_ez_S",c="featureSvg_bdXF",l=e=>{let{image:t,title:a,description:r}=e;return n.createElement("div",{className:(0,o.Z)("col col--4")},t&&n.createElement("div",{className:"text--center"},n.createElement("img",{className:c,src:t,role:"img"})),n.createElement("div",{className:"text--center padding-horiz--md"},a&&n.createElement("h3",null,a),r&&n.createElement("p",null,r)))},u=e=>{let{data:t,index:a}=e;return n.createElement("section",{key:a,className:i},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.items.map(((e,t)=>n.createElement(l,(0,s.Z)({key:t},e)))))))};var d=a(9960);const m="heroBanner_EOH_",p="buttons_SjUQ";var g=a(2891),b=a.n(g);var h=a(2263);const f=e=>{let{data:t,index:a}=e;const{siteConfig:r}=(0,h.Z)();return n.createElement("header",{key:a,className:(0,o.Z)("hero hero--primary",m)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},t.title?t.title:r.title),n.createElement("p",{className:"hero__subtitle"},t.subtitle?t.subtitle:r.tagline),t.document&&n.createElement("div",{className:p},n.createElement(d.Z,{className:"button button--secondary button--lg",to:(s=t.document,s.replace(/\.mdx?$/,""))},t.documentLabel?t.documentLabel:(e=>{const t=e.split("/").slice(1).join(" \u2013 ").replace(/-/g," ").replace(/\.[^/.]+$/,"");return b()(t)})(t.document)))));var s},E=e=>{let{blocks:t}=e;return n.createElement(n.Fragment,null,t?t.map((function(e,t){switch(e._template){case"hero":return n.createElement("div",{"data-tinafield":`blocks.${t}`,key:t+e._template},n.createElement(f,{data:e,index:t}));case"features":return n.createElement("div",{"data-tinafield":`blocks.${t}`,key:t+e._template},n.createElement(u,{data:e,index:t}));default:return null}})):null)},w=a(4965);function v(){const{siteConfig:e}=(0,h.Z)();return n.createElement(r.Z,{title:w&&w.title?w.title:e.title,description:w&&w.description?w.description:e.tagline},w&&w.blocks?n.createElement(E,{blocks:w.blocks}):null)}},2891:(e,t,a)=>{const n=a(1439),r=a(7224),s="[^\\s'\u2019\\(\\)!?;:\"-]",o=new RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${s}))|(${s}))(${s}*[\u2019']*${s}*)`,"g");e.exports=(e,t={})=>{e=e.toLowerCase().replace(o,((e,t="",a,r,s,o,i)=>{const c=e.length+o>=i.length,l=function(e){const t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);if(!l)return e;if(!a){const e=r+s;if(n.has(e)&&!c)return l}return t+(r||a).toUpperCase()+s}));const a=t.special||[],s=(e=>e.map((e=>[new RegExp(`\\b${e}\\b`,"gi"),e])))([...r,...a]);return s.forEach((([t,a])=>{e=e.replace(t,a)})),e}},1439:e=>{e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:e=>{e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]},4965:e=>{"use strict";e.exports=JSON.parse('{"label":"Homepage","title":"Hello from Latinomads.com","description":"Description will go into a meta tag in <head />","blocks":[{"document":"docs/intro.mdx","documentLabel":"Docusaurus Tutorial - 5min \u23f1\ufe0f","_template":"hero"},{"items":[{"title":"Easy to Use","description":"Docusaurus was designed from the ground up to be easily installed and         used to get your website up and running quickly.\\n","image":"/img/undraw_docusaurus_mountain.svg"},{"title":"Focus on What Matters","description":"Docusaurus lets you focus on your docs, and we\'ll do the chores. Go ahead and move your docs into the docs directory.\\n","image":"/img/undraw_docusaurus_tree.svg"},{"title":"Powered by React","description":"Extend or customize your website layout by reusing React. Docusaurus can         be extended while reusing the same header and footer.\\n","image":"/img/undraw_docusaurus_react.svg"}],"_template":"features"}]}')}}]);