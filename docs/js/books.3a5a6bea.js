(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["books"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"24ae":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),i={class:"container"},o={class:"row mt-4"},a={class:"col"},s=Object(n["i"])("h1",{class:"text-center"},"My favouries books & read list",-1),c={class:"text-center"},m={class:"btn-group mt-1"},u=Object(n["h"])(" Favs "),l=Object(n["i"])("i",{class:"far fa-star"},null,-1),f=Object(n["h"])(" Read list "),d=Object(n["i"])("i",{class:"fas fa-glasses"},null,-1),p={class:"card mx-auto",style:{width:"18rem"}},g={class:"card-body"},b={class:"card-title"},h={class:"card-text"};function w(t,e,r,w,v,O){return Object(n["r"])(),Object(n["e"])("div",i,[Object(n["i"])("div",o,[Object(n["i"])("div",a,[s,Object(n["i"])("div",c,[Object(n["i"])("div",m,[Object(n["i"])("button",{onClick:e[1]||(e[1]=function(t){return O.setList("favBooks")}),class:["btn","btn-outline-info","favBooks"==this.showList?"active":""]},[u,l],2),Object(n["i"])("button",{onClick:e[2]||(e[2]=function(t){return O.setList("readList")}),class:["btn","btn-outline-info","readList"==this.showList?"active":""]},[f,d],2)])])])]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(O.groupedBooks,(function(t){return Object(n["r"])(),Object(n["e"])("div",{class:"row text-center",key:O.groupedBooks.indexOf(t)},[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(t,(function(e){return Object(n["r"])(),Object(n["e"])("div",{class:"col-lg-4 mt-4",key:t.indexOf(e)},[Object(n["i"])("div",p,[Object(n["i"])("a",{href:e.url,target:"__blank"},[Object(n["i"])("img",{class:"card-img-top",src:e.image_url,alt:e.title},null,8,["src","alt"])],8,["href"]),Object(n["i"])("div",g,[Object(n["i"])("h5",b,Object(n["z"])(e.title),1),Object(n["i"])("p",h,Object(n["z"])(e.description),1),Object(n["i"])("a",{href:e.url,target:"__blank",class:"btn btn-info"},"Link",8,["href"])])])])})),128))])})),128))])}function v(t,e){for(var r=[],n=0,i=0;n<t.length;n++)n>=e&&n%e===0&&i++,r[i]=r[i]||[],r[i].push(t[n]);return r}var O={name:"FavBooks",data:function(){return{showList:"favBooks",readList:[{title:"Test-Driven Development with Python: Obey the Testing Goat",image_url:"https://images-na.ssl-images-amazon.com/images/I/51K8lEqa9SL._SX379_BO1,204,203,200_.jpg",description:"For better understanding of testing",url:"https://www.amazon.com/-/es/dp/1491958707"},{title:"How Computers Really Work",image_url:"https://images-na.ssl-images-amazon.com/images/I/51COrZeWTpL._SX376_BO1,204,203,200_.jpg",description:"For better understanding of machines",url:"https://www.amazon.com/-/es/dp/1718500661/"},{title:"Computer Networks: A Systems Approach",image_url:"https://images-na.ssl-images-amazon.com/images/I/5139UsCTBeL._SX403_BO1,204,203,200_.jpg",description:"For better understanding of networking",url:"https://www.amazon.com/-/es/dp/0128182008"},{title:"Software Craftsman, The: Professionalism, Pragmatism, Pride",image_url:"https://images-na.ssl-images-amazon.com/images/I/51dvkme2rWL._SX380_BO1,204,203,200_.jpg",description:"For better understanding of software development",url:"https://www.amazon.com/-/es/dp/0134052501/"},{title:"Soft Skills: The software developer's life manual",image_url:"https://images-na.ssl-images-amazon.com/images/I/51WiLueukSL._SX396_BO1,204,203,200_.jpg",description:"For better understanding of soft skills",url:"https://www.amazon.com/-/es/John-Sonmez/dp/1617292397/"},{title:"The Pragmatic Programmer: Your Journey To Mastery",image_url:"https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg",description:"For better understanding of programmer?",url:"https://www.amazon.com/-/es/dp/0135957052/"},{title:"Software Craftsmanship: The New Imperative",image_url:"https://images-na.ssl-images-amazon.com/images/I/41Z1V1UfxGL._SX395_BO1,204,203,200_.jpg",description:"For better understanding of programming",url:"https://www.amazon.com/-/es/dp/0201733862/"},{title:"Genetic Programming: On the Programming of Computers by Means of Natural Selection ",image_url:"https://images-na.ssl-images-amazon.com/images/I/51fAjpvDvCL._SX342_BO1,204,203,200_.jpg",description:"For better understanding of Skynet",url:"https://www.amazon.com/dp/0262111705/"},{title:"Time Management for System Administrators",image_url:"https://m.media-amazon.com/images/I/51PxEmVk1vL.jpg",description:"For better understanding of System Administration",url:"https://www.amazon.com/-/es/dp/B0026OR2WM/"},{title:"Practice of System and Network Administration",image_url:"https://m.media-amazon.com/images/I/51McF37d5bL.jpg",description:"For better understanding of System Administration II",url:"https://www.amazon.com/-/es/dp/B004JLMUJ0/"},{title:"Invent Your Own Computer Games with Python",image_url:"https://images-na.ssl-images-amazon.com/images/I/51mpkckeu4L._SX376_BO1,204,203,200_.jpg",description:"For fun! (?)",url:"https://www.amazon.com/-/es/dp/1593277954/"},{title:"Practice of Cloud System Administration",image_url:"https://images-na.ssl-images-amazon.com/images/I/51CjsoPclaL._SX379_BO1,204,203,200_.jpg",description:"For better understanding of System Administration III",url:"https://www.amazon.com/-/es/dp/032194318X/"},{title:"UNIX and Linux System Administration Handbook",image_url:"https://images-na.ssl-images-amazon.com/images/I/61ydSUheYOL._SX383_BO1,204,203,200_.jpg",description:"For better understanding of System Administration IIII",url:"https://www.amazon.com/-/es/dp/0134277554/"},{title:"Practice of System and Network Administration",image_url:"https://images-na.ssl-images-amazon.com/images/I/516SY6CfDqL._SX379_BO1,204,203,200_.jpg",description:"For better understanding of System Administration IIIII",url:"https://www.amazon.com/dp/0321919165/"}],favBooks:[{title:"Design Patterns: Elements of Reusable Object-Oriented Software",image_url:"https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",description:'One of the "must read" of every programmer, imho',url:"https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"},{title:"Clean Code: A Handbook of Agile Software Craftsmanship",image_url:"https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg",description:"If you want to write readable code, read this",url:"https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"},{title:"The Kubernetes Book",image_url:"https://m.media-amazon.com/images/I/419aaEMtQlS.jpg",description:"THE book for getting starting with k8s",url:"https://www.amazon.com/Kubernetes-Book-Version-November-2018-ebook/dp/B072TS9ZQZ"},{title:"Computer Networks",image_url:"https://images-na.ssl-images-amazon.com/images/I/41bdzcfQKbL._SX384_BO1,204,203,200_.jpg",description:"I leant networking with this book",url:"https://www.amazon.com/Computer-Networks-5th-Andrew-Tanenbaum/dp/0132126958"},{title:"C Programming Language",image_url:"https://images-na.ssl-images-amazon.com/images/I/411ejyE8obL._SX377_BO1,204,203,200_.jpg",description:"I don't remember much about C, but this book was cool to read",url:"https://www.amazon.com/-/es/dp/0131103628"},{title:"Construcción de software: Una mirada ágil",image_url:"https://m.media-amazon.com/images/I/41cTSFNSTkL.jpg",description:"This book helped me to approve Nicolás Paez's subject :)",url:"https://www.amazon.com/-/es/Nicolás-Paez-ebook/dp/B01M1L858Z"}]}},computed:{groupedBooks:function(){return v(this.$data[this.showList],3)}},methods:{setList:function(t){this.showList=t}}};O.render=w;e["default"]=O},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),m=r("fdbf"),u=r("d039"),l=r("5135"),f=r("e8b5"),d=r("861d"),p=r("825a"),g=r("7b0b"),b=r("fc6a"),h=r("c04e"),w=r("5c6c"),v=r("7c73"),O=r("df75"),y=r("241c"),_=r("057f"),j=r("7418"),S=r("06cf"),k=r("9bf2"),z=r("d1e7"),I=r("9112"),L=r("6eeb"),B=r("5692"),P=r("f772"),C=r("d012"),A=r("90e3"),F=r("b622"),T=r("e538"),X=r("746f"),N=r("d44e"),x=r("69f3"),E=r("b727").forEach,M=P("hidden"),D="Symbol",J="prototype",U=F("toPrimitive"),W=x.set,H=x.getterFor(D),Z=Object[J],G=i.Symbol,R=o("JSON","stringify"),K=S.f,Q=k.f,V=_.f,Y=z.f,$=B("symbols"),q=B("op-symbols"),tt=B("string-to-symbol-registry"),et=B("symbol-to-string-registry"),rt=B("wks"),nt=i.QObject,it=!nt||!nt[J]||!nt[J].findChild,ot=s&&u((function(){return 7!=v(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(Z,e);n&&delete Z[e],Q(t,e,r),n&&t!==Z&&Q(Z,e,n)}:Q,at=function(t,e){var r=$[t]=v(G[J]);return W(r,{type:D,tag:t,description:e}),s||(r.description=e),r},st=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,r){t===Z&&ct(q,e,r),p(t);var n=h(e,!0);return p(r),l($,n)?(r.enumerable?(l(t,M)&&t[M][n]&&(t[M][n]=!1),r=v(r,{enumerable:w(0,!1)})):(l(t,M)||Q(t,M,w(1,{})),t[M][n]=!0),ot(t,n,r)):Q(t,n,r)},mt=function(t,e){p(t);var r=b(e),n=O(r).concat(pt(r));return E(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?v(t):mt(v(t),e)},lt=function(t){var e=h(t,!0),r=Y.call(this,e);return!(this===Z&&l($,e)&&!l(q,e))&&(!(r||!l(this,e)||!l($,e)||l(this,M)&&this[M][e])||r)},ft=function(t,e){var r=b(t),n=h(e,!0);if(r!==Z||!l($,n)||l(q,n)){var i=K(r,n);return!i||!l($,n)||l(r,M)&&r[M][n]||(i.enumerable=!0),i}},dt=function(t){var e=V(b(t)),r=[];return E(e,(function(t){l($,t)||l(C,t)||r.push(t)})),r},pt=function(t){var e=t===Z,r=V(e?q:b(t)),n=[];return E(r,(function(t){!l($,t)||e&&!l(Z,t)||n.push($[t])})),n};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===Z&&r.call(q,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),ot(this,e,w(1,t))};return s&&it&&ot(Z,e,{configurable:!0,set:r}),at(e,t)},L(G[J],"toString",(function(){return H(this).tag})),L(G,"withoutSetter",(function(t){return at(A(t),t)})),z.f=lt,k.f=ct,S.f=ft,y.f=_.f=dt,j.f=pt,T.f=function(t){return at(F(t),t)},s&&(Q(G[J],"description",{configurable:!0,get:function(){return H(this).description}}),a||L(Z,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),E(O(rt),(function(t){X(t)})),n({target:D,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:mt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(g(t))}}),R){var gt=!c||u((function(){var t=G();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,R.apply(null,i)}})}G[J][U]||I(G[J],U,G[J].valueOf),N(G,D),C[M]=!0},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,m=function(t){var e=1==t,r=2==t,m=3==t,u=4==t,l=6==t,f=7==t,d=5==t||l;return function(p,g,b,h){for(var w,v,O=o(p),y=i(O),_=n(g,b,3),j=a(y.length),S=0,k=h||s,z=e?k(p,j):r||f?k(p,0):void 0;j>S;S++)if((d||S in y)&&(w=y[S],v=_(w,S,O),t))if(e)z[S]=v;else if(v)switch(t){case 3:return!0;case 5:return w;case 6:return S;case 2:c.call(z,w)}else switch(t){case 4:return!1;case 7:c.call(z,w)}return l?-1:m||u?u:z}};t.exports={forEach:m(0),map:m(1),filter:m(2),some:m(3),every:m(4),find:m(5),findIndex:m(6),filterOut:m(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,m=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};m(f,u);var d=f.prototype=u.prototype;d.constructor=f;var p=d.toString,g="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=g?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=books.3a5a6bea.js.map