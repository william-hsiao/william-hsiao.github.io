(function(A){function t(t){for(var a,n,r=t[0],c=t[1],o=t[2],d=0,u=[];d<r.length;d++)n=r[d],i[n]&&u.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(A[a]=c[a]);l&&l(t);while(u.length)u.shift()();return s.push.apply(s,o||[]),e()}function e(){for(var A,t=0;t<s.length;t++){for(var e=s[t],a=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),A=n(n.s=e[0]))}return A}var a={},i={app:0},s=[];function n(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=A,n.c=a,n.d=function(A,t,e){n.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},n.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},n.t=function(A,t){if(1&t&&(A=n(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)n.d(e,a,function(t){return A[t]}.bind(null,a));return e},n.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return n.d(t,"a",t),t},n.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"21bb":function(A,t,e){"use strict";var a=e("bcc9"),i=e.n(a);i.a},"2b0e6":function(A,t,e){A.exports=e.p+"img/gakuhub_transparent.fbac803a.png"},3319:function(A,t,e){"use strict";var a=e("81aa"),i=e.n(a);i.a},"4b84":function(A,t,e){},"4de7":function(A,t,e){},"56d7":function(A,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],n={name:"App"},r=n,c=(e("5c0b"),e("2877")),o=Object(c["a"])(r,i,s,!1,null,null,null);o.options.__file="App.vue";var l=o.exports,d=e("8c4f"),u=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"home"}},[e("Navbar"),e("Cover"),e("Intro"),e("DevSkills"),e("Projects"),e("AboutMe"),e("Contact")],1)},g=[],v=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:A.showNavbar,expression:"showNavbar"}],attrs:{id:"nav"}},[a("div",{staticClass:"navbar"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{staticClass:"logo",attrs:{alt:"logo",src:e("9d64")}}),a("h1",[A._v("William Hsiao")])]),a("div",{staticClass:"links"},[a("a",{staticClass:"item",attrs:{href:"https://www.linkedin.com/in/william-hsiao/",target:"_blank"}},[a("img",{attrs:{src:e("6a55")}})]),a("a",{staticClass:"item",attrs:{href:"https://github.com/william-hsiao",target:"_blank"}},[a("img",{attrs:{src:e("917e")}})]),a("div",{staticClass:"item tooltip"},[a("img",{attrs:{src:e("7711")}}),a("div",{staticClass:"tooltipContent"},[A._v("contact@william-hsiao.com")])])])],1)])])},h=[],m={name:"Navbar",data:function(){return{showNavbar:!1}},methods:{navScroll:function(){this.showNavbar=document.getElementById("home").scrollTop>=window.innerHeight}},mounted:function(){document.getElementById("home").addEventListener("scroll",this.navScroll)}},C=m,w=(e("bd65"),Object(c["a"])(C,v,h,!1,null,"8dda5230",null));w.options.__file="Navbar.vue";var f=w.exports,p=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},E=[function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"container",attrs:{id:"Cover"}},[a("div",{staticClass:"frame"},[a("img",{staticClass:"logo",attrs:{alt:"logo",src:e("9d64")}}),a("h1",[A._v("William Hsiao")]),a("h3",[A._v("Software Engineer")]),a("div",{staticClass:"links"},[a("a",{staticClass:"item",attrs:{href:"https://www.linkedin.com/in/william-hsiao/",target:"_blank"}},[a("img",{attrs:{src:e("6a55")}})]),a("a",{staticClass:"item",attrs:{href:"https://github.com/william-hsiao",target:"_blank"}},[a("img",{attrs:{src:e("917e")}})]),a("div",{staticClass:"item tooltip"},[a("img",{attrs:{src:e("7711")}}),a("div",{staticClass:"tooltipContent"},[A._v("contact@william-hsiao.com")])])])])])}],_={name:"Cover"},B=_,D=(e("e7fc"),Object(c["a"])(B,p,E,!1,null,"50f2105a",null));D.options.__file="Cover.vue";var I=D.exports,Q=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},b=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container",attrs:{id:"Intro"}},[e("div",{staticClass:"frame"},[A._v("Hi! I'm William Hsiao, a software engineer currently working in Tokyo, Japan.")])])}],O={name:"Intro"},H=O,y=Object(c["a"])(H,Q,b,!1,null,null,null);y.options.__file="Intro.vue";var k=y.exports,M=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container",attrs:{id:"DevSkills"}},[e("div",{staticClass:"frame"},[e("div",{staticClass:"summary contents active"},[e("h1",[A._v("Developer Skills")]),e("div",{staticClass:"list-container"},[e("div",{staticClass:"list"},[e("h4",[A._v("Languages")]),e("ul",A._l(A.summary.lang,function(t){return e("li",[A._v(A._s(t))])}))]),e("div",{staticClass:"list"},[e("h4",[A._v("Front-End")]),e("ul",A._l(A.summary.front,function(t){return e("li",[A._v(A._s(t))])}))]),e("div",{staticClass:"list"},[e("h4",[A._v("Back-End")]),e("ul",A._l(A.summary.back,function(t){return e("li",[A._v(A._s(t))])}))]),e("div",{staticClass:"list"},[e("h4",[A._v("Services")]),e("ul",A._l(A.summary.services,function(t){return e("li",[A._v(A._s(t))])}))])]),e("div",{staticClass:"button link",on:{click:function(t){A.viewTemplate("summary","detailed","fade-up")}}},[A._v("View full list & details")])]),e("div",{staticClass:"detailed contents"},[e("h1",[A._v("Developer Skills")]),e("div",{staticClass:"section"},[e("h4",[A._v("Languages")]),e("div",{staticClass:"skill-field-container"},A._l(A.detailed.lang,function(t){return e("div",{staticClass:"skill-field"},[e("div",{staticClass:"label"},[A._v(A._s(t.name))]),e("RatingBar",{attrs:{value:t.rating}})],1)}))]),e("div",{staticClass:"section"},[e("h4",[A._v("Front-End")]),e("div",{staticClass:"skill-field-container"},A._l(A.detailed.front,function(t){return e("div",{staticClass:"skill-field"},[e("div",{staticClass:"label"},[A._v(A._s(t.name))]),e("RatingBar",{attrs:{value:t.rating}})],1)}))]),e("div",{staticClass:"section"},[e("h4",[A._v("Back-End")]),e("div",{staticClass:"skill-field-container"},A._l(A.detailed.back.frameworks,function(t){return e("div",{staticClass:"skill-field"},[e("div",{staticClass:"label"},[A._v(A._s(t.name))]),e("RatingBar",{attrs:{value:t.rating}})],1)})),e("h6",[A._v("Databases")]),e("div",{staticClass:"skill-field-container"},A._l(A.detailed.back.databases,function(t){return e("div",{staticClass:"skill-field"},[e("div",{staticClass:"label"},[A._v(A._s(t.name))]),e("RatingBar",{attrs:{value:t.rating}})],1)}))]),e("div",{staticClass:"section"},[e("h4",[A._v("Services & Others")]),e("div",{staticClass:"skill-field-container"},A._l(A.detailed.others.others,function(t){return e("div",{staticClass:"skill-field"},[e("div",{staticClass:"label"},[A._v(A._s(t.name))]),e("RatingBar",{attrs:{value:t.rating}})],1)})),e("h6",[A._v("AWS")]),e("div",{staticClass:"skill-field-container"},A._l(A.detailed.others.aws,function(t){return e("div",{staticClass:"skill-field"},[e("div",{staticClass:"label"},[A._v(A._s(t.name))]),e("RatingBar",{attrs:{value:t.rating}})],1)}))]),e("div",{staticClass:"link",on:{click:function(t){A.viewTemplate("detailed","summary","fade-down")}}},[A._v("← return")])])])])},S=[],L=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"rating-container"},[A._l(A.rating,function(A){return e("div",{staticClass:"marked"})}),A._l(5-A.rating,function(A){return e("div",{staticClass:"unmarked"})})],2)},N=[],x=(e("c5f6"),{name:"RatingBar",props:{value:Number},computed:{rating:function(){return this.value<0?0:this.value>5?5:this.value}}}),T=x,j=(e("d128"),Object(c["a"])(T,L,N,!1,null,null,null));j.options.__file="RatingBar.vue";var P=j.exports,J={methods:{viewTemplate:function(A,t){var e=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"random";return new Promise(function(i){var s,n,r=e.$el.getElementsByClassName("frame")[0],c=e.$el.getElementsByClassName(A)[0],o=e.$el.getElementsByClassName(t)[0],l=window.innerHeight-200,d=["fade-up","fade-down","fade-left","fade-right"];s="random"===a?d[Math.floor(Math.random()*Math.floor(d.length))]:a,c.style.width="".concat(c.offsetWidth,"px"),window.innerWidth<1e3?c.style.marginLeft="".concat((window.innerWidth-c.offsetWidth)/2,"px"):c.style.marginLeft="".concat((1e3-c.offsetWidth)/2,"px"),c.classList.add("standby","".concat(s,"-out")),c.classList.remove("active"),o.classList.add("active","".concat(s,"-in")),c.offsetHeight>o.offsetHeight&&(r.style.height="".concat(c.offsetHeight,"px")),c.offsetHeight>l&&o.offsetHeight<l?(n=(l-o.offsetHeight)/2,o.style.paddingTop="".concat(n,"px"),o.style.paddingBottom="".concat(n,"px")):o.offsetHeight>l&&c.offsetHeight<l?(n=(l-c.offsetHeight)/2,c.style.paddingTop="".concat(n,"px"),c.style.paddingBottom="".concat(n,"px")):c.offsetHeight<=l&&o.offsetHeight<=l&&(c.offsetHeight>o.offsetHeight?(n=(c.offsetHeight-o.offsetHeight)/2,o.style.paddingTop="".concat(n,"px"),o.style.paddingBottom="".concat(n,"px")):(n=(o.offsetHeight-c.offsetHeight)/2,c.style.paddingTop="".concat(n,"px"),c.style.paddingBottom="".concat(n,"px"))),setTimeout(function(){r.style.height="",o.style.paddingBottom="",o.style.paddingTop="",c.style.paddingBottom="",c.style.paddingTop="",c.style.width="",c.style.marginLeft="",c.classList.remove("standby","".concat(s,"-out")),o.classList.remove("".concat(s,"-in"))},2e3),e.$el.scrollIntoView({behavior:"smooth",block:"start"}),i()})}}},$={name:"DevSkills",mixins:[J],components:{RatingBar:P},data:function(){return{summary:{lang:["JavaScript","Java","C/C++"],front:["Vue.js","Sass"],back:["Node.js","MySQL","MongoDB"],services:["Wercker","AWS"]},detailed:{lang:[{name:"JavaScript",rating:5},{name:"Java",rating:5},{name:"C/C++",rating:4},{name:"C#",rating:4},{name:"Python",rating:3},{name:"Ruby",rating:3},{name:"Go",rating:2},{name:"Fortran",rating:1}],front:[{name:"Vue.js",rating:5},{name:"Sass",rating:5}],back:{frameworks:[{name:"Node.js",rating:5},{name:"Rails",rating:3}],databases:[{name:"MySQL",rating:4},{name:"MongoDB",rating:4}]},others:{others:[{name:"Git",rating:4},{name:"Wercker",rating:3},{name:"Unity",rating:3}],aws:[{name:"S3",rating:4},{name:"CloudFront",rating:4},{name:"IAM",rating:4},{name:"EC2",rating:2}]}}}}},R=$,W=(e("afd8"),Object(c["a"])(R,M,S,!1,null,"6f07f364",null));W.options.__file="DevSkills.vue";var U=W.exports,z=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container",attrs:{id:"Projects"}},[e("div",{staticClass:"frame"},[e("div",{staticClass:"summary contents active"},[e("h1",[A._v("Projects")]),e("div",{staticClass:"slide-container scroll-left scroll-right"},[e("div",{staticClass:"slide-wrapper"},[e("div",{staticClass:"slide gakuhub-slide",on:{click:function(t){A.viewTemplate("summary","gakuhub","fade-up")}}},[e("div",{staticClass:"image-container link",on:{click:function(t){A.viewTemplate("summary","gakuhub","fade-up")}}},[A._m(0)]),e("h3",[A._v("gakuhub")]),e("div",{staticClass:"description"},[A._v(" Building an online service that aims to provide a platform for internationals students within Japan to connect with each other. In addition, becoming a gateway for prospective students to obtain information and consult with current students on their experiences. ")])]),e("div",{staticClass:"slide gaze-key-slide",on:{click:function(t){A.viewTemplate("summary","gaze-key","fade-up")}}},[e("div",{staticClass:"image-container link",on:{click:function(t){A.viewTemplate("summary","gaze-key","fade-up")}}},[A._m(1)]),e("h3",[A._v("gaze-key")]),e("div",{staticClass:"description"},[A._v(" Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.")])]),e("div",{staticClass:"slide portfolio-slide",on:{click:function(t){A.viewTemplate("summary","portfolio","fade-up")}}},[A._m(2),e("h3",[A._v("Portfolio")]),e("div",{staticClass:"description"},[A._v(" This site!")])])])])]),e("div",{staticClass:"gakuhub contents"},[e("h1",[A._v("gakuhub")]),e("div",{staticClass:"body"},[A._v("Building an online service that aims to provide a platform for internationals students within Japan to connect with each other. In addition, becoming a gateway for prospective students to obtain information and consult with current students on their experiences. ")]),e("div",{staticClass:"link",on:{click:function(t){A.viewTemplate("gakuhub","summary","fade-down")}}},[A._v("← return")])]),e("div",{staticClass:"gaze-key contents"},[e("h1",[A._v("gaze-key")]),e("div",{staticClass:"body"},[A._v("Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.")]),e("div",{staticClass:"link",on:{click:function(t){A.viewTemplate("gaze-key","summary","fade-down")}}},[A._v("← return")])]),e("div",{staticClass:"portfolio contents"},[e("h1",[A._v("Portfolio Site")]),e("div",{staticClass:"body"},[A._v(" This site!")]),e("div",{staticClass:"link",on:{click:function(t){A.viewTemplate("portfolio","summary","fade-down")}}},[A._v("← return")])])])])},F=[function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"image-border"},[a("img",{attrs:{alt:"gakuhub",src:e("2b0e6")}})])},function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"image-border"},[a("img",{attrs:{alt:"gakuhub",src:e("d99a")}})])},function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"image-container link"},[a("div",{staticClass:"image-border"},[a("img",{attrs:{alt:"gakuhub",src:e("9d64")}})])])}],G={name:"Projects",mixins:[J]},V=G,Y=(e("3319"),Object(c["a"])(V,z,F,!1,null,"71773744",null));Y.options.__file="Projects.vue";var K=Y.exports,X=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container",attrs:{id:"AboutMe"}},[e("div",{staticClass:"frame"},[e("div",{staticClass:"summary contents active"},[e("h1",{staticClass:"article-link",on:{click:function(t){A.changeArticle("base")}}},[A._v("About Me")]),e("div",{staticClass:"field-container"},[e("div",{staticClass:"section outline"},[e("div",{staticClass:"field article-link",on:{click:function(t){A.changeArticle("experience")}}},[e("h3",{staticClass:"label"},[A._v("Current Position:")]),A._m(0)]),e("div",{staticClass:"field article-link",on:{click:function(t){A.changeArticle("languages")}}},[e("h3",{staticClass:"label"},[A._v("Languages:")]),A._m(1)]),e("div",{staticClass:"field article-link",on:{click:function(t){A.changeArticle("education")}}},[e("h3",{staticClass:"label"},[A._v("Education: ")]),A._m(2)]),e("div",{staticClass:"field article-link",on:{click:function(t){A.changeArticle("interests")}}},[e("h3",{staticClass:"label"},[A._v("Interests:")]),A._m(3)]),A._m(4)]),e("div",{staticClass:"section article-container"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},["base"===A.showArticle?e("div",{key:"1",staticClass:"article main"},[e("p",{staticClass:"indent"},[A._v("I am an aspiring full-stack developer currently based in Tokyo. Although my work so far has mostly been around web development, I am always eager to venture into new fields and face new challenges. I believe that to create the best applications, one must have a solid understanding of all components not only on the technical aspects but also how each component contributes to the greater purpose of the project. It is with this mindset that I step into projects and aim to learn as much as I can from each experience. Even if it’s something I am already familiar with, there is always more to gain, more to discover, more to improve upon.")]),e("i",[A._v('"Jack of all trades, but master of none"')]),e("p",[A._v("is a phrase that is quite befitting of me yet one that I despise. Although I always strive to be an all-rounder in the fields I commit to in order to open the doors to as many opportunities possible, I cannot say that I am satisfied with where I am now. There is always more to learn and that is what drives me to keep improving myself everyday, constantly chasing to be the best that I can be.")]),e("p",[A._v("I want to challenge the world.")]),e("p",[A._v("I want to develop a product that changes lives.")]),e("p",[A._v("I want to meet and work with like-minded people and see how far we can go.")])]):A._e(),"experience"===A.showArticle?e("div",{key:"2",staticClass:"article"},[e("h3",[A._v("Work Experience")]),e("div",{staticClass:"item"},[e("h4",[A._v("Software Engineering Intern, Repro Inc.")]),e("h6",[A._v("March 2018 - Present")]),e("p",[A._v("Software engineering intern working as a core member in several large projects ranging from UI/UX development to SDK development. The work is mainly conducted in Japanese and involves constant communication with team members and work within a live production environment utilizing AWS.")])]),e("div",{staticClass:"item"},[e("h4",[A._v("Teaching Assistant, Waseda University")]),e("h6",[A._v("April 2017 - Present")]),e("p",[A._v("Assisting in teaching programming to students in the international program using English")]),e("p",[A._v("Courses: ")]),e("ul",[e("li",[A._v("Introduction to Programming (C)")]),e("li",[A._v("Intermediate Programming (C)")]),e("li",[A._v("Advanced Java Programming (Java)")]),e("li",[A._v("Numerical Analysis")]),e("li",[A._v("Survey of Modern Mathematical Sciences A")])])]),e("div",{staticClass:"item"},[e("h4",[A._v("Senior Managing Assistant, SIAM")]),e("h6",[A._v("March 7th - March 10th 2018")]),e("p",[A._v("Assisting with the Society for Industrial and Applied Mathematics (SIAM) 18 Conference on Parallel Processing for Scientific Computing")]),e("ul",[e("li",[A._v("Overseeing equipment ")]),e("li",[A._v("Coordinating assistants to sessions ")]),e("li",[A._v("Responding to issues during the sessions")])])]),e("div",{staticClass:"item"},[e("h4",[A._v("Administrative Assistant, Tokyo Leisure Home")]),e("h6",[A._v("December 2016 - February 2018")]),e("p",[A._v("Managing communication and documentation between the company and clients using English and Japanese")])]),e("div",{staticClass:"link",on:{click:function(t){A.changeArticle("base")}}},[A._v("← return")])]):"languages"===A.showArticle?e("div",{key:"3",staticClass:"article languages"},[e("h3",[A._v("Languages")]),e("div",{staticClass:"item"},[e("h4",[A._v("English")]),e("RatingBar",{staticClass:"medium",attrs:{value:5}}),e("p",[A._v("Native")])],1),e("div",{staticClass:"item"},[e("h4",[A._v("Japanese")]),e("RatingBar",{staticClass:"medium",attrs:{value:4}}),e("p",[A._v("Working Proficiency")])],1),e("div",{staticClass:"item"},[e("h4",[A._v("Chinese (Mandarin)")]),e("RatingBar",{staticClass:"medium",attrs:{value:3}}),e("p",[A._v("Conversational")])],1),e("div",{staticClass:"link",on:{click:function(t){A.changeArticle("base")}}},[A._v("← return")])]):"education"===A.showArticle?e("div",{key:"4",staticClass:"article"},[e("h3",[A._v("Education")]),e("div",{staticClass:"item"},[e("h4",[A._v("Bachelors of Engineering, Waseda University")]),e("h6",[A._v("Sepetember 2015 - September 2019")]),e("p",[A._v("Computer Science and Engineering")]),e("p",[A._v("Nakajima Lab")])]),e("div",{staticClass:"item"},[e("h4",[A._v("Bachelor of Engineering/IT, University of Queensland")]),e("h6",[A._v("February 2015 - Jun 2015")]),e("p",[A._v("Software Engineering")]),e("p",[A._v("*Incomplete - Completed one semester before leaving to attend Waseda University")])]),e("div",{staticClass:"item"},[e("h4",[A._v("Highschool Diploma, Brisbane Grammar School")]),e("h6",[A._v("January 2010 - November 2014")])]),e("div",{staticClass:"link",on:{click:function(t){A.changeArticle("base")}}},[A._v("← return")])]):"interests"===A.showArticle?e("div",{key:"5",staticClass:"article"},[e("h3",[A._v("Interests")]),e("div",{staticClass:"item"},[e("h4",[A._v("Tennis")]),e("ul",[e("li",[A._v("10+ years")]),e("li",[A._v("Brisbane Grammar School 2nds Tennis Team (2014)")]),e("li",[A._v("Tennis Brisbane Superleague Fixtures Northside Division 5 Finalists (2013)")])])]),e("div",{staticClass:"item"},[e("h4",[A._v("Archery")]),e("ul",[e("li",[A._v("2.5+ years")]),e("li",[A._v("Waseda Sagittarius Archery Circle")])])]),e("div",{staticClass:"item"},[e("h4",[A._v("Violin")]),e("ul",[e("li",[A._v("10+ years")]),e("li",[A._v("Australian Music Examination Board 8th Grade")]),e("li",[A._v(" Brisbane Grammar School Music Program"),e("ul",[e("li",[A._v("Brisbane Grammar Symphony Orchestra")]),e("li",[A._v("Chamber Strings Ensemble")])])])])]),e("div",{staticClass:"link",on:{click:function(t){A.changeArticle("base")}}},[A._v("← return")])]):A._e()])],1)])])])])},q=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"body"},[e("p",[A._v("Software Engineering Intern")]),e("span",[A._v("Repro Inc.")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"body"},[e("p",[A._v("English, Japanese, Chinese (Mandarin)")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"body"},[e("p",[A._v("Bachelors of Engineering")]),e("span",[A._v("Computer Science and Engineering")]),e("span",[A._v("Waseda University, Tokyo, Japan")]),e("div",{staticClass:"subscript"},[A._v("Graduate September 2019")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"body"},[e("p",[A._v("Tennis, Archery, Violin")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"field locations"},[e("div",{staticClass:"body"},[e("p",[A._v("Taiwan")]),e("span",[A._v("Taoyuan")])]),e("div",{staticClass:"arrow"},[A._v("→")]),e("div",{staticClass:"body"},[e("p",[A._v("Australia")]),e("span",[A._v("Brisbane")])]),e("div",{staticClass:"arrow"},[A._v("→")]),e("div",{staticClass:"body"},[e("p",[A._v("Japan")]),e("span",[A._v("Tokyo")])])])}],Z={name:"AboutMe",components:{RatingBar:P},data:function(){return{showArticle:"base"}},methods:{changeArticle:function(A){this.showArticle=A}}},AA=Z,tA=(e("7696"),Object(c["a"])(AA,X,q,!1,null,"c74e8ef2",null));tA.options.__file="AboutMe.vue";var eA=tA.exports,aA=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},iA=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container",attrs:{id:"Contact"}},[e("div",{staticClass:"frame"},[e("h1",[A._v("Contact")]),A._v("Got a project in mind? Just have a question? Let's talk!"),e("br"),e("br"),e("b",[A._v("contact@william-hsiao.com")])])])}],sA={name:"Contact"},nA=sA,rA=(e("c1dc"),Object(c["a"])(nA,aA,iA,!1,null,"655e2fb4",null));rA.options.__file="Contact.vue";var cA=rA.exports,oA={name:"home",components:{Navbar:f,Cover:I,Intro:k,DevSkills:U,Projects:K,AboutMe:eA,Contact:cA},mounted:function(){for(var A=document.getElementsByClassName("container"),t=0;t<A.length;t++)t%2===0?A[t].classList.add("dark"):A[t].classList.add("light"),"Cover"===A[t].id?A[t].classList.add("theme-cover"):A[t].classList.add("theme-".concat((t-1)%4+1))}},lA=oA,dA=(e("21bb"),Object(c["a"])(lA,u,g,!1,null,null,null));dA.options.__file="Home.vue";var uA=dA.exports;a["a"].use(d["a"]);var gA=new d["a"]({mode:"history",routes:[{path:"/",name:"home",component:uA},{path:"*",redirect:"/"}]}),vA=e("0284"),hA=e.n(vA);a["a"].use(hA.a,{id:"UA-130037056-1",router:gA}),a["a"].config.productionTip=!1,new a["a"]({router:gA,render:function(A){return A(l)}}).$mount("#app")},"5c0b":function(A,t,e){"use strict";var a=e("5e27"),i=e.n(a);i.a},"5e27":function(A,t,e){},"6a55":function(A,t,e){A.exports=e.p+"img/linkedin.ce43af6d.svg"},7696:function(A,t,e){"use strict";var a=e("4de7"),i=e.n(a);i.a},7711:function(A,t,e){A.exports=e.p+"img/email.125e6dee.svg"},"81aa":function(A,t,e){},"917e":function(A,t,e){A.exports=e.p+"img/github.29902cfe.svg"},"9d64":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAALuCAYAAADxHZPKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsaCTEiw8DrGgAADQVJREFUeNrt2EEOwjAQBMFd5Ifn58OdS4RkB4dU/cATgVrbVZUCAAC29jIBAAAIdwAAQLgDAIBwBwAAhDsAACDcAQBAuAMAAMIdAAAQ7gAAINwBAADhDgAAwh0AABDuAACAcAcAAOEOAAAIdwAAQLgDAIBwBwAAhDsAACDcAQBAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAACAcAcAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAAh3AAC4pWECdpPkUe/tbh8d8P/s/xlOubgDAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAABDuAACAcAcAAIQ7AAAIdwAAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAINwBAADhDgAAfGmYALhSEiPwN7rbCMBlXNwBAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAADhDgAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAAEC4AwCAcAcAACYZJgBYp7sf9d4kPjrAIi7uAAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAACTDBPAbyUxAvj9ApxycQcAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAmKSrKmYAAIC9ubgDAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAMACwwTs5jgO7wXwf+W98MHFHQAAhDsAACDcAQBAuAMAAMIdAAAQ7gAAINwBAADhDgAACHcAABDuAACAcAcAAOEOAAAIdwAAQLgDAIBwBwAAhDsAACDcAQBAuAMAAMIdAAAQ7gAAINwBAADhDgAAwh0AABDuAACAcAcAAOEOAAAIdwAAQLgDAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAACAcAcAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAwP0NEwCsk4e9t31ygGVc3AEAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAABDuAACAcAcAAIQ7AAAIdwAAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAINwBAADhDgAACHcAABDuAACAcAcAAIQ7AAAIdwAAQLgDAIBwBwAAhDsAACDcAQBAuAMAAMIdAAAQ7gAAINwBAADhDgAACHcAABDuAACAcAcAAOEOAAAIdwAAQLgDAIBwBwAAhDsAACDcAQBAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAACAcAcAAOEOAAAIdwAAQLgDAIBwBwAAJhkmAFinTQDAJC7uAAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAABDuAACAcAcAAIQ7AAAIdwAAQLgDAADCHQAA7q+rKmYAAIC9ubgDAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAADhDgAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAAhDsAAAh3AABAuAMAAMIdAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAAAIdwAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAAINwBAEC4AwAAwh0AABDuAAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AABAuAMAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAAOEOAADCHQAAEO4AAIBwBwAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwAAwh0AAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAAh3AAAQ7gAAgHAHAACEOwAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAEO4AACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAADhDgAACHcAAEC4AwCAcAcAAIQ7AAAg3AEAQLgDAADCHQAAhDsAACDcAQAA4Q4AAMIdAAAQ7gAAgHAHAIB7egMa7CHgH6oFUwAAAABJRU5ErkJggg=="},afd8:function(A,t,e){"use strict";var a=e("b7e0"),i=e.n(a);i.a},b7e0:function(A,t,e){},bcc9:function(A,t,e){},bd65:function(A,t,e){"use strict";var a=e("f66d"),i=e.n(a);i.a},c1dc:function(A,t,e){"use strict";var a=e("4b84"),i=e.n(a);i.a},c4f5:function(A,t,e){},ce98:function(A,t,e){},d128:function(A,t,e){"use strict";var a=e("ce98"),i=e.n(a);i.a},d99a:function(A,t,e){A.exports=e.p+"img/gaze_key_mock.2c9b08ac.png"},e7fc:function(A,t,e){"use strict";var a=e("c4f5"),i=e.n(a);i.a},f66d:function(A,t,e){}});
//# sourceMappingURL=app.8a024282.js.map