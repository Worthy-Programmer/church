import{S as a,i as s,s as e,e as t,t as c,k as l,c as r,a as o,d as n,g as i,n as f,b as d,f as h,F as u,O as m,K as p,R as v,T as x,U as g,V as E,E as b,W as I,X as w,j as k,m as y,o as D,x as V,u as j,v as A,l as P,Y as $,Z as N,_ as T,$ as S,M as O,a0 as R,w as H,a1 as M,a2 as F,A as C,a3 as L,a4 as U,r as q,a5 as W,h as Y}from"../../chunks/vendor-6dcf6149.js";function _(a){let s,e,g,b,I,w,k,y,D,V,j,A,P,$,N,T;return{c(){s=t("div"),e=t("h1"),g=t("i"),b=c(" Prayer Requests"),I=l(),w=t("div"),k=l(),y=t("form"),D=t("input"),V=l(),j=t("button"),A=t("i"),this.h()},l(a){s=r(a,"DIV",{class:!0});var t=o(s);e=r(t,"H1",{class:!0});var c=o(e);g=r(c,"I",{class:!0}),o(g).forEach(n),b=i(c," Prayer Requests"),c.forEach(n),I=f(t),w=r(t,"DIV",{class:!0}),o(w).forEach(n),k=f(t),y=r(t,"FORM",{action:!0,class:!0});var l=o(y);D=r(l,"INPUT",{type:!0,placeholder:!0,class:!0}),V=f(l),j=r(l,"BUTTON",{class:!0});var d=o(j);A=r(d,"I",{class:!0}),o(A).forEach(n),d.forEach(n),l.forEach(n),t.forEach(n),this.h()},h(){d(g,"class","fas fa-arrow-left mr-6"),d(e,"class","text-2xl"),d(w,"class","flex-auto"),d(D,"type","text"),d(D,"placeholder","Your request"),d(D,"class","focus:border-black outline-none border border-r-0 p-2 flex-auto"),d(A,"class","fas fa-arrow-up"),d(j,"class","btn"),d(y,"action",""),d(y,"class","flex"),d(s,"class","fixed w-full md:w-3/12  bg-white top-0 bottom-0 left-0 p-10 flex flex-col")},m(t,c){h(t,s,c),u(s,e),u(e,g),u(e,b),u(s,I),u(s,w),u(s,k),u(s,y),u(y,D),u(y,V),u(y,j),u(j,A),$=!0,N||(T=m(g,"click",a[1]),N=!0)},p:p,i(a){$||(v((()=>{P||(P=x(s,E,{duration:1e3,x:0},!0)),P.run(1)})),$=!0)},o(a){P||(P=x(s,E,{duration:1e3,x:0},!1)),P.run(0),$=!1},d(a){a&&n(s),a&&P&&P.end(),N=!1,T()}}}function z(a){const s=g();return[s,()=>s("visible",!1)]}class B extends a{constructor(a){super(),s(this,a,z,_,e,{})}}function Q(a,s,e){const t=a.slice();return t[15]=s[e].id,t[16]=s[e].stream,t[18]=e,t}function K(a){let s,e,c,l;return{c(){s=t("video"),this.h()},l(a){s=r(a,"VIDEO",{class:!0}),o(s).forEach(n),this.h()},h(){s.autoplay=!0,d(s,"class","full-video svelte-13g81ul")},m(t,r){h(t,s,r),c||(l=T(e=ea.call(null,s,a[16])),c=!0)},p(s,t){a=s,e&&R(e.update)&&1&t&&e.update.call(null,a[16])},d(a){a&&n(s),c=!1,l()}}}function X(a){let s,e,m,p,v,x,g,E=a[15]+"";return{c(){s=t("h1"),e=c(E),m=l(),p=t("video"),this.h()},l(a){s=r(a,"H1",{class:!0});var t=o(s);e=i(t,E),t.forEach(n),m=f(a),p=r(a,"VIDEO",{class:!0}),o(p).forEach(n),this.h()},h(){d(s,"class","text-3xl my-4"),p.autoplay=!0,d(p,"class","thumbnail-video svelte-13g81ul")},m(t,c){h(t,s,c),u(s,e),h(t,m,c),h(t,p,c),x||(g=T(v=ea.call(null,p,a[16])),x=!0)},p(s,t){a=s,1&t&&E!==(E=a[15]+"")&&Y(e,E),v&&R(v.update)&&1&t&&v.update.call(null,a[16])},d(a){a&&n(s),a&&n(m),a&&n(p),x=!1,g()}}}function Z(a){let s,e,m,p,v,x,g,E=a[15]+"";return{c(){s=t("h1"),e=c(E),m=l(),p=t("span"),v=t("i"),x=l(),g=t("i"),this.h()},l(a){s=r(a,"H1",{class:!0});var t=o(s);e=i(t,E),t.forEach(n),m=f(a),p=r(a,"SPAN",{class:!0});var c=o(p);v=r(c,"I",{class:!0}),o(v).forEach(n),x=f(c),g=r(c,"I",{class:!0}),o(g).forEach(n),c.forEach(n),this.h()},h(){d(s,"class","text-3xl my-4"),d(v,"class","fas fa-circle text-green-500 fa-stack-2x "),d(g,"class","fas fa-chair fa-stack-1x text-white"),d(p,"class","fa-stack fa-2x")},m(a,t){h(a,s,t),u(s,e),h(a,m,t),h(a,p,t),u(p,v),u(p,x),u(p,g)},p(a,s){1&s&&E!==(E=a[15]+"")&&Y(e,E)},d(a){a&&n(s),a&&n(m),a&&n(p)}}}function G(a,s){let e,c,i,v,x,g=p;function E(a,s){return 0==a[4]?Z:1==a[4]?X:K}let k=E(s),y=k(s);return{key:a,first:null,c(){e=t("div"),y.c(),c=l(),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=o(e);y.l(s),c=f(s),s.forEach(n),this.h()},h(){d(e,"class","border flex flex-col justify-center items-center rounded-xl bg-white"),b(e,"py-6",2!==s[4]),this.first=e},m(a,t){h(a,e,t),y.m(e,null),u(e,c),v||(x=m(e,"dblclick",s[5]),v=!0)},p(a,t){k===(k=E(s=a))&&y?y.p(s,t):(y.d(1),y=k(s),y&&(y.c(),y.m(e,c))),16&t&&b(e,"py-6",2!==s[4])},r(){i=e.getBoundingClientRect()},f(){I(e),g()},a(){g(),g=w(e,i,L,{duration:700})},d(a){a&&n(e),y.d(),v=!1,x()}}}function J(a){let s,e;return s=new B({}),s.$on("visible",a[12]),{c(){k(s.$$.fragment)},l(a){y(s.$$.fragment,a)},m(a,t){D(s,a,t),e=!0},p:p,i(a){e||(V(s.$$.fragment,a),e=!0)},o(a){j(s.$$.fragment,a),e=!1},d(a){A(s,a)}}}function aa(a){let s,e,p,v,x,g,E,I,w,k,y,D,A,F,C,L,W,Y,_,z,B,K,X,Z,aa,sa,ea,ta,ca,la,ra,oa,na,ia,fa,da,ha,ua,ma,pa,va,xa,ga,Ea,ba,Ia,wa,ka,ya,Da,Va,ja,Aa,Pa,$a,Na=[],Ta=new Map,Sa=a[0];const Oa=a=>a[15];for(let t=0;t<Sa.length;t+=1){let s=Q(a,Sa,t),e=Oa(s);Ta.set(e,Na[t]=G(e,s))}let Ra=a[1]&&J(a);return{c(){s=t("script"),p=l(),v=t("div"),x=t("div"),g=t("iframe"),I=l(),w=t("div"),k=t("h1"),y=t("i"),D=l(),A=t("h1"),F=c("Name"),C=l(),L=t("a"),W=c("Subscribe "),Y=t("span"),_=c("33"),z=l(),B=t("a"),K=c("Likes"),X=l(),Z=t("div");for(let a=0;a<Na.length;a+=1)Na[a].c();sa=l(),ea=t("div"),ta=t("div"),ca=t("span"),la=t("i"),ra=l(),oa=t("i"),na=l(),ia=t("div"),fa=t("span"),da=t("i"),ha=l(),ua=t("i"),ma=l(),pa=t("div"),va=t("span"),xa=t("i"),ga=l(),Ea=t("i"),ba=l(),Ia=t("div"),wa=t("span"),ka=t("i"),ya=l(),Da=t("i"),Va=l(),Ra&&Ra.c(),ja=P(),this.h()},l(a){const e=$('[data-svelte="svelte-4n7nzi"]',document.head);s=r(e,"SCRIPT",{src:!0}),o(s).forEach(n),e.forEach(n),p=f(a),v=r(a,"DIV",{class:!0});var t=o(v);x=r(t,"DIV",{class:!0});var c=o(x);g=r(c,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),o(g).forEach(n),I=f(c),w=r(c,"DIV",{class:!0});var l=o(w);k=r(l,"H1",{class:!0});var d=o(k);y=r(d,"I",{class:!0}),o(y).forEach(n),d.forEach(n),D=f(l),A=r(l,"H1",{class:!0});var h=o(A);F=i(h,"Name"),h.forEach(n),C=f(l),L=r(l,"A",{href:!0,class:!0});var u=o(L);W=i(u,"Subscribe "),Y=r(u,"SPAN",{class:!0});var m=o(Y);_=i(m,"33"),m.forEach(n),u.forEach(n),z=f(l),B=r(l,"A",{href:!0});var E=o(B);K=i(E,"Likes"),E.forEach(n),l.forEach(n),c.forEach(n),X=f(t),Z=r(t,"DIV",{class:!0});var b=o(Z);for(let s=0;s<Na.length;s+=1)Na[s].l(b);b.forEach(n),t.forEach(n),sa=f(a),ea=r(a,"DIV",{class:!0,id:!0});var V=o(ea);ta=r(V,"DIV",{});var j=o(ta);ca=r(j,"SPAN",{class:!0});var N=o(ca);la=r(N,"I",{class:!0}),o(la).forEach(n),ra=f(N),oa=r(N,"I",{class:!0}),o(oa).forEach(n),N.forEach(n),j.forEach(n),na=f(V),ia=r(V,"DIV",{class:!0});var T=o(ia);fa=r(T,"SPAN",{class:!0});var S=o(fa);da=r(S,"I",{class:!0}),o(da).forEach(n),ha=f(S),ua=r(S,"I",{class:!0}),o(ua).forEach(n),S.forEach(n),T.forEach(n),ma=f(V),pa=r(V,"DIV",{class:!0});var O=o(pa);va=r(O,"SPAN",{class:!0});var R=o(va);xa=r(R,"I",{class:!0}),o(xa).forEach(n),ga=f(R),Ea=r(R,"I",{class:!0}),o(Ea).forEach(n),R.forEach(n),O.forEach(n),ba=f(V),Ia=r(V,"DIV",{class:!0});var H=o(Ia);wa=r(H,"SPAN",{class:!0});var M=o(wa);ka=r(M,"I",{class:!0}),o(ka).forEach(n),ya=f(M),Da=r(M,"I",{class:!0}),o(Da).forEach(n),M.forEach(n),H.forEach(n),V.forEach(n),Va=f(a),Ra&&Ra.l(a),ja=P(),this.h()},h(){document.title="VIDEO CHAT",N(s.src,e="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js")||d(s,"src","https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"),s.defer=!0,d(g,"class","md:w-8/12 svelte-13g81ul"),N(g.src,E="https://www.youtube.com/embed/pF0WLHERdOQ")||d(g,"src","https://www.youtube.com/embed/pF0WLHERdOQ"),d(g,"title","YouTube video player"),d(g,"frameborder","0"),d(g,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),g.allowFullscreen=!0,d(y,"class","fab fa-youtube fa-3x text-red-700"),d(k,"class","text-center"),d(A,"class","text-center"),d(Y,"class","text-right"),d(L,"href",""),d(L,"class"," flex flex-row justify-between"),d(B,"href",""),d(w,"class","flex-1 p-10 flex flex-col items-stretch justify-center gap-6"),d(x,"class","md:flex flex-wrap mb-3"),d(Z,"class","grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 md:gap-y-12"),d(v,"class","container mx-auto p-2"),d(la,"class","fas fa-circle fa-stack-2x"),b(la,"text-green-600",a[2]),b(la,"text-red-600",!a[2]),d(oa,"class","fas fa-stack-1x fa-inverse"),b(oa,"fa-microphone",a[2]),b(oa,"fa-microphone-slash",!a[2]),d(ca,"class","fa-stack fa-lg rounded-full shadow-xl"),d(da,"class","fas fa-circle fa-stack-2x "),b(da,"text-green-600",a[3]),b(da,"text-red-600",!a[3]),d(ua,"class","fas fa-video fa-stack-1x fa-inverse"),d(fa,"class","fa-stack fa-lg rounded-full shadow-xl"),d(ia,"class","md:ml-5"),d(xa,"class","fas fa-circle fa-stack-2x text-indigo-600"),d(Ea,"class","fas fa-praying-hands fa-stack-1x fa-inverse"),d(va,"class","fa-stack fa-lg rounded-full shadow-xl"),d(pa,"class","md:ml-5"),d(ka,"class","fas fa-circle fa-stack-2x text-purple-700"),d(Da,"class","fas fa-chair fa-stack-1x fa-inverse"),d(wa,"class","fa-stack fa-lg rounded-full shadow-xl"),d(Ia,"class","md:ml-5"),d(ea,"class","fixed md:left-0 right-0 bottom-16 md:bottom-5 container mx-auto flex justify-center text-xl flex-row "),d(ea,"id","controls")},m(e,t){u(document.head,s),h(e,p,t),h(e,v,t),u(v,x),u(x,g),u(x,I),u(x,w),u(w,k),u(k,y),u(w,D),u(w,A),u(A,F),u(w,C),u(w,L),u(L,W),u(L,Y),u(Y,_),u(w,z),u(w,B),u(B,K),u(v,X),u(v,Z);for(let a=0;a<Na.length;a+=1)Na[a].m(Z,null);h(e,sa,t),h(e,ea,t),u(ea,ta),u(ta,ca),u(ca,la),u(ca,ra),u(ca,oa),u(ea,na),u(ea,ia),u(ia,fa),u(fa,da),u(fa,ha),u(fa,ua),u(ea,ma),u(ea,pa),u(pa,va),u(va,xa),u(va,ga),u(va,Ea),u(ea,ba),u(ea,Ia),u(Ia,wa),u(wa,ka),u(wa,ya),u(wa,Da),h(e,Va,t),Ra&&Ra.m(e,t),h(e,ja,t),Aa=!0,Pa||($a=[T(aa=S.call(null,Z,{items:a[0],flipDurationMs:700})),m(Z,"consider",a[6]),m(Z,"finalize",a[6]),m(ta,"click",a[7]),m(ia,"click",a[8]),m(pa,"click",a[10]),m(Ia,"click",a[11])],Pa=!0)},p(a,[s]){if(49&s){Sa=a[0];for(let a=0;a<Na.length;a+=1)Na[a].r();Na=O(Na,s,Oa,1,a,Sa,Ta,Z,U,G,null,Q);for(let a=0;a<Na.length;a+=1)Na[a].a()}aa&&R(aa.update)&&1&s&&aa.update.call(null,{items:a[0],flipDurationMs:700}),4&s&&b(la,"text-green-600",a[2]),4&s&&b(la,"text-red-600",!a[2]),4&s&&b(oa,"fa-microphone",a[2]),4&s&&b(oa,"fa-microphone-slash",!a[2]),8&s&&b(da,"text-green-600",a[3]),8&s&&b(da,"text-red-600",!a[3]),a[1]?Ra?(Ra.p(a,s),2&s&&V(Ra,1)):(Ra=J(a),Ra.c(),V(Ra,1),Ra.m(ja.parentNode,ja)):Ra&&(q(),j(Ra,1,1,(()=>{Ra=null})),H())},i(a){Aa||(V(Ra),Aa=!0)},o(a){j(Ra),Aa=!1},d(a){n(s),a&&n(p),a&&n(v);for(let s=0;s<Na.length;s+=1)Na[s].d();a&&n(sa),a&&n(ea),a&&n(Va),Ra&&Ra.d(a),a&&n(ja),Pa=!1,M($a)}}}const sa=({page:a})=>{const{params:s}=a;return{status:200,props:{roomId:s.id}}};function ea(a,s){return(null==s?void 0:s.getTracks().length)&&(a.srcObject=s),a.onloadedmetadata=function(s){a.play()},{update(s){ea(a,s)}}}function ta(a,s,e){var t=this&&this.__awaiter||function(a,s,e,t){return new(e||(e=Promise))((function(c,l){function r(a){try{n(t.next(a))}catch(s){l(s)}}function o(a){try{n(t.throw(a))}catch(s){l(s)}}function n(a){var s;a.done?c(a.value):(s=a.value,s instanceof e?s:new e((function(a){a(s)}))).then(r,o)}n((t=t.apply(a,s||[])).next())}))};let c=[{id:"dd",name:"",stream:void 0}];F("id");let l=!1,r=!1,o=!1,{roomId:n}=s,i=0;function f(a,s=!r){return t(this,void 0,void 0,(function*(){e(2,r=s),console.log("toggleMic",r),c[0].stream.getAudioTracks().forEach((a=>a.enabled=r))}))}function d(a,s=!o){return t(this,void 0,void 0,(function*(){e(3,o=s),console.log("toggleCam",o),c[0].stream.getVideoTracks().forEach((a=>a.enabled=o))}))}C((()=>t(void 0,void 0,void 0,(function*(){yield function(){return t(this,void 0,void 0,(function*(){e(0,c[0].stream=yield navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),c)}))}(),d(0,!1),f(0,!1);const a=W("/");console.log("This is not a peer");const s=new Peer(void 0,{host:"/",port:9e3});s.on("connection",(()=>console.log("connected"))),d(0,!1),f(0,!1),console.log(W),s.on("open",(s=>{a.emit("join-room",n,s)}))}))));return a.$$set=a=>{"roomId"in a&&e(9,n=a.roomId)},[c,l,r,o,i,function(){e(4,2===i?i-=1:i+=1)},function(a){e(0,c=a.detail.items)},f,d,n,()=>e(1,l=!l),()=>{e(4,i=0),e(2,r=!1),e(3,o=!1)},()=>e(1,l=!1)]}export default class extends a{constructor(a){super(),s(this,a,ta,aa,e,{roomId:9})}}export{sa as load};
