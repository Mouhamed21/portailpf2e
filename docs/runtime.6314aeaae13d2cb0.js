(()=>{"use strict";var e,v={},m={};function a(e){var c=m[e];if(void 0!==c)return c.exports;var f=m[e]={exports:{}};return v[e](f,f.exports,a),f.exports}a.m=v,e=[],a.O=(c,f,t,b)=>{if(!f){var d=1/0;for(r=0;r<e.length;r++){for(var[f,t,b]=e[r],u=!0,n=0;n<f.length;n++)(!1&b||d>=b)&&Object.keys(a.O).every(p=>a.O[p](f[n]))?f.splice(n--,1):(u=!1,b<d&&(d=b));if(u){e.splice(r--,1);var o=t();void 0!==o&&(c=o)}}return c}b=b||0;for(var r=e.length;r>0&&e[r-1][2]>b;r--)e[r]=e[r-1];e[r]=[f,t,b]},a.d=(e,c)=>{for(var f in c)a.o(c,f)&&!a.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((c,f)=>(a.f[f](e,c),c),[])),a.u=e=>(8592===e?"common":e)+"."+{639:"a20697e3b91e51f8",966:"9e8643d8b61cf63b",1122:"292076eca65cd04e",1192:"9c334339ad56e300",1331:"be20e638b1ad8523",1732:"f7f2955eda59d456",2043:"7164ebf642c67e7d",2151:"6eeb9a1be23dfdb2",2582:"3c4caa122cd0f409",2752:"691478644750af2d",2811:"bd6f7df60dc538ee",2947:"5ee7329b736b976c",3259:"d99213069f93a132",3280:"2379d39291bd64d7",3530:"aaaed21acfe72a21",3693:"e86e7b137ba23374",3722:"1231a34afab2b13d",3794:"19d23c0f2b2fbdb2",4055:"5ce69d34a4b052b2",4104:"657913582fcd1322",4801:"e51c40a491261c69",5186:"e9d0bef56d0997aa",5373:"59b3fca4b2c880b5",5821:"2de1ffe0003952b8",5832:"758963ac2c276665",5938:"2a88b14b3ae2d4b0",5952:"d061f0f4b968d89b",6022:"71be3c89ebe920aa",6068:"2be20f39c949ac5a",6324:"cbca47b04bb0faed",6426:"2cfc9fde5f3049bf",6645:"9340c787a2ae820d",6824:"f195ef3148b14b48",6942:"80fca93efe0767bb",7203:"12899168fcb423a9",7294:"c385a3f8aac442b9",7471:"1f283e31ff15c290",7493:"2239034f40acd5ba",7590:"4872f5456ede6016",7853:"acc4bc57dded5c83",8099:"040a7767374c6fc5",8118:"7c9fb72d1cc3fa02",8336:"a929ab6446739e79",8549:"b2f676f7317e48f6",8592:"2166b4f7cbea6a51",8628:"3194aeb5c67ffa9d",9252:"4f61c18797026bec",9297:"fbf9d7d682786640",9502:"e735827fa1220dfc",9552:"c1cc2a343e9540b7"}[e]+".js",a.miniCssF=e=>{},a.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),(()=>{var e={},c="sakai-ng:";a.l=(f,t,b,r)=>{if(e[f])e[f].push(t);else{var d,u;if(void 0!==b)for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++){var i=n[o];if(i.getAttribute("src")==f||i.getAttribute("data-webpack")==c+b){d=i;break}}d||(u=!0,(d=document.createElement("script")).type="module",d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",c+b),d.src=a.tu(f)),e[f]=[t];var l=(g,p)=>{d.onerror=d.onload=null,clearTimeout(s);var _=e[f];if(delete e[f],d.parentNode&&d.parentNode.removeChild(d),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),u&&document.head.appendChild(d)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:c=>c},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(t,b)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)b.push(r[2]);else if(3666!=t){var d=new Promise((i,l)=>r=e[t]=[i,l]);b.push(r[2]=d);var u=a.p+a.u(t),n=new Error;a.l(u,i=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;n.message="Loading chunk "+t+" failed.\n("+l+": "+s+")",n.name="ChunkLoadError",n.type=l,n.request=s,r[1](n)}},"chunk-"+t,t)}else e[t]=0},a.O.j=t=>0===e[t];var c=(t,b)=>{var n,o,[r,d,u]=b,i=0;if(r.some(s=>0!==e[s])){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);if(u)var l=u(a)}for(t&&t(b);i<r.length;i++)a.o(e,o=r[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},f=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))})()})();