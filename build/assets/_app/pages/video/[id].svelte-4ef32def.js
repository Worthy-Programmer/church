import{_ as a}from"../../chunks/preload-helper-08cc8e69.js";import{S as s,i as e,s as t,e as c,t as l,k as r,c as o,a as n,d as i,g as f,n as d,b as u,f as h,F as m,O as p,K as v,R as x,T as g,U as E,V as b,E as I,W as w,X as k,j as y,m as D,o as V,x as A,u as $,v as j,l as N,Y as P,Z as O,_ as S,$ as T,M as R,a0 as _,w as H,a1 as M,a2 as F,A as L,a3 as U,a4 as q,r as C,a5 as W,h as Y}from"../../chunks/vendor-3c003bfe.js";function B(a){let s,e,t,E,I,w,k,y,D,V,A,$,j,N,P,O;return{c(){s=c("div"),e=c("h1"),t=c("i"),E=l(" Prayer Requests"),I=r(),w=c("div"),k=r(),y=c("form"),D=c("input"),V=r(),A=c("button"),$=c("i"),this.h()},l(a){s=o(a,"DIV",{class:!0});var c=n(s);e=o(c,"H1",{class:!0});var l=n(e);t=o(l,"I",{class:!0}),n(t).forEach(i),E=f(l," Prayer Requests"),l.forEach(i),I=d(c),w=o(c,"DIV",{class:!0}),n(w).forEach(i),k=d(c),y=o(c,"FORM",{action:!0,class:!0});var r=n(y);D=o(r,"INPUT",{type:!0,placeholder:!0,class:!0}),V=d(r),A=o(r,"BUTTON",{class:!0});var u=n(A);$=o(u,"I",{class:!0}),n($).forEach(i),u.forEach(i),r.forEach(i),c.forEach(i),this.h()},h(){u(t,"class","fas fa-arrow-left mr-6"),u(e,"class","text-2xl"),u(w,"class","flex-auto"),u(D,"type","text"),u(D,"placeholder","Your request"),u(D,"class","focus:border-black outline-none border border-r-0 p-2 flex-auto"),u($,"class","fas fa-arrow-up"),u(A,"class","btn"),u(y,"action",""),u(y,"class","flex"),u(s,"class","fixed w-full md:w-3/12  bg-white top-0 bottom-0 left-0 p-10 flex flex-col")},m(c,l){h(c,s,l),m(s,e),m(e,t),m(e,E),m(s,I),m(s,w),m(s,k),m(s,y),m(y,D),m(y,V),m(y,A),m(A,$),N=!0,P||(O=p(t,"click",a[1]),P=!0)},p:v,i(a){N||(x((()=>{j||(j=g(s,b,{duration:1e3,x:0},!0)),j.run(1)})),N=!0)},o(a){j||(j=g(s,b,{duration:1e3,x:0},!1)),j.run(0),N=!1},d(a){a&&i(s),a&&j&&j.end(),P=!1,O()}}}function Q(a){const s=E();return[s,()=>s("visible",!1)]}class z extends s{constructor(a){super(),e(this,a,Q,B,t,{})}}function K(a,s,e){const t=a.slice();return t[15]=s[e].id,t[16]=s[e].stream,t[18]=e,t}function X(a){let s,e,t,l;return{c(){s=c("video"),this.h()},l(a){s=o(a,"VIDEO",{class:!0}),n(s).forEach(i),this.h()},h(){s.autoplay=!0,u(s,"class","full-video svelte-13g81ul")},m(c,r){h(c,s,r),t||(l=S(e=ta.call(null,s,a[16])),t=!0)},p(s,t){a=s,e&&_(e.update)&&1&t&&e.update.call(null,a[16])},d(a){a&&i(s),t=!1,l()}}}function Z(a){let s,e,t,p,v,x,g,E=a[15]+"";return{c(){s=c("h1"),e=l(E),t=r(),p=c("video"),this.h()},l(a){s=o(a,"H1",{class:!0});var c=n(s);e=f(c,E),c.forEach(i),t=d(a),p=o(a,"VIDEO",{class:!0}),n(p).forEach(i),this.h()},h(){u(s,"class","text-3xl my-4"),p.autoplay=!0,u(p,"class","thumbnail-video svelte-13g81ul")},m(c,l){h(c,s,l),m(s,e),h(c,t,l),h(c,p,l),x||(g=S(v=ta.call(null,p,a[16])),x=!0)},p(s,t){a=s,1&t&&E!==(E=a[15]+"")&&Y(e,E),v&&_(v.update)&&1&t&&v.update.call(null,a[16])},d(a){a&&i(s),a&&i(t),a&&i(p),x=!1,g()}}}function G(a){let s,e,t,p,v,x,g,E=a[15]+"";return{c(){s=c("h1"),e=l(E),t=r(),p=c("span"),v=c("i"),x=r(),g=c("i"),this.h()},l(a){s=o(a,"H1",{class:!0});var c=n(s);e=f(c,E),c.forEach(i),t=d(a),p=o(a,"SPAN",{class:!0});var l=n(p);v=o(l,"I",{class:!0}),n(v).forEach(i),x=d(l),g=o(l,"I",{class:!0}),n(g).forEach(i),l.forEach(i),this.h()},h(){u(s,"class","text-3xl my-4"),u(v,"class","fas fa-circle text-green-500 fa-stack-2x "),u(g,"class","fas fa-chair fa-stack-1x text-white"),u(p,"class","fa-stack fa-2x")},m(a,c){h(a,s,c),m(s,e),h(a,t,c),h(a,p,c),m(p,v),m(p,x),m(p,g)},p(a,s){1&s&&E!==(E=a[15]+"")&&Y(e,E)},d(a){a&&i(s),a&&i(t),a&&i(p)}}}function J(a,s){let e,t,l,f,x,g=v;function E(a,s){return 0==a[4]?G:1==a[4]?Z:X}let b=E(s),y=b(s);return{key:a,first:null,c(){e=c("div"),y.c(),t=r(),this.h()},l(a){e=o(a,"DIV",{class:!0});var s=n(e);y.l(s),t=d(s),s.forEach(i),this.h()},h(){u(e,"class","border flex flex-col justify-center items-center rounded-xl bg-white"),I(e,"py-6",2!==s[4]),this.first=e},m(a,c){h(a,e,c),y.m(e,null),m(e,t),f||(x=p(e,"dblclick",s[5]),f=!0)},p(a,c){b===(b=E(s=a))&&y?y.p(s,c):(y.d(1),y=b(s),y&&(y.c(),y.m(e,t))),16&c&&I(e,"py-6",2!==s[4])},r(){l=e.getBoundingClientRect()},f(){w(e),g()},a(){g(),g=k(e,l,U,{duration:700})},d(a){a&&i(e),y.d(),f=!1,x()}}}function aa(a){let s,e;return s=new z({}),s.$on("visible",a[12]),{c(){y(s.$$.fragment)},l(a){D(s.$$.fragment,a)},m(a,t){V(s,a,t),e=!0},p:v,i(a){e||(A(s.$$.fragment,a),e=!0)},o(a){$(s.$$.fragment,a),e=!1},d(a){j(s,a)}}}function sa(a){let s,e,t,v,x,g,E,b,w,k,y,D,V,j,F,L,U,W,Y,B,Q,z,X,Z,G,sa,ea,ta,ca,la,ra,oa,na,ia,fa,da,ua,ha,ma,pa,va,xa,ga,Ea,ba,Ia,wa,ka,ya,Da,Va,Aa,$a,ja=[],Na=new Map,Pa=a[0];const Oa=a=>a[15];for(let c=0;c<Pa.length;c+=1){let s=K(a,Pa,c),e=Oa(s);Na.set(e,ja[c]=J(e,s))}let Sa=a[1]&&aa(a);return{c(){s=r(),e=c("div"),t=c("div"),v=c("iframe"),g=r(),E=c("div"),b=c("h1"),w=c("i"),k=r(),y=c("h1"),D=l("Name"),V=r(),j=c("a"),F=l("Subscribe "),L=c("span"),U=l("33"),W=r(),Y=c("a"),B=l("Likes"),Q=r(),z=c("div");for(let a=0;a<ja.length;a+=1)ja[a].c();Z=r(),G=c("div"),sa=c("div"),ea=c("span"),ta=c("i"),ca=r(),la=c("i"),ra=r(),oa=c("div"),na=c("span"),ia=c("i"),fa=r(),da=c("i"),ua=r(),ha=c("div"),ma=c("span"),pa=c("i"),va=r(),xa=c("i"),ga=r(),Ea=c("div"),ba=c("span"),Ia=c("i"),wa=r(),ka=c("i"),ya=r(),Sa&&Sa.c(),Da=N(),this.h()},l(a){P('[data-svelte="svelte-1v2ff17"]',document.head).forEach(i),s=d(a),e=o(a,"DIV",{class:!0});var c=n(e);t=o(c,"DIV",{class:!0});var l=n(t);v=o(l,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),n(v).forEach(i),g=d(l),E=o(l,"DIV",{class:!0});var r=n(E);b=o(r,"H1",{class:!0});var u=n(b);w=o(u,"I",{class:!0}),n(w).forEach(i),u.forEach(i),k=d(r),y=o(r,"H1",{class:!0});var h=n(y);D=f(h,"Name"),h.forEach(i),V=d(r),j=o(r,"A",{href:!0,class:!0});var m=n(j);F=f(m,"Subscribe "),L=o(m,"SPAN",{class:!0});var p=n(L);U=f(p,"33"),p.forEach(i),m.forEach(i),W=d(r),Y=o(r,"A",{href:!0});var x=n(Y);B=f(x,"Likes"),x.forEach(i),r.forEach(i),l.forEach(i),Q=d(c),z=o(c,"DIV",{class:!0});var I=n(z);for(let s=0;s<ja.length;s+=1)ja[s].l(I);I.forEach(i),c.forEach(i),Z=d(a),G=o(a,"DIV",{class:!0,id:!0});var A=n(G);sa=o(A,"DIV",{});var $=n(sa);ea=o($,"SPAN",{class:!0});var O=n(ea);ta=o(O,"I",{class:!0}),n(ta).forEach(i),ca=d(O),la=o(O,"I",{class:!0}),n(la).forEach(i),O.forEach(i),$.forEach(i),ra=d(A),oa=o(A,"DIV",{class:!0});var S=n(oa);na=o(S,"SPAN",{class:!0});var T=n(na);ia=o(T,"I",{class:!0}),n(ia).forEach(i),fa=d(T),da=o(T,"I",{class:!0}),n(da).forEach(i),T.forEach(i),S.forEach(i),ua=d(A),ha=o(A,"DIV",{class:!0});var R=n(ha);ma=o(R,"SPAN",{class:!0});var _=n(ma);pa=o(_,"I",{class:!0}),n(pa).forEach(i),va=d(_),xa=o(_,"I",{class:!0}),n(xa).forEach(i),_.forEach(i),R.forEach(i),ga=d(A),Ea=o(A,"DIV",{class:!0});var H=n(Ea);ba=o(H,"SPAN",{class:!0});var M=n(ba);Ia=o(M,"I",{class:!0}),n(Ia).forEach(i),wa=d(M),ka=o(M,"I",{class:!0}),n(ka).forEach(i),M.forEach(i),H.forEach(i),A.forEach(i),ya=d(a),Sa&&Sa.l(a),Da=N(),this.h()},h(){document.title="VIDEO CHAT",u(v,"class","md:w-8/12 svelte-13g81ul"),O(v.src,x="https://www.youtube.com/embed/pF0WLHERdOQ")||u(v,"src","https://www.youtube.com/embed/pF0WLHERdOQ"),u(v,"title","YouTube video player"),u(v,"frameborder","0"),u(v,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),v.allowFullscreen=!0,u(w,"class","fab fa-youtube fa-3x text-red-700"),u(b,"class","text-center"),u(y,"class","text-center"),u(L,"class","text-right"),u(j,"href",""),u(j,"class"," flex flex-row justify-between"),u(Y,"href",""),u(E,"class","flex-1 p-10 flex flex-col items-stretch justify-center gap-6"),u(t,"class","md:flex flex-wrap mb-3"),u(z,"class","grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 md:gap-y-12"),u(e,"class","container mx-auto p-2"),u(ta,"class","fas fa-circle fa-stack-2x"),I(ta,"text-green-600",a[2]),I(ta,"text-red-600",!a[2]),u(la,"class","fas fa-stack-1x fa-inverse"),I(la,"fa-microphone",a[2]),I(la,"fa-microphone-slash",!a[2]),u(ea,"class","fa-stack fa-lg rounded-full shadow-xl"),u(ia,"class","fas fa-circle fa-stack-2x "),I(ia,"text-green-600",a[3]),I(ia,"text-red-600",!a[3]),u(da,"class","fas fa-video fa-stack-1x fa-inverse"),u(na,"class","fa-stack fa-lg rounded-full shadow-xl"),u(oa,"class","md:ml-5"),u(pa,"class","fas fa-circle fa-stack-2x text-indigo-600"),u(xa,"class","fas fa-praying-hands fa-stack-1x fa-inverse"),u(ma,"class","fa-stack fa-lg rounded-full shadow-xl"),u(ha,"class","md:ml-5"),u(Ia,"class","fas fa-circle fa-stack-2x text-purple-700"),u(ka,"class","fas fa-chair fa-stack-1x fa-inverse"),u(ba,"class","fa-stack fa-lg rounded-full shadow-xl"),u(Ea,"class","md:ml-5"),u(G,"class","fixed md:left-0 right-0 bottom-16 md:bottom-5 container mx-auto flex justify-center text-xl flex-row "),u(G,"id","controls")},m(c,l){h(c,s,l),h(c,e,l),m(e,t),m(t,v),m(t,g),m(t,E),m(E,b),m(b,w),m(E,k),m(E,y),m(y,D),m(E,V),m(E,j),m(j,F),m(j,L),m(L,U),m(E,W),m(E,Y),m(Y,B),m(e,Q),m(e,z);for(let a=0;a<ja.length;a+=1)ja[a].m(z,null);h(c,Z,l),h(c,G,l),m(G,sa),m(sa,ea),m(ea,ta),m(ea,ca),m(ea,la),m(G,ra),m(G,oa),m(oa,na),m(na,ia),m(na,fa),m(na,da),m(G,ua),m(G,ha),m(ha,ma),m(ma,pa),m(ma,va),m(ma,xa),m(G,ga),m(G,Ea),m(Ea,ba),m(ba,Ia),m(ba,wa),m(ba,ka),h(c,ya,l),Sa&&Sa.m(c,l),h(c,Da,l),Va=!0,Aa||($a=[S(X=T.call(null,z,{items:a[0],flipDurationMs:700})),p(z,"consider",a[6]),p(z,"finalize",a[6]),p(sa,"click",a[7]),p(oa,"click",a[8]),p(ha,"click",a[10]),p(Ea,"click",a[11])],Aa=!0)},p(a,[s]){if(49&s){Pa=a[0];for(let a=0;a<ja.length;a+=1)ja[a].r();ja=R(ja,s,Oa,1,a,Pa,Na,z,q,J,null,K);for(let a=0;a<ja.length;a+=1)ja[a].a()}X&&_(X.update)&&1&s&&X.update.call(null,{items:a[0],flipDurationMs:700}),4&s&&I(ta,"text-green-600",a[2]),4&s&&I(ta,"text-red-600",!a[2]),4&s&&I(la,"fa-microphone",a[2]),4&s&&I(la,"fa-microphone-slash",!a[2]),8&s&&I(ia,"text-green-600",a[3]),8&s&&I(ia,"text-red-600",!a[3]),a[1]?Sa?(Sa.p(a,s),2&s&&A(Sa,1)):(Sa=aa(a),Sa.c(),A(Sa,1),Sa.m(Da.parentNode,Da)):Sa&&(C(),$(Sa,1,1,(()=>{Sa=null})),H())},i(a){Va||(A(Sa),Va=!0)},o(a){$(Sa),Va=!1},d(a){a&&i(s),a&&i(e);for(let s=0;s<ja.length;s+=1)ja[s].d();a&&i(Z),a&&i(G),a&&i(ya),Sa&&Sa.d(a),a&&i(Da),Aa=!1,M($a)}}}const ea=({page:a})=>{const{params:s}=a;return{status:200,props:{roomId:s.id}}};function ta(a,s){return(null==s?void 0:s.getTracks().length)&&(a.srcObject=s),a.onloadedmetadata=function(s){a.play()},{update(s){ta(a,s)}}}function ca(s,e,t){var c=this&&this.__awaiter||function(a,s,e,t){return new(e||(e=Promise))((function(c,l){function r(a){try{n(t.next(a))}catch(s){l(s)}}function o(a){try{n(t.throw(a))}catch(s){l(s)}}function n(a){var s;a.done?c(a.value):(s=a.value,s instanceof e?s:new e((function(a){a(s)}))).then(r,o)}n((t=t.apply(a,s||[])).next())}))};let l=[{id:"dd",name:"",stream:void 0}];F("id");let r=!1,o=!1,n=!1,{roomId:i}=e,f=0;function d(a,s=!o){return c(this,void 0,void 0,(function*(){t(2,o=s),console.log("toggleMic",o),l[0].stream.getAudioTracks().forEach((a=>a.enabled=o))}))}function u(a,s=!n){return c(this,void 0,void 0,(function*(){t(3,n=s),console.log("toggleCam",n),l[0].stream.getVideoTracks().forEach((a=>a.enabled=n))}))}L((()=>c(void 0,void 0,void 0,(function*(){localStorage.debug="*",yield function(){return c(this,void 0,void 0,(function*(){t(0,l[0].stream=yield navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),l)}))}();const s=W("/"),{default:e}=yield a((()=>import("../../chunks/peerjs.min-e543f14d.js").then((function(a){return a.p}))),["chunks/peerjs.min-e543f14d.js","chunks/vendor-3c003bfe.js"]),r=new e({port:9e3});console.log(r),r.on("connection",(()=>console.log("connected"))),u(0,!1),d(0,!1),console.log(W),r.on("open",(a=>{s.emit("join-room",i,a)}))}))));return s.$$set=a=>{"roomId"in a&&t(9,i=a.roomId)},[l,r,o,n,f,function(){t(4,2===f?f-=1:f+=1)},function(a){t(0,l=a.detail.items)},d,u,i,()=>t(1,r=!r),()=>{t(4,f=0),t(2,o=!1),t(3,n=!1)},()=>t(1,r=!1)]}export default class extends s{constructor(a){super(),e(this,a,ca,sa,t,{roomId:9})}}export{ea as load};