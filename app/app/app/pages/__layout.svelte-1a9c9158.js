import{S as J,i as K,s as M,e as v,t as C,k as A,c as g,a as E,h as D,d as u,m as H,b as y,g as L,F as h,G as O,H as T,I as U,J as V,K as w,q as Q,o as W,L as X}from"../chunks/vendor-0a3bf839.js";import{b as Y}from"../chunks/singletons-82f8d8c8.js";import{g as Z}from"../chunks/navigation-6d49ae0a.js";function F(n,t,l){const o=n.slice();return o[4]=t[l].title,o[5]=t[l].route,o}function G(n){let t,l,o=n[4]+"",p,$,f,_,b;function d(){return n[3](n[5])}return{c(){t=v("li"),l=v("a"),p=C(o),f=A(),this.h()},l(r){t=g(r,"LI",{});var i=E(t);l=g(i,"A",{href:!0});var k=E(l);p=D(k,o),k.forEach(u),f=H(i),i.forEach(u),this.h()},h(){y(l,"href",$=null)},m(r,i){L(r,t,i),h(t,l),h(l,p),h(t,f),_||(b=O(l,"click",d),_=!0)},p(r,i){n=r},d(r){r&&u(t),_=!1,b()}}}function x(n){let t,l,o,p,$,f,_,b,d,r,i,k,I,S=n[0],a=[];for(let e=0;e<S.length;e+=1)a[e]=G(F(n,S,e));const q=n[2].default,c=T(q,n,n[1],null);return{c(){t=v("section"),l=v("div"),o=v("p"),p=C("Een potje"),$=A(),f=v("p"),_=C("By ShinyRa"),b=A(),d=v("main"),r=v("aside"),i=v("ul");for(let e=0;e<a.length;e+=1)a[e].c();k=A(),c&&c.c(),this.h()},l(e){t=g(e,"SECTION",{class:!0});var m=E(t);l=g(m,"DIV",{class:!0});var s=E(l);o=g(s,"P",{class:!0});var j=E(o);p=D(j,"Een potje"),j.forEach(u),$=H(s),f=g(s,"P",{class:!0});var N=E(f);_=D(N,"By ShinyRa"),N.forEach(u),s.forEach(u),m.forEach(u),b=H(e),d=g(e,"MAIN",{class:!0});var z=E(d);r=g(z,"ASIDE",{class:!0});var P=E(r);i=g(P,"UL",{class:!0});var R=E(i);for(let B=0;B<a.length;B+=1)a[B].l(R);R.forEach(u),P.forEach(u),k=H(z),c&&c.l(z),z.forEach(u),this.h()},h(){y(o,"class","title svelte-9l5fza"),y(f,"class","subtitle svelte-9l5fza"),y(l,"class","hero-body"),y(t,"class","hero svelte-9l5fza"),y(i,"class","menu-list"),y(r,"class","menu svelte-9l5fza"),y(d,"class","svelte-9l5fza")},m(e,m){L(e,t,m),h(t,l),h(l,o),h(o,p),h(l,$),h(l,f),h(f,_),L(e,b,m),L(e,d,m),h(d,r),h(r,i);for(let s=0;s<a.length;s+=1)a[s].m(i,null);h(d,k),c&&c.m(d,null),I=!0},p(e,[m]){if(m&1){S=e[0];let s;for(s=0;s<S.length;s+=1){const j=F(e,S,s);a[s]?a[s].p(j,m):(a[s]=G(j),a[s].c(),a[s].m(i,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=S.length}c&&c.p&&(!I||m&2)&&U(c,q,e,e[1],I?w(q,e[1],m,null):V(e[1]),null)},i(e){I||(Q(c,e),I=!0)},o(e){W(c,e),I=!1},d(e){e&&u(t),e&&u(b),e&&u(d),X(a,e),c&&c.d(e)}}}function ee(n,t,l){let{$$slots:o={},$$scope:p}=t;const $=[{title:"Home",route:""},{title:"Hangman",route:"/hangman"}],f=_=>Z(`${Y}${_}`);return n.$$set=_=>{"$$scope"in _&&l(1,p=_.$$scope)},[$,p,o,f]}class ae extends J{constructor(t){super();K(this,t,ee,x,M,{})}}export{ae as default};