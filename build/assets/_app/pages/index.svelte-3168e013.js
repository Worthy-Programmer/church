import{S as c,i as s,s as r,e as t,t as e,k as o,c as n,a,g as l,d as h,n as i,b as u,L as f,f as d,F as v,h as p,M as m,K as x,N as g}from"../chunks/vendor-516dafc2.js";function b(c,s,r){const t=c.slice();return t[1]=s[r].id,t[2]=s[r].name,t[3]=s[r].location,t[4]=s[r].color,t}function y(c,s){let r,m,x,g,b,y,k,E,w=s[2]+"",P=s[3]+"";return{key:c,first:null,c(){r=t("a"),m=t("h3"),x=e(w),g=o(),b=t("p"),y=e(P),k=o(),this.h()},l(c){r=n(c,"A",{href:!0,style:!0,class:!0});var s=a(r);m=n(s,"H3",{class:!0});var t=a(m);x=l(t,w),t.forEach(h),g=i(s),b=n(s,"P",{});var e=a(b);y=l(e,P),e.forEach(h),k=i(s),s.forEach(h),this.h()},h(){u(m,"class","font-bold"),u(r,"href",E="/video/"+s[1]),f(r,"background-color",s[4]),u(r,"class","block border border-black hover:shadow-xl  p-10 my-7 mx-4 rounded-xl md:text-center bg-cover  church"),this.first=r},m(c,s){d(c,r,s),v(r,m),v(m,x),v(r,g),v(r,b),v(b,y),v(r,k)},p(c,t){s=c,1&t&&w!==(w=s[2]+"")&&p(x,w),1&t&&P!==(P=s[3]+"")&&p(y,P),1&t&&E!==(E="/video/"+s[1])&&u(r,"href",E),1&t&&f(r,"background-color",s[4])},d(c){c&&h(r)}}}function k(c){let s,r,f,p,k,E=[],w=new Map,P=c[0];const j=c=>c[1];for(let t=0;t<P.length;t+=1){let s=b(c,P,t),r=j(s);w.set(r,E[t]=y(r,s))}return{c(){s=t("div"),r=t("h2"),f=e("Public Churches"),p=o(),k=t("div");for(let c=0;c<E.length;c+=1)E[c].c();this.h()},l(c){s=n(c,"DIV",{class:!0});var t=a(s);r=n(t,"H2",{class:!0});var e=a(r);f=l(e,"Public Churches"),e.forEach(h),p=i(t),k=n(t,"DIV",{class:!0});var o=a(k);for(let s=0;s<E.length;s+=1)E[s].l(o);o.forEach(h),t.forEach(h),this.h()},h(){u(r,"class","text-2xl mx-4"),u(k,"class","grid md:grid-cols-5 grid-cols-1"),u(s,"class"," container mx-auto py-10")},m(c,t){d(c,s,t),v(s,r),v(r,f),v(s,p),v(s,k);for(let s=0;s<E.length;s+=1)E[s].m(k,null)},p(c,[s]){1&s&&(P=c[0],E=m(E,s,j,1,c,P,w,k,g,y,null,b))},i:x,o:x,d(c){c&&h(s);for(let s=0;s<E.length;s+=1)E[s].d()}}}var E=function(c,s,r,t){return new(r||(r=Promise))((function(e,o){function n(c){try{l(t.next(c))}catch(s){o(s)}}function a(c){try{l(t.throw(c))}catch(s){o(s)}}function l(c){var s;c.done?e(c.value):(s=c.value,s instanceof r?s:new r((function(c){c(s)}))).then(n,a)}l((t=t.apply(c,s||[])).next())}))};const w=({fetch:c})=>E(void 0,void 0,void 0,(function*(){const s=yield c("/church.json");if(s.ok){return{props:{churches:yield s.json()}}}}));function P(c,s,r){let{churches:t}=s;return c.$$set=c=>{"churches"in c&&r(0,t=c.churches)},[t]}export default class extends c{constructor(c){super(),s(this,c,P,k,r,{churches:0})}}export{w as load};
