import{S as a,i as s,s as e,e as c,t,k as l,c as r,a as o,d as n,g as i,n as f,b as d,f as h,F as u,O as m,K as p,R as v,T as x,U as g,V as E,E as b,j as I,m as w,o as k,x as y,u as V,v as D,l as j,W as A,X as P,w as $,I as N,Y as S,Z as T,A as O,_ as H,r as R,$ as F,a0 as L,a1 as M,h as U}from"../../chunks/vendor-466f42ee.js";function q(a){let s,e,g,b,I,w,k,y,V,D,j,A,P,$,N,S;return{c(){s=c("div"),e=c("h1"),g=c("i"),b=t(" Prayer Requests"),I=l(),w=c("div"),k=l(),y=c("form"),V=c("input"),D=l(),j=c("button"),A=c("i"),this.h()},l(a){s=r(a,"DIV",{class:!0});var c=o(s);e=r(c,"H1",{class:!0});var t=o(e);g=r(t,"I",{class:!0}),o(g).forEach(n),b=i(t," Prayer Requests"),t.forEach(n),I=f(c),w=r(c,"DIV",{class:!0}),o(w).forEach(n),k=f(c),y=r(c,"FORM",{action:!0,class:!0});var l=o(y);V=r(l,"INPUT",{type:!0,placeholder:!0,class:!0}),D=f(l),j=r(l,"BUTTON",{class:!0});var d=o(j);A=r(d,"I",{class:!0}),o(A).forEach(n),d.forEach(n),l.forEach(n),c.forEach(n),this.h()},h(){d(g,"class","fas fa-arrow-left mr-6"),d(e,"class","text-2xl"),d(w,"class","flex-auto"),d(V,"type","text"),d(V,"placeholder","Your request"),d(V,"class","focus:border-black outline-none border border-r-0 p-2 flex-auto"),d(A,"class","fas fa-arrow-up"),d(j,"class","btn"),d(y,"action",""),d(y,"class","flex"),d(s,"class","fixed w-full md:w-3/12  bg-white top-0 bottom-0 left-0 p-10 flex flex-col")},m(c,t){h(c,s,t),u(s,e),u(e,g),u(e,b),u(s,I),u(s,w),u(s,k),u(s,y),u(y,V),u(y,D),u(y,j),u(j,A),$=!0,N||(S=m(g,"click",a[1]),N=!0)},p:p,i(a){$||(v((()=>{P||(P=x(s,E,{duration:1e3,x:0},!0)),P.run(1)})),$=!0)},o(a){P||(P=x(s,E,{duration:1e3,x:0},!1)),P.run(0),$=!1},d(a){a&&n(s),a&&P&&P.end(),N=!1,S()}}}function C(a){const s=g();return[s,()=>s("visible",!1)]}class W extends a{constructor(a){super(),s(this,a,C,q,e,{})}}const{document:Y}=H;function _(a,s,e){const c=a.slice();return c[17]=s[e].id,c[18]=s[e].stream,c[20]=e,c}function Q(a){let s,e,t,l;return{c(){s=c("video"),this.h()},l(a){s=r(a,"VIDEO",{class:!0}),o(s).forEach(n),this.h()},h(){s.autoplay=!0,d(s,"class","full-video svelte-13g81ul")},m(c,r){h(c,s,r),t||(l=L(e=J.call(null,s,a[18])),t=!0)},p(s,c){a=s,e&&M(e.update)&&1&c&&e.update.call(null,a[18])},d(a){a&&n(s),t=!1,l()}}}function z(a){let s,e,m,p,v,x,g,E=a[17]+"";return{c(){s=c("h1"),e=t(E),m=l(),p=c("video"),this.h()},l(a){s=r(a,"H1",{class:!0});var c=o(s);e=i(c,E),c.forEach(n),m=f(a),p=r(a,"VIDEO",{class:!0}),o(p).forEach(n),this.h()},h(){d(s,"class","text-3xl my-4"),p.autoplay=!0,d(p,"class","thumbnail-video svelte-13g81ul")},m(c,t){h(c,s,t),u(s,e),h(c,m,t),h(c,p,t),x||(g=L(v=J.call(null,p,a[18])),x=!0)},p(s,c){a=s,1&c&&E!==(E=a[17]+"")&&U(e,E),v&&M(v.update)&&1&c&&v.update.call(null,a[18])},d(a){a&&n(s),a&&n(m),a&&n(p),x=!1,g()}}}function B(a){let s,e,m,p,v,x,g,E=a[17]+"";return{c(){s=c("h1"),e=t(E),m=l(),p=c("span"),v=c("i"),x=l(),g=c("i"),this.h()},l(a){s=r(a,"H1",{class:!0});var c=o(s);e=i(c,E),c.forEach(n),m=f(a),p=r(a,"SPAN",{class:!0});var t=o(p);v=r(t,"I",{class:!0}),o(v).forEach(n),x=f(t),g=r(t,"I",{class:!0}),o(g).forEach(n),t.forEach(n),this.h()},h(){d(s,"class","text-3xl my-4"),d(v,"class","fas fa-circle text-green-500 fa-stack-2x "),d(g,"class","fas fa-chair fa-stack-1x text-white"),d(p,"class","fa-stack fa-2x")},m(a,c){h(a,s,c),u(s,e),h(a,m,c),h(a,p,c),u(p,v),u(p,x),u(p,g)},p(a,s){1&s&&E!==(E=a[17]+"")&&U(e,E)},d(a){a&&n(s),a&&n(m),a&&n(p)}}}function K(a){let s,e,t,i;function p(a,s){return 0==a[4]?B:1==a[4]?z:Q}let v=p(a),x=v(a);return{c(){s=c("div"),x.c(),e=l(),this.h()},l(a){s=r(a,"DIV",{class:!0});var c=o(s);x.l(c),e=f(c),c.forEach(n),this.h()},h(){d(s,"class","border flex flex-col justify-center items-center rounded-xl bg-white"),b(s,"py-6",2!==a[4])},m(c,l){h(c,s,l),x.m(s,null),u(s,e),t||(i=m(s,"dblclick",a[5]),t=!0)},p(a,c){v===(v=p(a))&&x?x.p(a,c):(x.d(1),x=v(a),x&&(x.c(),x.m(s,e))),16&c&&b(s,"py-6",2!==a[4])},d(a){a&&n(s),x.d(),t=!1,i()}}}function X(a){let s,e;return s=new W({}),s.$on("visible",a[11]),{c(){I(s.$$.fragment)},l(a){w(s.$$.fragment,a)},m(a,c){k(s,a,c),e=!0},p:p,i(a){e||(y(s.$$.fragment,a),e=!0)},o(a){V(s.$$.fragment,a),e=!1},d(a){D(s,a)}}}function Z(a){let s,e,p,v,x,g,E,I,w,k,D,T,O,H,F,L,M,U,q,C,W,Q,z,B,Z,G,J,aa,sa,ea,ca,ta,la,ra,oa,na,ia,fa,da,ha,ua,ma,pa,va,xa,ga,Ea,ba,Ia,wa,ka,ya,Va,Da,ja=a[0],Aa=[];for(let c=0;c<ja.length;c+=1)Aa[c]=K(_(a,ja,c));let Pa=a[1]&&X(a);return{c(){s=c("script"),p=l(),v=c("div"),x=c("div"),g=c("iframe"),I=l(),w=c("div"),k=c("h1"),D=c("i"),T=l(),O=c("h1"),H=t("Name"),F=l(),L=c("a"),M=t("Subscribe "),U=c("span"),q=t("33"),C=l(),W=c("a"),Q=t("Likes"),z=l(),B=c("div");for(let a=0;a<Aa.length;a+=1)Aa[a].c();Z=l(),G=c("div"),J=c("div"),aa=c("span"),sa=c("i"),ea=l(),ca=c("i"),ta=l(),la=c("div"),ra=c("span"),oa=c("i"),na=l(),ia=c("i"),fa=l(),da=c("div"),ha=c("span"),ua=c("i"),ma=l(),pa=c("i"),va=l(),xa=c("div"),ga=c("span"),Ea=c("i"),ba=l(),Ia=c("i"),wa=l(),Pa&&Pa.c(),ka=j(),this.h()},l(a){const e=A('[data-svelte="svelte-4n7nzi"]',Y.head);s=r(e,"SCRIPT",{src:!0}),o(s).forEach(n),e.forEach(n),p=f(a),v=r(a,"DIV",{class:!0});var c=o(v);x=r(c,"DIV",{class:!0});var t=o(x);g=r(t,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),o(g).forEach(n),I=f(t),w=r(t,"DIV",{class:!0});var l=o(w);k=r(l,"H1",{class:!0});var d=o(k);D=r(d,"I",{class:!0}),o(D).forEach(n),d.forEach(n),T=f(l),O=r(l,"H1",{class:!0});var h=o(O);H=i(h,"Name"),h.forEach(n),F=f(l),L=r(l,"A",{href:!0,class:!0});var u=o(L);M=i(u,"Subscribe "),U=r(u,"SPAN",{class:!0});var m=o(U);q=i(m,"33"),m.forEach(n),u.forEach(n),C=f(l),W=r(l,"A",{href:!0});var E=o(W);Q=i(E,"Likes"),E.forEach(n),l.forEach(n),t.forEach(n),z=f(c),B=r(c,"DIV",{class:!0});var b=o(B);for(let s=0;s<Aa.length;s+=1)Aa[s].l(b);b.forEach(n),c.forEach(n),Z=f(a),G=r(a,"DIV",{class:!0,id:!0});var y=o(G);J=r(y,"DIV",{});var V=o(J);aa=r(V,"SPAN",{class:!0});var P=o(aa);sa=r(P,"I",{class:!0}),o(sa).forEach(n),ea=f(P),ca=r(P,"I",{class:!0}),o(ca).forEach(n),P.forEach(n),V.forEach(n),ta=f(y),la=r(y,"DIV",{class:!0});var $=o(la);ra=r($,"SPAN",{class:!0});var N=o(ra);oa=r(N,"I",{class:!0}),o(oa).forEach(n),na=f(N),ia=r(N,"I",{class:!0}),o(ia).forEach(n),N.forEach(n),$.forEach(n),fa=f(y),da=r(y,"DIV",{class:!0});var S=o(da);ha=r(S,"SPAN",{class:!0});var R=o(ha);ua=r(R,"I",{class:!0}),o(ua).forEach(n),ma=f(R),pa=r(R,"I",{class:!0}),o(pa).forEach(n),R.forEach(n),S.forEach(n),va=f(y),xa=r(y,"DIV",{class:!0});var _=o(xa);ga=r(_,"SPAN",{class:!0});var K=o(ga);Ea=r(K,"I",{class:!0}),o(Ea).forEach(n),ba=f(K),Ia=r(K,"I",{class:!0}),o(Ia).forEach(n),K.forEach(n),_.forEach(n),y.forEach(n),wa=f(a),Pa&&Pa.l(a),ka=j(),this.h()},h(){Y.title="VIDEO CHAT",P(s.src,e="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js")||d(s,"src","https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"),s.defer=!0,d(g,"class","md:w-8/12 svelte-13g81ul"),P(g.src,E="https://www.youtube.com/embed/pF0WLHERdOQ")||d(g,"src","https://www.youtube.com/embed/pF0WLHERdOQ"),d(g,"title","YouTube video player"),d(g,"frameborder","0"),d(g,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),g.allowFullscreen=!0,d(D,"class","fab fa-youtube fa-3x text-red-700"),d(k,"class","text-center"),d(O,"class","text-center"),d(U,"class","text-right"),d(L,"href",""),d(L,"class"," flex flex-row justify-between"),d(W,"href",""),d(w,"class","flex-1 p-10 flex flex-col items-stretch justify-center gap-6"),d(x,"class","md:flex flex-wrap mb-3"),d(B,"class","grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 md:gap-y-12"),d(v,"class","container mx-auto p-2"),d(sa,"class","fas fa-circle fa-stack-2x"),b(sa,"text-green-600",a[2]),b(sa,"text-red-600",!a[2]),d(ca,"class","fas fa-stack-1x fa-inverse"),b(ca,"fa-microphone",a[2]),b(ca,"fa-microphone-slash",!a[2]),d(aa,"class","fa-stack fa-lg rounded-full shadow-xl"),d(oa,"class","fas fa-circle fa-stack-2x "),b(oa,"text-green-600",a[3]),b(oa,"text-red-600",!a[3]),d(ia,"class","fas fa-video fa-stack-1x fa-inverse"),d(ra,"class","fa-stack fa-lg rounded-full shadow-xl"),d(la,"class","md:ml-5"),d(ua,"class","fas fa-circle fa-stack-2x text-indigo-600"),d(pa,"class","fas fa-praying-hands fa-stack-1x fa-inverse"),d(ha,"class","fa-stack fa-lg rounded-full shadow-xl"),d(da,"class","md:ml-5"),d(Ea,"class","fas fa-circle fa-stack-2x text-purple-700"),d(Ia,"class","fas fa-chair fa-stack-1x fa-inverse"),d(ga,"class","fa-stack fa-lg rounded-full shadow-xl"),d(xa,"class","md:ml-5"),d(G,"class","fixed md:left-0 right-0 bottom-16 md:bottom-5 container mx-auto flex justify-center text-xl flex-row "),d(G,"id","controls")},m(e,c){u(Y.head,s),h(e,p,c),h(e,v,c),u(v,x),u(x,g),u(x,I),u(x,w),u(w,k),u(k,D),u(w,T),u(w,O),u(O,H),u(w,F),u(w,L),u(L,M),u(L,U),u(U,q),u(w,C),u(w,W),u(W,Q),u(v,z),u(v,B);for(let a=0;a<Aa.length;a+=1)Aa[a].m(B,null);h(e,Z,c),h(e,G,c),u(G,J),u(J,aa),u(aa,sa),u(aa,ea),u(aa,ca),u(G,ta),u(G,la),u(la,ra),u(ra,oa),u(ra,na),u(ra,ia),u(G,fa),u(G,da),u(da,ha),u(ha,ua),u(ha,ma),u(ha,pa),u(G,va),u(G,xa),u(xa,ga),u(ga,Ea),u(ga,ba),u(ga,Ia),h(e,wa,c),Pa&&Pa.m(e,c),h(e,ka,c),ya=!0,Va||(Da=[m(J,"click",a[6]),m(la,"click",a[7]),m(da,"click",a[9]),m(xa,"click",a[10])],Va=!0)},p(a,[s]){if(49&s){let e;for(ja=a[0],e=0;e<ja.length;e+=1){const c=_(a,ja,e);Aa[e]?Aa[e].p(c,s):(Aa[e]=K(c),Aa[e].c(),Aa[e].m(B,null))}for(;e<Aa.length;e+=1)Aa[e].d(1);Aa.length=ja.length}4&s&&b(sa,"text-green-600",a[2]),4&s&&b(sa,"text-red-600",!a[2]),4&s&&b(ca,"fa-microphone",a[2]),4&s&&b(ca,"fa-microphone-slash",!a[2]),8&s&&b(oa,"text-green-600",a[3]),8&s&&b(oa,"text-red-600",!a[3]),a[1]?Pa?(Pa.p(a,s),2&s&&y(Pa,1)):(Pa=X(a),Pa.c(),y(Pa,1),Pa.m(ka.parentNode,ka)):Pa&&(R(),V(Pa,1,1,(()=>{Pa=null})),$())},i(a){ya||(y(Pa),ya=!0)},o(a){V(Pa),ya=!1},d(a){n(s),a&&n(p),a&&n(v),N(Aa,a),a&&n(Z),a&&n(G),a&&n(wa),Pa&&Pa.d(a),a&&n(ka),Va=!1,S(Da)}}}const G=({page:a})=>{const{params:s}=a;return{status:200,props:{roomId:s.id}}};function J(a,s){return(null==s?void 0:s.getTracks().length)&&(a.srcObject=s),a.onloadedmetadata=function(s){a.play()},{update(s){J(a,s)}}}function aa(a,s,e){var c=this&&this.__awaiter||function(a,s,e,c){return new(e||(e=Promise))((function(t,l){function r(a){try{n(c.next(a))}catch(s){l(s)}}function o(a){try{n(c.throw(a))}catch(s){l(s)}}function n(a){var s;a.done?t(a.value):(s=a.value,s instanceof e?s:new e((function(a){a(s)}))).then(r,o)}n((c=c.apply(a,s||[])).next())}))};let t=[{id:"dd",name:"",stream:void 0}];T("id");let l=!1,r=!1,o=!1,{roomId:n}=s,i=0;function f(a,s=!r){return c(this,void 0,void 0,(function*(){e(2,r=s),console.log("toggleMic",r),t[0].stream.getAudioTracks().forEach((a=>a.enabled=r))}))}function d(a,s=!o){return c(this,void 0,void 0,(function*(){e(3,o=s),console.log("toggleCam",o),t[0].stream.getVideoTracks().forEach((a=>a.enabled=o))}))}function h(a,s){return e(0,t=[...t,{name:"",stream:a,id:s}]),t.length-1}O((()=>c(void 0,void 0,void 0,(function*(){localStorage.debug="*";const a=yield function(){return c(this,void 0,void 0,(function*(){return yield navigator.mediaDevices.getUserMedia({video:!0,audio:!0})}))}();e(0,t[0].stream=a,t),d(0,!1),f(0,!1);const s=F("/");console.log("This is not a peer");const l=new Peer(void 0,{host:"/",port:9e3});l.on("connection",(()=>console.log("connected"))),d(0,!1),f(0,!1),console.log(F),l.on("open",(a=>{s.emit("join-room",n,a)})),s.on("user-connected",(s=>{!function(a,s,e){const c=a.call(s,e);let l;c.on("stream",(a=>{l=h(a,s)})),c.on("close",(()=>t.splice(l,1)))}(l,s,a)})),l.on("call",(s=>{s.answer(a),document.createElement("video"),s.on("stream",(a=>{h(a,"22")}))}))}))));return a.$$set=a=>{"roomId"in a&&e(8,n=a.roomId)},[t,l,r,o,i,function(){e(4,2===i?i-=1:i+=1)},f,d,n,()=>e(1,l=!l),()=>{e(4,i=0),e(2,r=!1),e(3,o=!1)},()=>e(1,l=!1)]}export default class extends a{constructor(a){super(),s(this,a,aa,Z,e,{roomId:8})}}export{G as load};