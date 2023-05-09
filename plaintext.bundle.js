(()=>{var e,t,n,r,o,a={6969:(e,t,n)=>{"use strict";n.a(e,(async(e,t)=>{try{var r=n(1242),o=n(8747);const a=document.getElementById("prev-post"),i=document.getElementById("next-post"),s=document.getElementById("post-container"),c=document.getElementById("login-form"),l=document.getElementById("login-form-submit"),d=document.getElementById("login-msg"),p=await(0,r.N)("challenge2.sqlite");function u(){const e=window.location.href;let t=new URLSearchParams(e.substring(e.indexOf("?"))).get("id");try{if(null==t){const e="select id from Posts order by date desc limit 1";t=p.exec(e)[0].values[0][0]}const e=`select title, date, content from Posts where id='${t}'`;let n=p.exec(e)[0].values[0];f(n[0],n[1],n[2])}catch(e){const t=document.createElement("h1");t.innerHTML="Post not found!",s.appendChild(t)}m(parseInt(t)-1,a),m(parseInt(t)+1,i)}function m(e,t){const n=p.prepare("select * from Posts where id=:id");try{if(n.getAsObject({":id":e}).id)return t.disabled=!1,void t.addEventListener("click",(()=>{window.location.replace(window.location.pathname+`?id=${e}`)}))}catch(e){}finally{n.free()}t.disabled=!0}function f(e,t,n){const r=document.createElement("p");r.innerHTML=e,r.setAttribute("class","post-text");const o=document.createElement("em");o.innerHTML=t,o.setAttribute("class","post-date");const a=document.createElement("p");a.innerHTML=n,a.setAttribute("class","post-content"),s.appendChild(r),s.appendChild(o),s.appendChild(a)}function h(e,t){const n=p.prepare("select password from Users where username=:user and password=:pass");try{if(!n.getAsObject({":user":e,":pass":t}).password)throw new Error("Login failed!");d.innerHTML="Success, welcome to back admin!"}catch(e){d.innerHTML="Login failed!"}finally{n.free()}d.style.display="block"}(0,o.Z)({title:"Plaintext",description:"Look what you have found - a blogsite by an newbie programmer! It's time to teach 'em the harsh reality of weak security practices.",goal:"Successfully log in as the admin.",hints:["The password is stored in plaintext","What does the URL look like?"]},document.getElementById("root")),l.addEventListener("click",(e=>{e.preventDefault(),h(c.username.value,c.password.value)})),u(),t()}catch(b){t(b)}}),1)},1242:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});var r=n(6657),o=n.n(r),a=n(2618);async function i(e){const t=o()({locateFile:()=>a.Z}),n=fetch(`/api/getDatabase/${e}`).then((e=>e.arrayBuffer())),[r,i]=await Promise.all([t,n]);return new r.Database(new Uint8Array(i))}},8747:(e,t,n)=>{"use strict";function r({title:e,description:t,goal:n,hints:r,btnText:o},a){const i=document.createElement("div");i.setAttribute("class","info-panel");const s=document.createElement("p");s.innerHTML=e,s.setAttribute("class","info-panel-title");const c=document.createElement("p");c.innerHTML=n,c.setAttribute("class","info-panel-goal");const l=document.createElement("p");l.innerHTML=t,l.setAttribute("class","info-panel-description");const d=document.createElement("ul"),p=document.createElement("p");p.innerHTML="Hints",p.setAttribute("class","info-panel-hints-header"),d.appendChild(p),r.forEach((e=>{const t=document.createElement("li");t.innerHTML=e,d.appendChild(t)})),d.setAttribute("class","info-panel-hints");const u=document.createElement("button"),m=document.createElement("span");m.innerHTML="&times;",u.appendChild(m),u.setAttribute("class","info-panel-close"),i.appendChild(s),i.appendChild(u),i.appendChild(l),i.appendChild(c),i.appendChild(d),i.style.display="none";const f=document.createElement("button");void 0===o&&(o="Info"),f.innerHTML=o,f.setAttribute("class","info-btn"),u.addEventListener("click",(()=>{i.style.display="none",f.disabled=!1})),f.addEventListener("click",(()=>{f.disabled=!0,i.style.display="block"})),a.appendChild(f),a.appendChild(i)}n.d(t,{Z:()=>r})},950:()=>{},6601:()=>{},9214:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{},803:()=>{}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(o,a,i)=>{var s;i&&((s=[]).d=1);var c,l,d,p=new Set,u=o.exports,m=new Promise(((e,t)=>{d=t,l=e}));m[t]=u,m[e]=e=>(s&&e(s),p.forEach(e),m.catch((e=>{}))),o.exports=m,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,r(a)}),(e=>{i[n]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(a=()=>t(i)).r=0;var n=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](n)))}));return a.r?l:i()}),(e=>(e?d(m[n]=e):l(u),r(s)))),s&&(s.d=0)},o=[],s.O=(e,t,n,r)=>{if(!t){var a=1/0;for(d=0;d<o.length;d++){for(var[t,n,r]=o[d],i=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((e=>s.O[e](t[c])))?t.splice(c--,1):(i=!1,r<a&&(a=r));if(i){o.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var d=o.length;d>0&&o[d-1][2]>r;d--)o[d]=o[d-1];o[d]=[t,n,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={746:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(c)var d=c(s)}for(t&&t(n);l<a.length;l++)o=a[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},n=self.webpackChunksql_injection_challenge=self.webpackChunksql_injection_challenge||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c=s.O(void 0,[333],(()=>s(6969)));c=s.O(c)})();