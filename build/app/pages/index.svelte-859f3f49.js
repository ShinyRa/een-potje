import{S as M,i as N,s as S,e as p,k as j,t as C,c as m,a as k,m as I,h as O,d as o,N as P,b as c,g as y,F as f,M as h,O as b,l as x,q as v,v as U,P as $,Q as q}from"../chunks/vendor-0a3bf839.js";import{a as F}from"../chunks/paths-396f020f.js";function E(r){let e,t,s,a,i,_,u,d;return{c(){e=p("section"),t=p("img"),a=j(),i=p("p"),_=C("\u{1F6A7} Under construction..."),this.h()},l(n){e=m(n,"SECTION",{class:!0});var l=k(e);t=m(l,"IMG",{src:!0,alt:!0,class:!0}),a=I(l),i=m(l,"P",{});var g=k(i);_=O(g,"\u{1F6A7} Under construction..."),g.forEach(o),l.forEach(o),this.h()},h(){P(t.src,s=""+(F+"/logo.png"))||c(t,"src",s),c(t,"alt","Logo"),c(t,"class","logo svelte-7l4uch"),c(e,"class","container svelte-7l4uch")},m(n,l){y(n,e,l),f(e,t),f(e,a),f(e,i),f(i,_)},p:h,i(n){n&&(u||b(()=>{u=$(i,q,{y:-25,duration:250,delay:1250}),u.start()})),n&&(d||b(()=>{d=$(e,q,{x:-500,duration:1250}),d.start()}))},o:h,d(n){n&&o(e)}}}function G(r){let e,t=r[0]&&E();return{c(){t&&t.c(),e=x()},l(s){t&&t.l(s),e=x()},m(s,a){t&&t.m(s,a),y(s,e,a)},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&v(t,1)):(t=E(),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(s){v(t)},o:h,d(s){t&&t.d(s),s&&o(e)}}}function L(r,e,t){let s;return U(()=>t(0,s=!0)),[s]}class T extends M{constructor(e){super();N(this,e,L,G,S,{})}}export{T as default};