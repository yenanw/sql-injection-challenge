(()=>{var e,r,t,a,o,n={7047:(e,r,t)=>{"use strict";t.a(e,(async(e,r)=>{try{var a=t(6657),o=t.n(a),n=t(2618),i=t(5108);const e=o()({locateFile:()=>n.Z}),c=fetch("/api/getDatabase/challenge1.sqlite").then((e=>e.arrayBuffer())),[l,s]=await Promise.all([e,c]);let p=new l.Database(new Uint8Array(s)).exec("SELECT * FROM users;");i.log(p),i.log("WELCOME TO CHALLENGE 1"),r()}catch(e){r(e)}}),1)},950:()=>{},6601:()=>{},9214:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{},803:()=>{}},i={};function c(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=n,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,n,i)=>{var c;i&&((c=[]).d=1);var l,s,p,u=new Set,f=o.exports,h=new Promise(((e,r)=>{p=r,s=e}));h[r]=f,h[e]=e=>(c&&e(c),u.forEach(e),h.catch((e=>{}))),o.exports=h,n((o=>{var n;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var n=[];n.d=0,o.then((e=>{i[r]=e,a(n)}),(e=>{i[t]=e,a(n)}));var i={};return i[e]=e=>e(n),i}}var c={};return c[e]=e=>{},c[r]=o,c})))(o);var i=()=>l.map((e=>{if(e[t])throw e[t];return e[r]})),s=new Promise((r=>{(n=()=>r(i)).r=0;var t=e=>e!==c&&!u.has(e)&&(u.add(e),e&&!e.d&&(n.r++,e.push(n)));l.map((r=>r[e](t)))}));return n.r?s:i()}),(e=>(e?p(h[t]=e):s(f),a(c)))),c&&(c.d=0)},o=[],c.O=(e,r,t,a)=>{if(!r){var n=1/0;for(p=0;p<o.length;p++){for(var[r,t,a]=o[p],i=!0,l=0;l<r.length;l++)(!1&a||n>=a)&&Object.keys(c.O).every((e=>c.O[e](r[l])))?r.splice(l--,1):(i=!1,a<n&&(n=a));if(i){o.splice(p--,1);var s=t();void 0!==s&&(e=s)}}return e}a=a||0;for(var p=o.length;p>0&&o[p-1][2]>a;p--)o[p]=o[p-1];o[p]=[r,t,a]},c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={476:0};c.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[n,i,l]=t,s=0;if(n.some((r=>0!==e[r]))){for(a in i)c.o(i,a)&&(c.m[a]=i[a]);if(l)var p=l(c)}for(r&&r(t);s<n.length;s++)o=n[s],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(p)},t=self.webpackChunksql_injection_challenge=self.webpackChunksql_injection_challenge||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var l=c.O(void 0,[105,333],(()=>c(7047)));l=c.O(l)})();