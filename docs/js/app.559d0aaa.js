(function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],u=0,b=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(b.length)b.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"02c2aca7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"75d456e0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){c=b[l],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var b=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var b=0;b<c.length;b++)t(c[b]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02d9":function(e,t,n){"use strict";n("e839")},"3a19":function(e,t,n){e.exports=n.p+"img/profile.9601c9f1.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["x"])("router-view");return Object(r["r"])(),Object(r["e"])(n)}n("02d9");const o={};o.render=a;var i=o,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s={class:"container"},c={class:"row mt-4"},u={class:"row mt-4"},b=Object(r["i"])("div",{class:"dropdown-divider"},null,-1),f=Object(r["i"])("div",{class:"dropdown-divider"},null,-1);function p(e,t,n,a,o,i){var l=Object(r["x"])("ProfileCard"),p=Object(r["x"])("PresentationCard"),d=Object(r["x"])("PersonalInformation"),m=Object(r["x"])("Skills"),h=Object(r["x"])("ContactForm");return Object(r["r"])(),Object(r["e"])("div",s,[Object(r["i"])("div",c,[Object(r["i"])(l),Object(r["i"])(p)]),Object(r["i"])("div",u,[Object(r["i"])(d)]),b,Object(r["i"])(m),f,Object(r["i"])(h)])}var d=n("3a19"),m=n.n(d),h={class:"col-sm-4"},j={class:"card text-center"},O=Object(r["i"])("img",{class:"card-img-top rounded-circle img-thumbnail",width:"150",src:m.a,alt:"Leandro Gomez"},null,-1),v={class:"card-body"},g=Object(r["i"])("h5",{class:"card-title"},"Leandro Gomez",-1),k=Object(r["i"])("h6",{class:"card-subtitle mb-2 text-muted"},"Full Stack Developer",-1),y=Object(r["i"])("h6",{class:"card-subtitle mb-2 text-muted"},"Guayaquil, Ecuador",-1),w={class:"btn-group-vertical"},x=Object(r["h"])("Contact "),S=Object(r["i"])("i",{class:"far fa-paper-plane"},null,-1),C=Object(r["i"])("a",{href:"/#/gists",class:"btn btn-outline-info"},[Object(r["h"])("Gists "),Object(r["i"])("i",{class:"fab fa-github"})],-1),I=Object(r["i"])("a",{href:"/#/repos",class:"btn btn-outline-info"},[Object(r["h"])("Repositories "),Object(r["i"])("i",{class:"fab fa-github"})],-1);function D(e,t,n,a,o,i){return Object(r["r"])(),Object(r["e"])("div",h,[Object(r["i"])("div",j,[O,Object(r["i"])("div",v,[g,k,y,Object(r["i"])("div",w,[Object(r["i"])("a",{href:"#contact-form",onClick:t[1]||(t[1]=Object(r["G"])((function(e){return i.focusElement("contact-form")}),["prevent"])),class:"btn btn-outline-info"},[x,S]),C,I])])])])}var _={name:"ProfileCard",methods:{focusElement:function(e){var t=document.getElementById(e);window.scrollTo(0,t.offsetTop)}}};_.render=D;var P=_,z={class:"col-sm-8"},E=Object(r["g"])('<span class="text-center"><h1>Leandro Gomez</h1><h3 class="text-muted">Full Stack Sofware Developer</h3></span><br><span style="font-size:20px;"><p> Hello there, I&#39;m a software developer at <a class="text-info" target="__blank" href="https://devartis.com/">devartis SA</a>, but ready to start your project! I have several years of experience in Backend development with <a class="text-info" href="https://www.djangoproject.com/" target="__blank">Django</a>, <a class="text-info" href="https://www.ansible.com/" target="__blank">Ansible</a> and <a class="text-info" href="https://www.docker.com/" target="__blank">Docker</a>. Whenever I can, I like learning some cloud techologies like <a class="text-info" href="https://kubernetes.io/" target="__blank">Kubernetes</a> and <a class="text-info" href="https://aws.amazon.com/" target="__blank">AWS</a>. </p><p> In my free time I like playing the guitar and travelling. My perfect place in the world is with my wife, my guitar and some Fernet at the beach. </p><p> Don&#39;t hesitate to reach me out if you have any ideas We can work together. </p></span>',3);function G(e,t,n,a,o,i){return Object(r["r"])(),Object(r["e"])("div",z,[E])}var L={name:"PresentationCard"};L.render=G;var A=L;function F(e,t,n,a,o,i){var l=Object(r["x"])("PersonalInformationList");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["i"])(l,{"personal-information":e.personalInfo},null,8,["personal-information"]),Object(r["i"])(l,{"personal-information":e.extraPersonalInfo},null,8,["personal-information"])],64)}var T={class:"col-md-6"},R={class:"table table-hover"},N={class:"align-middle"},B={key:1};function W(e,t,n,a,o,i){return Object(r["r"])(),Object(r["e"])("div",T,[Object(r["i"])("table",R,[Object(r["i"])("tbody",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(n.personalInformation,(function(e){return Object(r["r"])(),Object(r["e"])("tr",{key:n.personalInformation.indexOf(e)},[Object(r["i"])("td",{style:e.style,class:"text-center",scope:"row"},[e.icon?(Object(r["r"])(),Object(r["e"])("i",{key:0,class:e.icon},null,2)):Object(r["f"])("",!0),Object(r["h"])(Object(r["z"])(e.title),1)],4),Object(r["i"])("td",N,[e.href?(Object(r["r"])(),Object(r["e"])("a",{key:0,class:"text-info",href:e.href,target:"__blank"},Object(r["z"])(e.text),9,["href"])):Object(r["f"])("",!0),e.href?Object(r["f"])("",!0):(Object(r["r"])(),Object(r["e"])("span",B,Object(r["z"])(e.text),1))])])})),128))])])])}var J={name:"PersonalInformationList",props:["personalInformation"]};J.render=W;var M=J,q={name:"PersonalInformation",components:{PersonalInformationList:M},data:function(){return{personalInfo:[{title:"",icon:"far fa-2x fa-envelope",style:{},text:"leandro.gz73@gmail.com",href:"mailto:leandro.gz73@gmail.com"},{title:"",icon:"fas fa-2x fa-map-marked-alt",style:{},text:"Born in Argentina, currently in Ecuador",href:""},{title:"",icon:"fas fa-2x fa-university",style:{},text:"Universidad Nacional de Quilmes",href:"http://www.unq.edu.ar/"},{title:"",icon:"fas fa-2x fa-globe",style:{},text:"https://leandro-gomez.github.io/",href:"https://leandro-gomez.github.io/"}],extraPersonalInfo:[{title:"",icon:"fab fa-2x fa-github",style:{},text:"@leandro-gomez",href:"https://github.com/leandro-gomez"},{title:"",icon:"fab fa-2x fa-linkedin",style:{color:"#0077B5"},text:"@leandrogzvz",href:"https://www.linkedin.com/in/leandrogzvz/"},{title:"",icon:"fas fa-2x fa-laptop-house",style:{color:"#771818"},text:"Senior Developer @ Devartis SA",href:"https://devartis.com"},{title:"",icon:"fab fa-2x fa-medium",style:{},text:"@leandro_gomez",href:"https://medium.com/@leandro_gomez"}]}}};q.render=F;var K=q,H={class:"row mt-4"},U={class:"col-md text-center"},V=Object(r["h"])(" More than 8 years of experience with Python, right now working as a Senior Developer. "),Q=Object(r["i"])("br",null,null,-1),Y=Object(r["h"])(" Most applications developed with Django, while implementing RESTful APIs with Django Rest Framework and Asynchronous Queue Processing with Celery. "),$=Object(r["i"])("br",null,null,-1),X=Object(r["h"])(" PostgreSQL and MySQL are the usual choice for Backend databases along with Redis for caching and Celery broker. "),Z=Object(r["i"])("br",null,null,-1),ee=Object(r["h"])(" Deployments are automated to Linux machines using Redhat's Ansible automation. Currently also I maintain and implement new infrastructure features using Amazon Web Services as hosting service "),te=Object(r["h"])(" As part of my daily responsabilities, I promote the comunications between developers and operations teams. That way, each part knows the requirements and implications of new features, which reduces time to production and bugs. "),ne=Object(r["i"])("br",null,null,-1),re=Object(r["h"])(" Working as a frontend developer is not one of my strength, but I'm now afair of those technologies. When required, I've implemented Javascript features in different frameworks, such as ReactJS, VueJS and event React-Native. "),ae=Object(r["i"])("br",null,null,-1),oe=Object(r["h"])(" Of course, every new feature is validated against automated Processing in the CI server, which can be Jenkins, Gitlab-CI or Circle CI. "),ie=Object(r["i"])("br",null,null,-1),le=Object(r["h"])(" On daily basis, We use Docker containers for matching production external services (like databases and caching servers) or implementing specific apps within containers. "),se=Object(r["h"])(" Even I don't have working experience with the Kubernetes and Docker Swarm, I like to try them and be ready for any project that requires them. "),ce=Object(r["i"])("br",null,null,-1),ue=Object(r["h"])(" Lastly, I have some working experience with Ruby and Chef. I've developed a Rails application with Spree framework some years ago and currently using Chef for specific apps deployments. ");function be(e,t,n,a,o,i){var l=Object(r["x"])("SkillList"),s=Object(r["x"])("SkillListDescription");return Object(r["r"])(),Object(r["e"])("div",H,[Object(r["i"])(l,{skills:e.mainSkills,title:"Work Experience","progress-class":"bg-success"},null,8,["skills"]),Object(r["i"])(l,{skills:e.secondSkills,title:"Other work Experience","progress-class":"bg-info"},null,8,["skills"]),Object(r["i"])(l,{skills:e.someKnowledge,title:"Some knowledge","progress-class":"bg-warning"},null,8,["skills"]),Object(r["i"])("div",U,[Object(r["F"])(Object(r["i"])("button",{type:"button",class:"btn btn-link text-info",onClick:t[1]||(t[1]=function(){return i.toogleSkillGroupsDesctions&&i.toogleSkillGroupsDesctions.apply(i,arguments)})},"Read more...",512),[[r["C"],!e.showSkillGroupsDescriptions]]),Object(r["F"])(Object(r["i"])("button",{type:"button",class:"btn btn-link text-info",onClick:t[2]||(t[2]=function(){return i.toogleSkillGroupsDesctions&&i.toogleSkillGroupsDesctions.apply(i,arguments)})},"Read less...",512),[[r["C"],e.showSkillGroupsDescriptions]]),Object(r["i"])(r["b"],{name:"fade"},{default:Object(r["E"])((function(){return[Object(r["F"])(Object(r["i"])("span",null,[Object(r["i"])(s,{title:"Work Experience"},{default:Object(r["E"])((function(){return[V,Q,Y,$,X,Z,ee]})),_:1}),Object(r["i"])(s,{title:"Other Work Experience"},{default:Object(r["E"])((function(){return[te,ne,re,ae,oe,ie,le]})),_:1}),Object(r["i"])(s,{title:"Some knowledge"},{default:Object(r["E"])((function(){return[se,ce,ue]})),_:1})],512),[[r["C"],e.showSkillGroupsDescriptions]])]})),_:1}),Object(r["i"])(r["b"],{name:"fade"},{default:Object(r["E"])((function(){return[Object(r["F"])(Object(r["i"])("button",{type:"button",class:"btn btn-link text-info",onClick:t[3]||(t[3]=function(){return i.toogleSkillGroupsDesctions&&i.toogleSkillGroupsDesctions.apply(i,arguments)})},"Show less",512),[[r["C"],e.showSkillGroupsDescriptions]])]})),_:1})])])}var fe={class:"col-md-4 mt-2"},pe={class:"text-center"},de={class:"list-group list-group-flush"},me={class:"progress"};function he(e,t,n,a,o,i){return Object(r["r"])(),Object(r["e"])("div",fe,[Object(r["i"])("h5",pe,Object(r["z"])(n.title),1),Object(r["i"])("ul",de,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(n.skills,(function(e){return Object(r["r"])(),Object(r["e"])("li",{class:"list-group-item",key:n.skills.indexOf(e)},[Object(r["h"])(Object(r["z"])(e.title)+" ",1),Object(r["i"])("div",me,[Object(r["i"])("div",{class:["progress-bar","progress-bar-striped","progress-bar-animated",n.progressClass],role:"progressbar",style:{width:e.value+"%"},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"},null,14,["aria-valuenow"])])])})),128))])])}var je={name:"SkillList",props:["skills","title","progressClass"]};je.render=he;var Oe=je,ve={class:"text-center"},ge={style:{"white-space":"pre-line"},class:"test-justify"};function ke(e,t,n,a,o,i){return Object(r["r"])(),Object(r["e"])("span",null,[Object(r["i"])("h5",ve,Object(r["z"])(n.title),1),Object(r["i"])("p",ge,[Object(r["w"])(e.$slots,"default")])])}var ye={name:"SkillListDescription",props:["title","description"]};ye.render=ke;var we=ye,xe={name:"Skills",components:{SkillList:Oe,SkillListDescription:we},methods:{toogleSkillGroupsDesctions:function(){this.showSkillGroupsDescriptions=!this.showSkillGroupsDescriptions}},data:function(){return{showSkillGroupsDescriptions:!1,mainSkills:[{title:"Python",value:100},{title:"Ansible",value:95},{title:"Docker",value:80},{title:"Linux",value:75},{title:"Amazon Web Services",value:75}],secondSkills:[{title:"DevOps",value:80},{title:"Gitlab-CI/Jenkins",value:80},{title:"HTML/CSS",value:75},{title:"VueJS",value:75},{title:"ReactJS/React-Native",value:70}],someKnowledge:[{title:"Docker Swarm",value:60},{title:"Kubernetes",value:60},{title:"Ruby",value:40},{title:"Chef",value:30}]}}};n("e48a");xe.render=be;var Se=xe,Ce={class:"row mt-4"},Ie={class:"col-8 offset-2",id:"contact-form"},De={class:"text-center"},_e=Object(r["i"])("h2",{class:"text-center"},"Contact me!",-1),Pe={class:"form-group"},ze=Object(r["i"])("label",{for:"full_name"},"Your name",-1),Ee={class:"form-group"},Ge=Object(r["i"])("label",{for:"_replyto"},"Your email",-1),Le={class:"form-group"},Ae=Object(r["i"])("label",{for:"message"},"Your message",-1),Fe=Object(r["i"])("button",{type:"submit",class:"btn btn-info mb-2"},"Send",-1);function Te(e,t,n,a,o,i){return Object(r["r"])(),Object(r["e"])("div",Ce,[Object(r["i"])("div",Ie,[Object(r["i"])("span",De,[_e,Object(r["i"])("form",{action:"https://formspree.io/f/xzbyrlrg",method:"POST",id:"contact-form",onSubmit:t[4]||(t[4]=Object(r["G"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[Object(r["i"])("div",Pe,[ze,Object(r["F"])(Object(r["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.fullName=e}),placeholder:"Jonh Smith",type:"text",class:"form-control",name:"fullName"},null,512),[[r["B"],o.fullName]])]),Object(r["i"])("div",Ee,[Ge,Object(r["F"])(Object(r["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.email=e}),placeholder:"your_email@example.com",type:"email",class:"form-control",name:"_replyto"},null,512),[[r["B"],o.email]])]),Object(r["i"])("div",Le,[Ae,Object(r["F"])(Object(r["i"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.message=e}),placeholder:"Let me know how I can help you",class:"form-control",name:"message"},null,512),[[r["B"],o.message]])]),Fe],32)])])])}var Re=n("bc3a"),Ne=n.n(Re),Be={name:"ContactForm",methods:{onSubmit:function(e){var t=this,n=e.target,r=n.action,a=new FormData(n);Ne.a.post(r,a).then((function(){t.$router.push({path:"/thanks"})}))}},data:function(){return{fullName:"",email:"",message:""}}};Be.render=Te;var We=Be,Je={name:"Home",components:{ProfileCard:P,PresentationCard:A,PersonalInformation:K,Skills:Se,ContactForm:We}};Je.render=p;var Me=Je,qe={class:"container"},Ke={class:"row mt-4"},He={class:"col-8 offset-2"},Ue={class:"jumbotron"},Ve=Object(r["i"])("h1",{class:"display-4"},"Thanks for your message!",-1),Qe=Object(r["i"])("p",{class:"lead"},"I'll reply as soon as possible.",-1),Ye=Object(r["i"])("p",{class:"lead"},"In the meantime, feel free to go back to my profile.",-1),$e=Object(r["i"])("hr",{class:"my-4"},null,-1);function Xe(e,t,n,a,o,i){var l=Object(r["x"])("router-link");return Object(r["r"])(),Object(r["e"])("div",qe,[Object(r["i"])("div",Ke,[Object(r["i"])("div",He,[Object(r["i"])("div",Ue,[Ve,Qe,Ye,$e,Object(r["i"])(l,{to:"/"},{default:Object(r["E"])((function(e){var t=e.href,n=e.navigate;return[Object(r["i"])("a",{class:"btn btn-info btn-lg",href:t,onClick:n},"Go to profile",8,["href","onClick"])]})),_:1})])])])])}var Ze={name:"Thanks"};Ze.render=Xe;var et=Ze,tt=[{path:"/",name:"Home",component:Me},{path:"/thanks",name:"Thanks",component:et},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/gists",name:"Gists",component:function(){return n.e("about").then(n.bind(null,"e3a1"))}},{path:"/repos",name:"GithubRepositories",component:function(){return n.e("about").then(n.bind(null,"21ad"))}}],nt=Object(l["a"])({history:Object(l["b"])("/"),routes:tt}),rt=nt;Object(r["d"])(i).use(rt).mount("#app")},af91:function(e,t,n){},e48a:function(e,t,n){"use strict";n("af91")},e839:function(e,t,n){}});
//# sourceMappingURL=app.559d0aaa.js.map