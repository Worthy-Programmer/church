import{S as a,i as s,s as e,e as t,k as o,t as c,c as n,a as r,d as i,n as l,g as d,b as f,E as u,f as h,F as v,V as p,R as m,W as g,K as x,X as E,A as k}from"../../chunks/vendor-7fff300c.js";function I(a){let s,e,k,I,y,P,b,T,V,j,A,D,N,M,O,S,U,F,R,$,_,q,C;return{c(){s=t("video"),k=o(),I=t("div"),y=t("span"),P=t("i"),b=o(),T=t("i"),V=o(),j=t("div"),A=t("span"),D=t("i"),N=o(),M=t("i"),O=o(),S=t("form"),U=t("input"),F=o(),R=t("input"),$=c(" Enter as admin"),this.h()},l(a){s=n(a,"VIDEO",{}),r(s).forEach(i),k=l(a),I=n(a,"DIV",{});var e=r(I);y=n(e,"SPAN",{class:!0});var t=r(y);P=n(t,"I",{class:!0}),r(P).forEach(i),b=l(t),T=n(t,"I",{class:!0}),r(T).forEach(i),t.forEach(i),e.forEach(i),V=l(a),j=n(a,"DIV",{class:!0});var o=r(j);A=n(o,"SPAN",{class:!0});var c=r(A);D=n(c,"I",{class:!0}),r(D).forEach(i),N=l(c),M=n(c,"I",{class:!0}),r(M).forEach(i),c.forEach(i),o.forEach(i),O=l(a),S=n(a,"FORM",{action:!0});var f=r(S);U=n(f,"INPUT",{type:!0,placeholder:!0,name:!0,class:!0}),F=l(f),R=n(f,"INPUT",{type:!0,name:!0,class:!0}),$=d(f," Enter as admin"),f.forEach(i),this.h()},h(){f(P,"class","fas fa-circle fa-stack-2x"),u(P,"text-green-600",a[1]),u(P,"text-red-600",!a[1]),f(T,"class","fas fa-stack-1x fa-inverse"),u(T,"fa-microphone",a[1]),u(T,"fa-microphone-slash",!a[1]),f(y,"class","fa-stack fa-lg rounded-full shadow-xl"),f(D,"class","fas fa-circle fa-stack-2x "),u(D,"text-green-600",a[2]),u(D,"text-red-600",!a[2]),f(M,"class","fas fa-video fa-stack-1x fa-inverse"),f(A,"class","fa-stack fa-lg rounded-full shadow-xl"),f(j,"class","md:ml-5"),f(U,"type","password"),f(U,"placeholder","Passcode"),f(U,"name","passcode"),U.required=!0,f(U,"class","svelte-tjt368"),f(R,"type","checkbox"),f(R,"name","admin"),f(R,"class","svelte-tjt368"),f(S,"action",_="/video/"+a[0])},m(t,o){h(t,s,o),h(t,k,o),h(t,I,o),v(I,y),v(y,P),v(y,b),v(y,T),h(t,V,o),h(t,j,o),v(j,A),v(A,D),v(A,N),v(A,M),h(t,O,o),h(t,S,o),v(S,U),v(S,F),v(S,R),v(S,$),q||(C=[p(e=w.call(null,s,a[3])),m(I,"click",a[4]),m(j,"click",a[5])],q=!0)},p(a,[s]){e&&g(e.update)&&8&s&&e.update.call(null,a[3]),2&s&&u(P,"text-green-600",a[1]),2&s&&u(P,"text-red-600",!a[1]),2&s&&u(T,"fa-microphone",a[1]),2&s&&u(T,"fa-microphone-slash",!a[1]),4&s&&u(D,"text-green-600",a[2]),4&s&&u(D,"text-red-600",!a[2]),1&s&&_!==(_="/video/"+a[0])&&f(S,"action",_)},i:x,o:x,d(a){a&&i(s),a&&i(k),a&&i(I),a&&i(V),a&&i(j),a&&i(O),a&&i(S),q=!1,E(C)}}}const y=({page:a})=>{const{params:s}=a;return{status:200,props:{roomId:s.id}}};function w(a,s){return(null==s?void 0:s.getTracks().length)&&(a.srcObject=s),a.onloadedmetadata=function(s){a.play()},{update(s){w(a,s)}}}function P(a,s,e){var t=this&&this.__awaiter||function(a,s,e,t){return new(e||(e=Promise))((function(o,c){function n(a){try{i(t.next(a))}catch(s){c(s)}}function r(a){try{i(t.throw(a))}catch(s){c(s)}}function i(a){var s;a.done?o(a.value):(s=a.value,s instanceof e?s:new e((function(a){a(s)}))).then(n,r)}i((t=t.apply(a,s||[])).next())}))};function o(a,s=!i){return t(this,void 0,void 0,(function*(){e(1,i=s),console.log("toggleMic",i),n.getAudioTracks().forEach((a=>a.enabled=i))}))}function c(a,s=!l){return t(this,void 0,void 0,(function*(){e(2,l=s),console.log("toggleCam",l),n.getVideoTracks().forEach((a=>a.enabled=l))}))}let n,{roomId:r}=s,i=!1,l=!1;return k((()=>t(void 0,void 0,void 0,(function*(){})))),k((()=>t(void 0,void 0,void 0,(function*(){e(3,n=yield navigator.mediaDevices.getUserMedia({video:!0,audio:!0})),c(0,!1),o(0,!1)})))),a.$$set=a=>{"roomId"in a&&e(0,r=a.roomId)},[r,i,l,n,o,c]}export default class extends a{constructor(a){super(),s(this,a,P,I,e,{roomId:0})}}export{y as load};
