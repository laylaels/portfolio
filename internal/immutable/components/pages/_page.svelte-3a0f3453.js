import{S as Ke,i as Ye,s as Qe,k as b,a as I,q as g,l as $,m as w,c as A,r as m,h as i,p as re,K as Fe,n as o,b as Y,D as n,u as Xe,B as ce,w as C,F as Ze,x as R,y as z,f as O,t as T,z as W,L as We,M as Be,N as He,O as et}from"../../chunks/index-3f651713.js";import{b as se}from"../../chunks/paths-b4419565.js";function tt(s){let t,r,a,d,p,h,u=(typeof s[1]=="string"?s[1]:je(s[1],s[0]))+"",k;return{c(){t=b("span"),r=b("img"),p=I(),h=b("span"),k=g(u),this.h()},l(f){t=$(f,"SPAN",{class:!0});var c=w(t);r=$(c,"IMG",{style:!0,src:!0,alt:!0,class:!0}),p=A(c),h=$(c,"SPAN",{style:!0});var L=w(h);k=m(L,u),L.forEach(i),c.forEach(i),this.h()},h(){re(r,"width",s[2]),re(r,"height",s[2]),Fe(r.src,a=se+"/software/"+s[0].id+".svg")||o(r,"src",a),o(r,"alt",d=s[0].name+" Icon"),o(r,"class","svelte-whdr2k"),re(h,"color",s[0].color),o(t,"class","root svelte-whdr2k")},m(f,c){Y(f,t,c),n(t,r),n(t,p),n(t,h),n(h,k)},p(f,[c]){c&4&&re(r,"width",f[2]),c&4&&re(r,"height",f[2]),c&1&&!Fe(r.src,a=se+"/software/"+f[0].id+".svg")&&o(r,"src",a),c&1&&d!==(d=f[0].name+" Icon")&&o(r,"alt",d),c&3&&u!==(u=(typeof f[1]=="string"?f[1]:je(f[1],f[0]))+"")&&Xe(k,u),c&1&&re(h,"color",f[0].color)},i:ce,o:ce,d(f){f&&i(t)}}}const Me={id:"photoshop",name:"Photoshop",abbreviation:"Ps",color:"#31a8ff"},Ve={id:"lightroom",name:"Lightroom",abbreviation:"Lr",color:"#31a8ff"},at={id:"premiere",name:"Premiere",abbreviation:"Pr",color:"#9999ff"},nt={id:"after_effects",name:"After Effects",abbreviation:"Ae",color:"#9999FF"},rt={id:"indesign",name:"InDesign",abbreviation:"Id",color:"#ff3366"},st={id:"illustrator",name:"Illustrator",abbreviation:"Ai",color:"#ff9a00"};var le;(function(s){s[s.None=0]="None",s[s.Abbreviate=1]="Abbreviate",s[s.Full=2]="Full"})(le||(le={}));function je(s,t){return s==le.Full?t.name:s==le.Abbreviate?t.abbreviation??t.name:""}function lt(s,t,r){let{brand:a}=t,{naming:d=le.Full}=t,{size:p="1.5em"}=t;return s.$$set=h=>{"brand"in h&&r(0,a=h.brand),"naming"in h&&r(1,d=h.naming),"size"in h&&r(2,p=h.size)},[a,d,p]}class B extends Ke{constructor(t){super(),Ye(this,t,lt,tt,Qe,{brand:0,naming:1,size:2})}}function qe(s,t,r){const a=s.slice();return a[3]=t[r][0],a[4]=t[r][1],a}function Ge(s,t,r){const a=s.slice();return a[7]=t[r],a}function Ne(s){let t,r,a,d,p,h=s[7].name+"",u,k;return{c(){t=b("a"),r=Be("svg"),a=Be("use"),d=I(),p=b("span"),u=g(h),k=I(),this.h()},l(f){t=$(f,"A",{href:!0,class:!0});var c=w(t);r=He(c,"svg",{viewBox:!0});var L=w(r);a=He(L,"use",{"xlink:href":!0}),w(a).forEach(i),L.forEach(i),d=A(c),p=$(c,"SPAN",{});var Q=w(p);u=m(Q,h),Q.forEach(i),k=A(c),c.forEach(i),this.h()},h(){et(a,"xlink:href",se+"/category.svg#"+s[7].id),o(r,"viewBox","0 0 200 200"),o(t,"href",s[2](s[7])),o(t,"class","iconlabel svelte-1dgxd4r")},m(f,c){Y(f,t,c),n(t,r),n(r,a),n(t,d),n(t,p),n(p,u),n(t,k)},p:ce,d(f){f&&i(t)}}}function Je(s){let t,r;return{c(){t=b("img"),this.h()},l(a){t=$(a,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){o(t,"alt",s[3]),Fe(t.src,r=se+"/company/"+s[4])||o(t,"src",r),o(t,"class","svelte-1dgxd4r")},m(a,d){Y(a,t,d)},p:ce,d(a){a&&i(t)}}}function it(s){let t,r,a,d,p,h,u,k,f,c,L,Q,de,v,he,H,ge,M,me,V,ue,j,pe,q,ve,G,_e,be,S,$e,N,we,J,ye,Ee,X,ke,Ie,Z,Ae,Pe,F,ee,Se,De,U,ie,x,oe;H=new B({props:{brand:Me}}),M=new B({props:{brand:Ve}}),V=new B({props:{brand:st}}),j=new B({props:{brand:at}}),q=new B({props:{brand:nt}}),G=new B({props:{brand:rt}}),N=new B({props:{brand:Ve}}),J=new B({props:{brand:Me}});let te=s[1],y=[];for(let e=0;e<te.length;e+=1)y[e]=Ne(Ge(s,te,e));let Le=[["Dexters","dexters.svg"],["Fletchers","fletchers.webp"],["Jackson Stops","jackson.svg"],["Redlees Studios","redlees.webp"],["Snellers","snellers.webp"],["Wetherell","wetherell.webp"]],P=[];for(let e=0;e<6;e+=1)P[e]=Je(qe(s,Le,e));return{c(){t=I(),r=b("div"),a=b("article"),d=b("h2"),p=g("Hi!"),h=I(),u=b("p"),k=g("I'm Layla El-Sekaifi, a "),f=g(s[0]),c=g(` years-old multidisciplinary artist, retoucher
			and video editor based in `),L=g(Ue),Q=g("."),de=I(),v=b("p"),he=g(`For the past eight years I have been familiarising myself with the Adobe
			Suite, mainly focusing on `),C(H.$$.fragment),ge=g(` but ranging through
			to
			`),C(M.$$.fragment),me=g(`,
			`),C(V.$$.fragment),ue=g(`,
			`),C(j.$$.fragment),pe=g(`,
			`),C(q.$$.fragment),ve=g(", and "),C(G.$$.fragment),_e=g("."),be=I(),S=b("p"),$e=g("I have been working daily with "),C(N.$$.fragment),we=g(`
			and `),C(J.$$.fragment),ye=g(` since 2020 as a retoucher and designer
			for real estate clients bringing their properties to life and preparing their
			marketing materials.`),Ee=I(),X=b("p"),ke=g(`As of recent I have taken an interest in 3D, familiarising myself with the
			software, concepts and creating models in my free time.`),Ie=I(),Z=b("p"),Ae=g(`When I’m not working you can find me drawing, discovering new things,
			swimming, and having a good time with friends or family :)`),Pe=I(),F=b("article"),ee=b("h2"),Se=g("Portfolio"),De=I(),U=b("div");for(let e=0;e<y.length;e+=1)y[e].c();ie=I(),x=b("article");for(let e=0;e<6;e+=1)P[e].c();this.h()},l(e){Ze("svelte-fsubl9",document.head).forEach(i),t=A(e),r=$(e,"DIV",{class:!0});var l=w(r);a=$(l,"ARTICLE",{id:!0,class:!0});var _=w(a);d=$(_,"H2",{class:!0});var xe=w(d);p=m(xe,"Hi!"),xe.forEach(i),h=A(_),u=$(_,"P",{class:!0});var ae=w(u);k=m(ae,"I'm Layla El-Sekaifi, a "),f=m(ae,s[0]),c=m(ae,` years-old multidisciplinary artist, retoucher
			and video editor based in `),L=m(ae,Ue),Q=m(ae,"."),ae.forEach(i),de=A(_),v=$(_,"P",{class:!0});var E=w(v);he=m(E,`For the past eight years I have been familiarising myself with the Adobe
			Suite, mainly focusing on `),R(H.$$.fragment,E),ge=m(E,` but ranging through
			to
			`),R(M.$$.fragment,E),me=m(E,`,
			`),R(V.$$.fragment,E),ue=m(E,`,
			`),R(j.$$.fragment,E),pe=m(E,`,
			`),R(q.$$.fragment,E),ve=m(E,", and "),R(G.$$.fragment,E),_e=m(E,"."),E.forEach(i),be=A(_),S=$(_,"P",{class:!0});var ne=w(S);$e=m(ne,"I have been working daily with "),R(N.$$.fragment,ne),we=m(ne,`
			and `),R(J.$$.fragment,ne),ye=m(ne,` since 2020 as a retoucher and designer
			for real estate clients bringing their properties to life and preparing their
			marketing materials.`),ne.forEach(i),Ee=A(_),X=$(_,"P",{class:!0});var Ce=w(X);ke=m(Ce,`As of recent I have taken an interest in 3D, familiarising myself with the
			software, concepts and creating models in my free time.`),Ce.forEach(i),Ie=A(_),Z=$(_,"P",{class:!0});var Re=w(Z);Ae=m(Re,`When I’m not working you can find me drawing, discovering new things,
			swimming, and having a good time with friends or family :)`),Re.forEach(i),_.forEach(i),Pe=A(l),F=$(l,"ARTICLE",{id:!0,class:!0});var fe=w(F);ee=$(fe,"H2",{class:!0});var ze=w(ee);Se=m(ze,"Portfolio"),ze.forEach(i),De=A(fe),U=$(fe,"DIV",{class:!0});var Oe=w(U);for(let K=0;K<y.length;K+=1)y[K].l(Oe);Oe.forEach(i),fe.forEach(i),l.forEach(i),ie=A(e),x=$(e,"ARTICLE",{class:!0});var Te=w(x);for(let K=0;K<6;K+=1)P[K].l(Te);Te.forEach(i),this.h()},h(){document.title="Layla El-Sekaifi",o(d,"class","svelte-1dgxd4r"),o(u,"class","svelte-1dgxd4r"),o(v,"class","svelte-1dgxd4r"),o(S,"class","svelte-1dgxd4r"),o(X,"class","svelte-1dgxd4r"),o(Z,"class","svelte-1dgxd4r"),o(a,"id","about"),o(a,"class","svelte-1dgxd4r"),o(ee,"class","svelte-1dgxd4r"),o(U,"class","cats svelte-1dgxd4r"),o(F,"id","portfolio"),o(F,"class","svelte-1dgxd4r"),o(r,"class","root svelte-1dgxd4r"),o(x,"class","companies svelte-1dgxd4r")},m(e,D){Y(e,t,D),Y(e,r,D),n(r,a),n(a,d),n(d,p),n(a,h),n(a,u),n(u,k),n(u,f),n(u,c),n(u,L),n(u,Q),n(a,de),n(a,v),n(v,he),z(H,v,null),n(v,ge),z(M,v,null),n(v,me),z(V,v,null),n(v,ue),z(j,v,null),n(v,pe),z(q,v,null),n(v,ve),z(G,v,null),n(v,_e),n(a,be),n(a,S),n(S,$e),z(N,S,null),n(S,we),z(J,S,null),n(S,ye),n(a,Ee),n(a,X),n(X,ke),n(a,Ie),n(a,Z),n(Z,Ae),n(r,Pe),n(r,F),n(F,ee),n(ee,Se),n(F,De),n(F,U);for(let l=0;l<y.length;l+=1)y[l].m(U,null);Y(e,ie,D),Y(e,x,D);for(let l=0;l<6;l+=1)P[l].m(x,null);oe=!0},p(e,[D]){if(D&6){te=e[1];let l;for(l=0;l<te.length;l+=1){const _=Ge(e,te,l);y[l]?y[l].p(_,D):(y[l]=Ne(_),y[l].c(),y[l].m(U,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=te.length}if(D&0){Le=[["Dexters","dexters.svg"],["Fletchers","fletchers.webp"],["Jackson Stops","jackson.svg"],["Redlees Studios","redlees.webp"],["Snellers","snellers.webp"],["Wetherell","wetherell.webp"]];let l;for(l=0;l<6;l+=1){const _=qe(e,Le,l);P[l]?P[l].p(_,D):(P[l]=Je(_),P[l].c(),P[l].m(x,null))}for(;l<6;l+=1)P[l].d(1)}},i(e){oe||(O(H.$$.fragment,e),O(M.$$.fragment,e),O(V.$$.fragment,e),O(j.$$.fragment,e),O(q.$$.fragment,e),O(G.$$.fragment,e),O(N.$$.fragment,e),O(J.$$.fragment,e),oe=!0)},o(e){T(H.$$.fragment,e),T(M.$$.fragment,e),T(V.$$.fragment,e),T(j.$$.fragment,e),T(q.$$.fragment,e),T(G.$$.fragment,e),T(N.$$.fragment,e),T(J.$$.fragment,e),oe=!1},d(e){e&&i(t),e&&i(r),W(H),W(M),W(V),W(j),W(q),W(G),W(N),W(J),We(y,e),e&&i(ie),e&&i(x),We(P,e)}}}const Ue="West London";function ot(s){const t=new Date(new Date().valueOf()-new Date("2000-07-14").valueOf()).getUTCFullYear()-1970,r=[{id:"retouch",tags:["retouch"],name:"Retouch"},{id:"photo_manipulation",tags:["image:manipulation"],name:"Photo Manipulation"},{id:"vstaging",tags:["vstaging"],name:"Virtual Staging"},{id:"d3",tags:["3d:model"],name:"3D"},{id:"video",path:"video",name:"Video"},{id:"illustration",tags:["illustration"],name:"Illustration"},{id:"photography",tags:["photography"],name:"Photography"},{id:"fine_art",tags:["illustration","illustration:art"],name:"Fine Art"}];function a(d){return"tags"in d?`${se}/portfolio?${d.tags.map(p=>`tag=${p}`).join("&")}`:`${se}/${d.path}`}return[t,r,a]}class dt extends Ke{constructor(t){super(),Ye(this,t,ot,it,Qe,{})}}export{dt as default};