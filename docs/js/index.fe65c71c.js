(function(e){function t(t){for(var o,c,a=t[0],u=t[1],d=t[2],s=0,p=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);i&&i(t);while(p.length)p.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={index:0},l=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var i=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("aef7")},aef7:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r=Object(o["e"])("legend",null,"示例",-1),l=Object(o["d"])(" ｜ "),c=Object(o["d"])("下载图片"),a=Object(o["d"])(" ｜ "),u=Object(o["d"])("下载json"),d=Object(o["d"])(" ｜ "),i=Object(o["d"])("下载此代码"),s=Object(o["e"])("legend",null,"随便下载什么",-1);function p(e,t,n,p,f,b){const j=Object(o["j"])("Download");return Object(o["g"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("fieldset",null,[r,Object(o["e"])("button",{onClick:t[1]||(t[1]=(...t)=>e.onDownloadHTML&&e.onDownloadHTML(...t))},"下载 HTML"),l,Object(o["e"])(j,{href:"https://dummyimage.com/100x100/894FC4/FFF.png?text=hello"},{default:Object(o["l"])(()=>[c]),_:1}),a,Object(o["e"])(j,{href:"//httpbin.org/get",download:"json.json"},{default:Object(o["l"])(()=>[u]),_:1}),d,Object(o["e"])(j,{href:"https://raw.githubusercontent.com/bowencool/download-by-url/main/example/App.vue",download:"App.vue"},{default:Object(o["l"])(()=>[i]),_:1})]),Object(o["e"])("fieldset",null,[s,Object(o["m"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.url=t),placeholder:"自定义URL"},null,512),[[o["k"],e.url]]),Object(o["e"])("button",{onClick:t[3]||(t[3]=(...t)=>e.customDownload&&e.customDownload(...t))},"下载")])],64)}function f(e,t=!1){return new Promise((n,o)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onload=()=>{const o=new Blob([r.response],{type:"application/octet-stream"});let l="";if(t){const t=r.getResponseHeader("content-disposition");if(console.log(t),t&&t.match(/filename\*?=(utf-8'')?("?)([^"]*)\2$/))l=decodeURIComponent(RegExp.$3);else{const t=r.getResponseHeader("Content-Type");if(t&&t.match(/\/(\w+)/)){let n=RegExp.$1;const o=new URL(e),r=o.pathname.split("/");for(let e=r.length-1;e>=0;e--){const t=r[e];if(t&&"string"===typeof t){l=t,console.log(o,r,t);break}}l?l.endsWith("."+n)||(l+="."+n):l=`${o.host}.${n}`,console.log(t)}}console.log(l)}n({blob:o,filename:l})},r.onerror=o,r.send()})}async function b(e,t){const{blob:n,filename:o}=await f(e,!t);return j(n,t||o)}async function j(e,t){const n=document.createElement("a"),o=window.URL.createObjectURL(e);n.href=o,t&&(n.download=t),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(o)}function O(e,t,n,r,l,c){return Object(o["g"])(),Object(o["c"])("a",{onClick:t[1]||(t[1]=(...t)=>e.onDownload&&e.onDownload(...t))},[Object(o["i"])(e.$slots,"default")])}var w=Object(o["f"])({props:{href:String,download:String},setup(e){return{onDownload(){e.href&&b(e.href,e.download)}}}});w.render=O;var h=w,m=Object(o["f"])({name:"App",components:{Download:h},setup(){const e=Object(o["h"])("");return{url:e,onDownloadHTML(){b(window.location.href)},customDownload(){b(e.value)}}}});m.render=p;var g=m;Object(o["b"])(g).mount(document.body)}});
//# sourceMappingURL=index.fe65c71c.js.map