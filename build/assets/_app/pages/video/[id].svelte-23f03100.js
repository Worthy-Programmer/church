import{S as a,i as s,s as e,e as t,t as c,k as l,c as r,a as o,d as i,g as n,n as f,b as d,f as u,F as h,O as m,K as p,R as v,T as x,U as g,V as E,E as b,W as I,X as w,j as k,m as y,o as D,x as V,u as A,v as $,l as N,Y as P,Z as S,_ as O,$ as T,M as H,a0 as M,w as R,a1 as j,a2 as F,A as L,a3 as U,a4 as q,r as C,a5 as W}from"../../chunks/vendor-6dcf6149.js";function Y(a){let s,e,g,b,I,w,k,y,D,V,A,$,N,P,S,O;return{c(){s=t("div"),e=t("h1"),g=t("i"),b=c(" Prayer Requests"),I=l(),w=t("div"),k=l(),y=t("form"),D=t("input"),V=l(),A=t("button"),$=t("i"),this.h()},l(a){s=r(a,"DIV",{class:!0});var t=o(s);e=r(t,"H1",{class:!0});var c=o(e);g=r(c,"I",{class:!0}),o(g).forEach(i),b=n(c," Prayer Requests"),c.forEach(i),I=f(t),w=r(t,"DIV",{class:!0}),o(w).forEach(i),k=f(t),y=r(t,"FORM",{action:!0,class:!0});var l=o(y);D=r(l,"INPUT",{type:!0,placeholder:!0,class:!0}),V=f(l),A=r(l,"BUTTON",{class:!0});var d=o(A);$=r(d,"I",{class:!0}),o($).forEach(i),d.forEach(i),l.forEach(i),t.forEach(i),this.h()},h(){d(g,"class","fas fa-arrow-left mr-6"),d(e,"class","text-2xl"),d(w,"class","flex-auto"),d(D,"type","text"),d(D,"placeholder","Your request"),d(D,"class","focus:border-black outline-none border border-r-0 p-2 flex-auto"),d($,"class","fas fa-arrow-up"),d(A,"class","btn"),d(y,"action",""),d(y,"class","flex"),d(s,"class","fixed w-full md:w-3/12  bg-white top-0 bottom-0 left-0 p-10 flex flex-col")},m(t,c){u(t,s,c),h(s,e),h(e,g),h(e,b),h(s,I),h(s,w),h(s,k),h(s,y),h(y,D),h(y,V),h(y,A),h(A,$),P=!0,S||(O=m(g,"click",a[1]),S=!0)},p:p,i(a){P||(v((()=>{N||(N=x(s,E,{duration:1e3,x:0},!0)),N.run(1)})),P=!0)},o(a){N||(N=x(s,E,{duration:1e3,x:0},!1)),N.run(0),P=!1},d(a){a&&i(s),a&&N&&N.end(),S=!1,O()}}}function _(a){const s=g();return[s,()=>s("visible",!1)]}class B extends a{constructor(a){super(),s(this,a,_,Y,e,{})}}function Q(a,s,e){const t=a.slice();return t[16]=s[e].id,t[17]=s[e].stream,t[19]=e,t}function z(a){let s,e,c,l;return{c(){s=t("video"),this.h()},l(a){s=r(a,"VIDEO",{class:!0}),o(s).forEach(i),this.h()},h(){s.autoplay=!0,d(s,"class","full-video svelte-13g81ul")},m(t,r){u(t,s,r),c||(l=O(e=ea.call(null,s,a[17])),c=!0)},p(s,t){a=s,e&&M(e.update)&&1&t&&e.update.call(null,a[17])},d(a){a&&i(s),c=!1,l()}}}function K(a){let s,e,m,p,v,x,g;return{c(){s=t("h1"),e=c(sa),m=l(),p=t("video"),this.h()},l(a){s=r(a,"H1",{class:!0});var t=o(s);e=n(t,sa),t.forEach(i),m=f(a),p=r(a,"VIDEO",{class:!0}),o(p).forEach(i),this.h()},h(){d(s,"class","text-3xl my-4"),p.autoplay=!0,d(p,"class","thumbnail-video svelte-13g81ul")},m(t,c){u(t,s,c),h(s,e),u(t,m,c),u(t,p,c),x||(g=O(v=ea.call(null,p,a[17])),x=!0)},p(s,e){a=s,v&&M(v.update)&&1&e&&v.update.call(null,a[17])},d(a){a&&i(s),a&&i(m),a&&i(p),x=!1,g()}}}function X(a){let s,e,m,v,x,g,E;return{c(){s=t("h1"),e=c(sa),m=l(),v=t("span"),x=t("i"),g=l(),E=t("i"),this.h()},l(a){s=r(a,"H1",{class:!0});var t=o(s);e=n(t,sa),t.forEach(i),m=f(a),v=r(a,"SPAN",{class:!0});var c=o(v);x=r(c,"I",{class:!0}),o(x).forEach(i),g=f(c),E=r(c,"I",{class:!0}),o(E).forEach(i),c.forEach(i),this.h()},h(){d(s,"class","text-3xl my-4"),d(x,"class","fas fa-circle text-green-500 fa-stack-2x "),d(E,"class","fas fa-chair fa-stack-1x text-white"),d(v,"class","fa-stack fa-2x")},m(a,t){u(a,s,t),h(s,e),u(a,m,t),u(a,v,t),h(v,x),h(v,g),h(v,E)},p:p,d(a){a&&i(s),a&&i(m),a&&i(v)}}}function Z(a,s){let e,c,n,v,x,g=p;function E(a,s){return 0==a[4]?X:1==a[4]?K:z}let k=E(s),y=k(s);return{key:a,first:null,c(){e=t("div"),y.c(),c=l(),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=o(e);y.l(s),c=f(s),s.forEach(i),this.h()},h(){d(e,"class","border flex flex-col justify-center items-center rounded-xl bg-white"),b(e,"py-6",2!==s[4]),this.first=e},m(a,t){u(a,e,t),y.m(e,null),h(e,c),v||(x=m(e,"dblclick",s[5]),v=!0)},p(a,t){k===(k=E(s=a))&&y?y.p(s,t):(y.d(1),y=k(s),y&&(y.c(),y.m(e,c))),16&t&&b(e,"py-6",2!==s[4])},r(){n=e.getBoundingClientRect()},f(){I(e),g()},a(){g(),g=w(e,n,U,{duration:700})},d(a){a&&i(e),y.d(),v=!1,x()}}}function G(a){let s,e;return s=new B({}),s.$on("visible",a[12]),{c(){k(s.$$.fragment)},l(a){y(s.$$.fragment,a)},m(a,t){D(s,a,t),e=!0},p:p,i(a){e||(V(s.$$.fragment,a),e=!0)},o(a){A(s.$$.fragment,a),e=!1},d(a){$(s,a)}}}function J(a){let s,e,p,v,x,g,E,I,w,k,y,D,$,F,L,U,W,Y,_,B,z,K,X,J,aa,sa,ea,ta,ca,la,ra,oa,ia,na,fa,da,ua,ha,ma,pa,va,xa,ga,Ea,ba,Ia,wa,ka,ya,Da,Va,Aa,$a,Na=[],Pa=new Map,Sa=a[0];const Oa=a=>a[16];for(let t=0;t<Sa.length;t+=1){let s=Q(a,Sa,t),e=Oa(s);Pa.set(e,Na[t]=Z(e,s))}let Ta=a[1]&&G(a);return{c(){s=l(),e=t("div"),p=t("div"),v=t("iframe"),g=l(),E=t("div"),I=t("h1"),w=t("i"),k=l(),y=t("h1"),D=c("Name"),$=l(),F=t("a"),L=c("Subscribe "),U=t("span"),W=c("33"),Y=l(),_=t("a"),B=c("Likes"),z=l(),K=t("div");for(let a=0;a<Na.length;a+=1)Na[a].c();J=l(),aa=t("div"),sa=t("div"),ea=t("span"),ta=t("i"),ca=l(),la=t("i"),ra=l(),oa=t("div"),ia=t("span"),na=t("i"),fa=l(),da=t("i"),ua=l(),ha=t("div"),ma=t("span"),pa=t("i"),va=l(),xa=t("i"),ga=l(),Ea=t("div"),ba=t("span"),Ia=t("i"),wa=l(),ka=t("i"),ya=l(),Ta&&Ta.c(),Da=N(),this.h()},l(a){P('[data-svelte="svelte-1v2ff17"]',document.head).forEach(i),s=f(a),e=r(a,"DIV",{class:!0});var t=o(e);p=r(t,"DIV",{class:!0});var c=o(p);v=r(c,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),o(v).forEach(i),g=f(c),E=r(c,"DIV",{class:!0});var l=o(E);I=r(l,"H1",{class:!0});var d=o(I);w=r(d,"I",{class:!0}),o(w).forEach(i),d.forEach(i),k=f(l),y=r(l,"H1",{class:!0});var u=o(y);D=n(u,"Name"),u.forEach(i),$=f(l),F=r(l,"A",{href:!0,class:!0});var h=o(F);L=n(h,"Subscribe "),U=r(h,"SPAN",{class:!0});var m=o(U);W=n(m,"33"),m.forEach(i),h.forEach(i),Y=f(l),_=r(l,"A",{href:!0});var x=o(_);B=n(x,"Likes"),x.forEach(i),l.forEach(i),c.forEach(i),z=f(t),K=r(t,"DIV",{class:!0});var b=o(K);for(let s=0;s<Na.length;s+=1)Na[s].l(b);b.forEach(i),t.forEach(i),J=f(a),aa=r(a,"DIV",{class:!0,id:!0});var V=o(aa);sa=r(V,"DIV",{});var A=o(sa);ea=r(A,"SPAN",{class:!0});var S=o(ea);ta=r(S,"I",{class:!0}),o(ta).forEach(i),ca=f(S),la=r(S,"I",{class:!0}),o(la).forEach(i),S.forEach(i),A.forEach(i),ra=f(V),oa=r(V,"DIV",{class:!0});var O=o(oa);ia=r(O,"SPAN",{class:!0});var T=o(ia);na=r(T,"I",{class:!0}),o(na).forEach(i),fa=f(T),da=r(T,"I",{class:!0}),o(da).forEach(i),T.forEach(i),O.forEach(i),ua=f(V),ha=r(V,"DIV",{class:!0});var H=o(ha);ma=r(H,"SPAN",{class:!0});var M=o(ma);pa=r(M,"I",{class:!0}),o(pa).forEach(i),va=f(M),xa=r(M,"I",{class:!0}),o(xa).forEach(i),M.forEach(i),H.forEach(i),ga=f(V),Ea=r(V,"DIV",{class:!0});var R=o(Ea);ba=r(R,"SPAN",{class:!0});var j=o(ba);Ia=r(j,"I",{class:!0}),o(Ia).forEach(i),wa=f(j),ka=r(j,"I",{class:!0}),o(ka).forEach(i),j.forEach(i),R.forEach(i),V.forEach(i),ya=f(a),Ta&&Ta.l(a),Da=N(),this.h()},h(){document.title="VIDEO CHAT",d(v,"class","md:w-8/12 svelte-13g81ul"),S(v.src,x="https://www.youtube.com/embed/pF0WLHERdOQ")||d(v,"src","https://www.youtube.com/embed/pF0WLHERdOQ"),d(v,"title","YouTube video player"),d(v,"frameborder","0"),d(v,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),v.allowFullscreen=!0,d(w,"class","fab fa-youtube fa-3x text-red-700"),d(I,"class","text-center"),d(y,"class","text-center"),d(U,"class","text-right"),d(F,"href",""),d(F,"class"," flex flex-row justify-between"),d(_,"href",""),d(E,"class","flex-1 p-10 flex flex-col items-stretch justify-center gap-6"),d(p,"class","md:flex flex-wrap mb-3"),d(K,"class","grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 md:gap-y-12"),d(e,"class","container mx-auto p-2"),d(ta,"class","fas fa-circle fa-stack-2x"),b(ta,"text-green-600",a[2]),b(ta,"text-red-600",!a[2]),d(la,"class","fas fa-stack-1x fa-inverse"),b(la,"fa-microphone",a[2]),b(la,"fa-microphone-slash",!a[2]),d(ea,"class","fa-stack fa-lg rounded-full shadow-xl"),d(na,"class","fas fa-circle fa-stack-2x "),b(na,"text-green-600",a[3]),b(na,"text-red-600",!a[3]),d(da,"class","fas fa-video fa-stack-1x fa-inverse"),d(ia,"class","fa-stack fa-lg rounded-full shadow-xl"),d(oa,"class","md:ml-5"),d(pa,"class","fas fa-circle fa-stack-2x text-indigo-600"),d(xa,"class","fas fa-praying-hands fa-stack-1x fa-inverse"),d(ma,"class","fa-stack fa-lg rounded-full shadow-xl"),d(ha,"class","md:ml-5"),d(Ia,"class","fas fa-circle fa-stack-2x text-purple-700"),d(ka,"class","fas fa-chair fa-stack-1x fa-inverse"),d(ba,"class","fa-stack fa-lg rounded-full shadow-xl"),d(Ea,"class","md:ml-5"),d(aa,"class","fixed md:left-0 right-0 bottom-16 md:bottom-5 container mx-auto flex justify-center text-xl flex-row "),d(aa,"id","controls")},m(t,c){u(t,s,c),u(t,e,c),h(e,p),h(p,v),h(p,g),h(p,E),h(E,I),h(I,w),h(E,k),h(E,y),h(y,D),h(E,$),h(E,F),h(F,L),h(F,U),h(U,W),h(E,Y),h(E,_),h(_,B),h(e,z),h(e,K);for(let a=0;a<Na.length;a+=1)Na[a].m(K,null);u(t,J,c),u(t,aa,c),h(aa,sa),h(sa,ea),h(ea,ta),h(ea,ca),h(ea,la),h(aa,ra),h(aa,oa),h(oa,ia),h(ia,na),h(ia,fa),h(ia,da),h(aa,ua),h(aa,ha),h(ha,ma),h(ma,pa),h(ma,va),h(ma,xa),h(aa,ga),h(aa,Ea),h(Ea,ba),h(ba,Ia),h(ba,wa),h(ba,ka),u(t,ya,c),Ta&&Ta.m(t,c),u(t,Da,c),Va=!0,Aa||($a=[O(X=T.call(null,K,{items:a[0],flipDurationMs:700})),m(K,"consider",a[6]),m(K,"finalize",a[6]),m(sa,"click",a[7]),m(oa,"click",a[8]),m(ha,"click",a[10]),m(Ea,"click",a[11])],Aa=!0)},p(a,[s]){if(49&s){Sa=a[0];for(let a=0;a<Na.length;a+=1)Na[a].r();Na=H(Na,s,Oa,1,a,Sa,Pa,K,q,Z,null,Q);for(let a=0;a<Na.length;a+=1)Na[a].a()}X&&M(X.update)&&1&s&&X.update.call(null,{items:a[0],flipDurationMs:700}),4&s&&b(ta,"text-green-600",a[2]),4&s&&b(ta,"text-red-600",!a[2]),4&s&&b(la,"fa-microphone",a[2]),4&s&&b(la,"fa-microphone-slash",!a[2]),8&s&&b(na,"text-green-600",a[3]),8&s&&b(na,"text-red-600",!a[3]),a[1]?Ta?(Ta.p(a,s),2&s&&V(Ta,1)):(Ta=G(a),Ta.c(),V(Ta,1),Ta.m(Da.parentNode,Da)):Ta&&(C(),A(Ta,1,1,(()=>{Ta=null})),R())},i(a){Va||(V(Ta),Va=!0)},o(a){A(Ta),Va=!1},d(a){a&&i(s),a&&i(e);for(let s=0;s<Na.length;s+=1)Na[s].d();a&&i(J),a&&i(aa),a&&i(ya),Ta&&Ta.d(a),a&&i(Da),Aa=!1,j($a)}}}const aa=({page:a})=>{const{params:s}=a;return{status:200,props:{roomId:+s.id}}};let sa=0;function ea(a,s){return(null==s?void 0:s.getTracks().length)&&(a.srcObject=s),a.onloadedmetadata=function(s){a.play()},{update(s){ea(a,s)}}}function ta(a,s,e){var t=this&&this.__awaiter||function(a,s,e,t){return new(e||(e=Promise))((function(c,l){function r(a){try{i(t.next(a))}catch(s){l(s)}}function o(a){try{i(t.throw(a))}catch(s){l(s)}}function i(a){var s;a.done?c(a.value):(s=a.value,s instanceof e?s:new e((function(a){a(s)}))).then(r,o)}i((t=t.apply(a,s||[])).next())}))};let c;F("seat");let l=!1,r=!1,o=!1,{roomId:i}=s,n=0;function f(a,s=!r){return t(this,void 0,void 0,(function*(){e(2,r=s),console.log("toggleMic",r),c[0].stream.getAudioTracks().forEach((a=>a.enabled=r))}))}function d(a,s=!o){return t(this,void 0,void 0,(function*(){e(3,o=s),console.log("toggleCam",o),c[0].stream.getVideoTracks().forEach((a=>a.enabled=o))}))}L((()=>t(void 0,void 0,void 0,(function*(){localStorage.debug="*",yield function(){return t(this,void 0,void 0,(function*(){e(0,c[0].stream=yield navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),c)}))}(),d(0,!1),f(0,!1),W("/"),console.log(W)}))));return a.$$set=a=>{"roomId"in a&&e(9,i=a.roomId)},[c,l,r,o,n,function(){e(4,2===n?n-=1:n+=1)},function(a){e(0,c=a.detail.items)},f,d,i,()=>e(1,l=!l),()=>{e(4,n=0),e(2,r=!1),e(3,o=!1)},()=>e(1,l=!1)]}export default class extends a{constructor(a){super(),s(this,a,ta,J,e,{roomId:9})}}export{aa as load};