import{S as a,i as s,s as e,e as t,t as c,k as l,c as r,a as o,d as n,g as i,n as f,b as d,f as h,F as u,O as m,K as p,R as v,T as x,U as g,V as E,E as b,W as I,X as w,j as k,m as y,o as D,x as V,u as j,v as $,l as A,Y as N,Z as P,_ as S,$ as R,M as T,a0 as M,w as O,a1 as H,a2 as F,A as z,a3 as L,a4 as U,r as q,a5 as C,h as W}from"../../chunks/vendor-6dcf6149.js";function Y(a){let s,e,g,b,I,w,k,y,D,V,j,$,A,N,P,S;return{c(){s=t("div"),e=t("h1"),g=t("i"),b=c(" Prayer Requests"),I=l(),w=t("div"),k=l(),y=t("form"),D=t("input"),V=l(),j=t("button"),$=t("i"),this.h()},l(a){s=r(a,"DIV",{class:!0});var t=o(s);e=r(t,"H1",{class:!0});var c=o(e);g=r(c,"I",{class:!0}),o(g).forEach(n),b=i(c," Prayer Requests"),c.forEach(n),I=f(t),w=r(t,"DIV",{class:!0}),o(w).forEach(n),k=f(t),y=r(t,"FORM",{action:!0,class:!0});var l=o(y);D=r(l,"INPUT",{type:!0,placeholder:!0,class:!0}),V=f(l),j=r(l,"BUTTON",{class:!0});var d=o(j);$=r(d,"I",{class:!0}),o($).forEach(n),d.forEach(n),l.forEach(n),t.forEach(n),this.h()},h(){d(g,"class","fas fa-arrow-left mr-6"),d(e,"class","text-2xl"),d(w,"class","flex-auto"),d(D,"type","text"),d(D,"placeholder","Your request"),d(D,"class","focus:border-black outline-none border border-r-0 p-2 flex-auto"),d($,"class","fas fa-arrow-up"),d(j,"class","btn"),d(y,"action",""),d(y,"class","flex"),d(s,"class","fixed w-full md:w-3/12  bg-white top-0 bottom-0 left-0 p-10 flex flex-col")},m(t,c){h(t,s,c),u(s,e),u(e,g),u(e,b),u(s,I),u(s,w),u(s,k),u(s,y),u(y,D),u(y,V),u(y,j),u(j,$),N=!0,P||(S=m(g,"click",a[1]),P=!0)},p:p,i(a){N||(v((()=>{A||(A=x(s,E,{duration:1e3,x:0},!0)),A.run(1)})),N=!0)},o(a){A||(A=x(s,E,{duration:1e3,x:0},!1)),A.run(0),N=!1},d(a){a&&n(s),a&&A&&A.end(),P=!1,S()}}}function _(a){const s=g();return[s,()=>s("visible",!1)]}class B extends a{constructor(a){super(),s(this,a,_,Y,e,{})}}function Q(a,s,e){const t=a.slice();return t[15]=s[e].seat,t[16]=s[e].stream,t[18]=e,t}function K(a){let s,e,c,l;return{c(){s=t("video"),this.h()},l(a){s=r(a,"VIDEO",{class:!0}),o(s).forEach(n),this.h()},h(){s.autoplay=!0,d(s,"class","full-video svelte-132z4a0")},m(t,r){h(t,s,r),c||(l=S(e=ea.call(null,s,a[16])),c=!0)},p(s,t){a=s,e&&M(e.update)&&8&t&&e.update.call(null,a[16])},d(a){a&&n(s),c=!1,l()}}}function X(a){let s,e,m,p,v,x,g,E=a[15]+"";return{c(){s=t("h1"),e=c(E),m=l(),p=t("video"),this.h()},l(a){s=r(a,"H1",{class:!0});var t=o(s);e=i(t,E),t.forEach(n),m=f(a),p=r(a,"VIDEO",{class:!0}),o(p).forEach(n),this.h()},h(){d(s,"class","text-3xl my-4"),p.autoplay=!0,d(p,"class","thumbnail-video svelte-132z4a0")},m(t,c){h(t,s,c),u(s,e),h(t,m,c),h(t,p,c),x||(g=S(v=ea.call(null,p,a[16])),x=!0)},p(s,t){a=s,8&t&&E!==(E=a[15]+"")&&W(e,E),v&&M(v.update)&&8&t&&v.update.call(null,a[16])},d(a){a&&n(s),a&&n(m),a&&n(p),x=!1,g()}}}function Z(a){let s,e,m,p,v,x,g,E=a[15]+"";return{c(){s=t("h1"),e=c(E),m=l(),p=t("span"),v=t("i"),x=l(),g=t("i"),this.h()},l(a){s=r(a,"H1",{class:!0});var t=o(s);e=i(t,E),t.forEach(n),m=f(a),p=r(a,"SPAN",{class:!0});var c=o(p);v=r(c,"I",{class:!0}),o(v).forEach(n),x=f(c),g=r(c,"I",{class:!0}),o(g).forEach(n),c.forEach(n),this.h()},h(){d(s,"class","text-3xl my-4"),d(v,"class","fas fa-circle text-green-500 fa-stack-2x "),d(g,"class","fas fa-chair fa-stack-1x text-white"),d(p,"class","fa-stack fa-2x")},m(a,t){h(a,s,t),u(s,e),h(a,m,t),h(a,p,t),u(p,v),u(p,x),u(p,g)},p(a,s){8&s&&E!==(E=a[15]+"")&&W(e,E)},d(a){a&&n(s),a&&n(m),a&&n(p)}}}function G(a,s){let e,c,i,v,x,g=p;function E(a,s){return 0==a[4]?Z:1==a[4]?X:K}let k=E(s),y=k(s);return{key:a,first:null,c(){e=t("div"),y.c(),c=l(),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=o(e);y.l(s),c=f(s),s.forEach(n),this.h()},h(){d(e,"class","border flex flex-col justify-center items-center rounded-xl bg-white"),b(e,"py-6",2!==s[4]),this.first=e},m(a,t){h(a,e,t),y.m(e,null),u(e,c),v||(x=m(e,"dblclick",s[5]),v=!0)},p(a,t){k===(k=E(s=a))&&y?y.p(s,t):(y.d(1),y=k(s),y&&(y.c(),y.m(e,c))),16&t&&b(e,"py-6",2!==s[4])},r(){i=e.getBoundingClientRect()},f(){I(e),g()},a(){g(),g=w(e,i,L,{duration:700})},d(a){a&&n(e),y.d(),v=!1,x()}}}function J(a){let s,e;return s=new B({}),s.$on("visible",a[12]),{c(){k(s.$$.fragment)},l(a){y(s.$$.fragment,a)},m(a,t){D(s,a,t),e=!0},p:p,i(a){e||(V(s.$$.fragment,a),e=!0)},o(a){j(s.$$.fragment,a),e=!1},d(a){$(s,a)}}}function aa(a){let s,e,p,v,x,g,E,I,w,k,y,D,$,F,z,L,C,W,Y,_,B,K,X,Z,aa,sa,ea,ta,ca,la,ra,oa,na,ia,fa,da,ha,ua,ma,pa,va,xa,ga,Ea,ba,Ia,wa,ka,ya,Da,Va,ja,$a,Aa,Na,Pa=[],Sa=new Map,Ra=a[3];const Ta=a=>a[15];for(let t=0;t<Ra.length;t+=1){let s=Q(a,Ra,t),e=Ta(s);Sa.set(e,Pa[t]=G(e,s))}let Ma=a[0]&&J(a);return{c(){s=t("script"),p=l(),v=t("div"),x=t("div"),g=t("iframe"),I=l(),w=t("div"),k=t("h1"),y=t("i"),D=l(),$=t("h1"),F=c("Name"),z=l(),L=t("a"),C=c("Subscribe "),W=t("span"),Y=c("33"),_=l(),B=t("a"),K=c("Likes"),X=l(),Z=t("div");for(let a=0;a<Pa.length;a+=1)Pa[a].c();sa=l(),ea=t("div"),ta=t("div"),ca=t("span"),la=t("i"),ra=l(),oa=t("i"),na=l(),ia=t("div"),fa=t("span"),da=t("i"),ha=l(),ua=t("i"),ma=l(),pa=t("div"),va=t("span"),xa=t("i"),ga=l(),Ea=t("i"),ba=l(),Ia=t("div"),wa=t("span"),ka=t("i"),ya=l(),Da=t("i"),Va=l(),Ma&&Ma.c(),ja=A(),this.h()},l(a){const e=N('[data-svelte="svelte-alimdv"]',document.head);s=r(e,"SCRIPT",{src:!0}),o(s).forEach(n),e.forEach(n),p=f(a),v=r(a,"DIV",{class:!0});var t=o(v);x=r(t,"DIV",{class:!0});var c=o(x);g=r(c,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),o(g).forEach(n),I=f(c),w=r(c,"DIV",{class:!0});var l=o(w);k=r(l,"H1",{class:!0});var d=o(k);y=r(d,"I",{class:!0}),o(y).forEach(n),d.forEach(n),D=f(l),$=r(l,"H1",{class:!0});var h=o($);F=i(h,"Name"),h.forEach(n),z=f(l),L=r(l,"A",{href:!0,class:!0});var u=o(L);C=i(u,"Subscribe "),W=r(u,"SPAN",{class:!0});var m=o(W);Y=i(m,"33"),m.forEach(n),u.forEach(n),_=f(l),B=r(l,"A",{href:!0});var E=o(B);K=i(E,"Likes"),E.forEach(n),l.forEach(n),c.forEach(n),X=f(t),Z=r(t,"DIV",{class:!0});var b=o(Z);for(let s=0;s<Pa.length;s+=1)Pa[s].l(b);b.forEach(n),t.forEach(n),sa=f(a),ea=r(a,"DIV",{class:!0,id:!0});var V=o(ea);ta=r(V,"DIV",{});var j=o(ta);ca=r(j,"SPAN",{class:!0});var P=o(ca);la=r(P,"I",{class:!0}),o(la).forEach(n),ra=f(P),oa=r(P,"I",{class:!0}),o(oa).forEach(n),P.forEach(n),j.forEach(n),na=f(V),ia=r(V,"DIV",{class:!0});var S=o(ia);fa=r(S,"SPAN",{class:!0});var R=o(fa);da=r(R,"I",{class:!0}),o(da).forEach(n),ha=f(R),ua=r(R,"I",{class:!0}),o(ua).forEach(n),R.forEach(n),S.forEach(n),ma=f(V),pa=r(V,"DIV",{class:!0});var T=o(pa);va=r(T,"SPAN",{class:!0});var M=o(va);xa=r(M,"I",{class:!0}),o(xa).forEach(n),ga=f(M),Ea=r(M,"I",{class:!0}),o(Ea).forEach(n),M.forEach(n),T.forEach(n),ba=f(V),Ia=r(V,"DIV",{class:!0});var O=o(Ia);wa=r(O,"SPAN",{class:!0});var H=o(wa);ka=r(H,"I",{class:!0}),o(ka).forEach(n),ya=f(H),Da=r(H,"I",{class:!0}),o(Da).forEach(n),H.forEach(n),O.forEach(n),V.forEach(n),Va=f(a),Ma&&Ma.l(a),ja=A(),this.h()},h(){P(s.src,e="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js")||d(s,"src","https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"),s.defer=!0,d(g,"class","md:w-8/12 svelte-132z4a0"),P(g.src,E="https://www.youtube.com/embed/pF0WLHERdOQ")||d(g,"src","https://www.youtube.com/embed/pF0WLHERdOQ"),d(g,"title","YouTube video player"),d(g,"frameborder","0"),d(g,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),g.allowFullscreen=!0,d(y,"class","fab fa-youtube fa-3x text-red-700"),d(k,"class","text-center"),d($,"class","text-center"),d(W,"class","text-right"),d(L,"href",""),d(L,"class"," flex flex-row justify-between"),d(B,"href",""),d(w,"class","flex-1 p-10 flex flex-col items-stretch justify-center gap-6"),d(x,"class","md:flex flex-wrap mb-3"),d(Z,"class","grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 md:gap-y-12"),d(v,"class","container mx-auto p-2"),d(la,"class","fas fa-circle fa-stack-2x"),b(la,"text-green-600",a[1]),b(la,"text-red-600",!a[1]),d(oa,"class","fas fa-stack-1x fa-inverse"),b(oa,"fa-microphone",a[1]),b(oa,"fa-microphone-slash",!a[1]),d(ca,"class","fa-stack fa-lg rounded-full shadow-xl"),d(da,"class","fas fa-circle fa-stack-2x "),b(da,"text-green-600",a[2]),b(da,"text-red-600",!a[2]),d(ua,"class","fas fa-video fa-stack-1x fa-inverse"),d(fa,"class","fa-stack fa-lg rounded-full shadow-xl"),d(ia,"class","md:ml-5"),d(xa,"class","fas fa-circle fa-stack-2x text-indigo-600"),d(Ea,"class","fas fa-praying-hands fa-stack-1x fa-inverse"),d(va,"class","fa-stack fa-lg rounded-full shadow-xl"),d(pa,"class","md:ml-5"),d(ka,"class","fas fa-circle fa-stack-2x text-purple-700"),d(Da,"class","fas fa-chair fa-stack-1x fa-inverse"),d(wa,"class","fa-stack fa-lg rounded-full shadow-xl"),d(Ia,"class","md:ml-5"),d(ea,"class","fixed md:left-0 right-0 bottom-16 md:bottom-5 container mx-auto flex justify-center text-xl flex-row "),d(ea,"id","controls")},m(e,t){u(document.head,s),h(e,p,t),h(e,v,t),u(v,x),u(x,g),u(x,I),u(x,w),u(w,k),u(k,y),u(w,D),u(w,$),u($,F),u(w,z),u(w,L),u(L,C),u(L,W),u(W,Y),u(w,_),u(w,B),u(B,K),u(v,X),u(v,Z);for(let a=0;a<Pa.length;a+=1)Pa[a].m(Z,null);h(e,sa,t),h(e,ea,t),u(ea,ta),u(ta,ca),u(ca,la),u(ca,ra),u(ca,oa),u(ea,na),u(ea,ia),u(ia,fa),u(fa,da),u(fa,ha),u(fa,ua),u(ea,ma),u(ea,pa),u(pa,va),u(va,xa),u(va,ga),u(va,Ea),u(ea,ba),u(ea,Ia),u(Ia,wa),u(wa,ka),u(wa,ya),u(wa,Da),h(e,Va,t),Ma&&Ma.m(e,t),h(e,ja,t),$a=!0,Aa||(Na=[S(aa=R.call(null,Z,{items:a[3],flipDurationMs:700})),m(Z,"consider",a[6]),m(Z,"finalize",a[6]),m(ta,"click",a[7]),m(ia,"click",a[8]),m(pa,"click",a[10]),m(Ia,"click",a[11])],Aa=!0)},p(a,[s]){if(56&s){Ra=a[3];for(let a=0;a<Pa.length;a+=1)Pa[a].r();Pa=T(Pa,s,Ta,1,a,Ra,Sa,Z,U,G,null,Q);for(let a=0;a<Pa.length;a+=1)Pa[a].a()}aa&&M(aa.update)&&8&s&&aa.update.call(null,{items:a[3],flipDurationMs:700}),2&s&&b(la,"text-green-600",a[1]),2&s&&b(la,"text-red-600",!a[1]),2&s&&b(oa,"fa-microphone",a[1]),2&s&&b(oa,"fa-microphone-slash",!a[1]),4&s&&b(da,"text-green-600",a[2]),4&s&&b(da,"text-red-600",!a[2]),a[0]?Ma?(Ma.p(a,s),1&s&&V(Ma,1)):(Ma=J(a),Ma.c(),V(Ma,1),Ma.m(ja.parentNode,ja)):Ma&&(q(),j(Ma,1,1,(()=>{Ma=null})),O())},i(a){$a||(V(Ma),$a=!0)},o(a){j(Ma),$a=!1},d(a){n(s),a&&n(p),a&&n(v);for(let s=0;s<Pa.length;s+=1)Pa[s].d();a&&n(sa),a&&n(ea),a&&n(Va),Ma&&Ma.d(a),a&&n(ja),Aa=!1,H(Na)}}}const sa=({page:a})=>{const{params:s}=a;return{status:200,props:{roomId:+s.id}}};function ea(a,s){return(null==s?void 0:s.getTracks().length)&&(a.srcObject=s),a.onloadedmetadata=function(s){a.play()},{update(s){ea(a,s)}}}function ta(a,s,e){var t=this&&this.__awaiter||function(a,s,e,t){return new(e||(e=Promise))((function(c,l){function r(a){try{n(t.next(a))}catch(s){l(s)}}function o(a){try{n(t.throw(a))}catch(s){l(s)}}function n(a){var s;a.done?c(a.value):(s=a.value,s instanceof e?s:new e((function(a){a(s)}))).then(r,o)}n((t=t.apply(a,s||[])).next())}))};F("seat");let c=!1,l=!1,r=!1,{roomId:o}=s,n=[{name:"",stream:void 0,seat:0}],i=0;function f(a,s=!l){return t(this,void 0,void 0,(function*(){e(1,l=s),console.log("toggleMic",l),n[0].stream.getAudioTracks().forEach((a=>a.enabled=l))}))}function d(a,s=!r){return t(this,void 0,void 0,(function*(){e(2,r=s),console.log("toggleCam",r),n[0].stream.getVideoTracks().forEach((a=>a.enabled=r))}))}z((()=>t(void 0,void 0,void 0,(function*(){localStorage.debug="*",yield function(){return t(this,void 0,void 0,(function*(){e(3,n[0].stream=yield navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),n)}))}(),d(0,!1),f(0,!1);const a=C("/");console.log(C),a.emit("join-room",o,0),a.on("user-connected",(a=>{console.log(a)}))}))));return a.$$set=a=>{"roomId"in a&&e(9,o=a.roomId)},[c,l,r,n,i,function(){e(4,2===i?i-=1:i+=1)},function(a){e(3,n=a.detail.items)},f,d,o,()=>e(0,c=!c),()=>{e(4,i=0),e(1,l=!1),e(2,r=!1)},()=>e(0,c=!1)]}export default class extends a{constructor(a){super(),s(this,a,ta,aa,e,{roomId:9})}}export{sa as load};
