(()=>{var e,t,r,n,o,a={473:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{var n=r(1242),o=r(5108),a=e([n]);n=(a.then?(await a)():a)[0],localStorage.getItem("COOKIE")||localStorage.setItem("COOKIE","cookie_value");const i=await(0,n.N)("challenge1.sqlite");try{let e=localStorage.getItem("COOKIE");o.log(e);let t=`SELECT username FROM TrackedUsers where cookie_value = '${e}'`;o.log(t);let r=i.exec(t);const n=r[0].values[0][0];if(r){document.getElementById("welcome-back").style.visibility="visible",document.getElementById("username-span").textContent=` ${n}!`;const e=i.exec(`SELECT * FROM posts where user = '${n}';`)[0].values.map((e=>`\n        <style>\n          .message {margin-bottom: 15px;}\n          .user {float:left; font-weight:bold; color:#009; margin-bottom: 5px; margin-right: 10px;}\n          .content { margin-left: 30px;margin-right: 10px;font-style:italic; color:#; }\n        </style>\n\n        <div class="message">\n          <div class="user">${e[0]}: </div>\n          <div class="content">${e[1]}</div>\n        </div>\n      `));document.getElementById("forum-posts").innerHTML=e.join("")}}catch(e){document.getElementById("not-logged-in").style.visibility="visible",o.log("An error occurred, but I'm not tellin..."),o.log(e)}t()}catch(e){t(e)}}),1)},1242:(e,t,r)=>{"use strict";r.a(e,(async(e,n)=>{try{r.d(t,{N:()=>l});var o=r(6657),a=r.n(o),i=r(2618);async function l(e){const t=a()({locateFile:()=>i.Z}),r=fetch(`/api/getDatabase/${e}`).then((e=>e.arrayBuffer())),[n,o]=await Promise.all([t,r]);return new n.Database(new Uint8Array(o))}r(5108),await a()({locateFile:()=>i.Z}),n()}catch(c){n(c)}}),1)},950:()=>{},6601:()=>{},9214:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{},803:()=>{}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(o,a,i)=>{var l;i&&((l=[]).d=1);var c,s,u,p=new Set,d=o.exports,f=new Promise(((e,t)=>{u=t,s=e}));f[t]=d,f[e]=e=>(l&&e(l),p.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var l={};return l[e]=e=>{},l[t]=o,l})))(o);var i=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),s=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==l&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](r)))}));return a.r?s:i()}),(e=>(e?u(f[r]=e):s(d),n(l)))),l&&(l.d=0)},o=[],l.O=(e,t,r,n)=>{if(!t){var a=1/0;for(u=0;u<o.length;u++){for(var[t,r,n]=o[u],i=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](t[c])))?t.splice(c--,1):(i=!1,n<a&&(a=n));if(i){o.splice(u--,1);var s=r();void 0!==s&&(e=s)}}return e}n=n||0;for(var u=o.length;u>0&&o[u-1][2]>n;u--)o[u]=o[u-1];o[u]=[t,r,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={278:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,c]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var u=c(l)}for(t&&t(r);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},r=self.webpackChunksql_injection_challenge=self.webpackChunksql_injection_challenge||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[105,333],(()=>l(473)));c=l.O(c)})();