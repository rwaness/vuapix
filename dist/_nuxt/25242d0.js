(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,r){var content=r(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("0a23275b",content,!0,{sourceMap:!1})},116:function(t,e,r){var content=r(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("c706158c",content,!0,{sourceMap:!1})},130:function(t){t.exports=JSON.parse('{"name":"vuapix","version":"1.0.0","description":"Headless state management to handle API calls for Vue.js based on vuex","main":"src/index.ts","scripts":{"docs":"nuxt --port 3007","docs:publish":"git add docs/ && git commit -m \\"publish new content\\" && git stash && npm run docs:generate && git add dist/ && git commit --amend --no-edit && git push && npm run docs:deploy","docs:generate":"nuxt generate","docs:start":"nuxt start","docs:deploy":"git push origin --delete gh-pages && git subtree push --prefix dist origin gh-pages && git stash && CUR_BRCH=$(git branch --show-current) && git checkout gh-pages && git fetch && git reset --hard origin/gh-pages && echo \\"vuapix.js.org\\" >> CNAME && git add CNAME && git commit -m \\"add CNAME\\" && git push && git checkout ${CUR_BRCH} && git stash pop && exit 0","test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/rwaness/vuapix.git"},"keywords":["vuapix","vuex","vuejs","vue","api","headless","js","javascript"],"author":"rwaness <erwan.oger35@gmail.com>","license":"ISC","bugs":{"url":"https://github.com/rwaness/vuapix/issues"},"homepage":"https://github.com/rwaness/vuapix#readme","devDependencies":{"@nuxt/content":"^1.10.0","nuxt":"^2.14.7","node-sass":"^4.14.1","sass-loader":"^8.0.2"},"dependencies":{"@nuxtjs/tailwindcss":"^3.2.0","prism-themes":"^1.5.0"}}')},133:function(t,e,r){"use strict";var n={name:"NavHeader",computed:{tree:function(){return this.$store.getters["nav/tree"]}},methods:{toggleDrawer:function(){this.$store.dispatch("nav/toggleDrawer")}}},o=r(9),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"sticky top-0 z-50 w-full border-b-2 bg-white text-gray-700"},[r("div",{staticClass:"container mx-auto flex flex-wrap p-4 items-center"},[r("button",{staticClass:"md:hidden mr-3",on:{click:t.toggleDrawer}},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])]),t._v(" "),r("nuxt-link",{staticClass:"flex title-font font-medium items-center text-green-800",attrs:{to:"/"}},[r("span",{staticClass:"text-xl"},[t._v("VUAPIX")])]),t._v(" "),r("div",{staticClass:"ml-auto flex flex-no-wrap items-center"},[r("nav",{staticClass:"hidden md:flex flex-no-wrap"},t._l(t.tree,(function(e,n){return r("nuxt-link",{key:"chapter-"+n,staticClass:"mx-2 hover:text-gray-900",attrs:{to:e.slug}},[t._v("\n          "+t._s(e.title)+"\n        ")])})),1),t._v(" "),r("a",{staticClass:"text-gray-700 ml-2 rounded-full",attrs:{href:"https://github.com/rwaness/vuapix",target:"_blank",rel:"noopener noreferrer"}},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])])])],1)])}),[],!1,null,null,null).exports,l=(r(54),r(16),r(18),r(7),r(34),r(35),r(36),r(15));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"NavSideBar",computed:{open:function(){return this.$store.getters["nav/open"]},drawer:function(){return this.$store.getters["nav/drawer"]},version:function(){return this.$store.getters.version},tree:function(){var t=this;return this.$store.getters["nav/tree"].map((function(e){return d(d({},e),{},{active:t.$route.path.startsWith(e.slug.split("/").slice(0,2).join("/"))})}))}},watch:{drawer:function(t){this.$el.scrollTop=0,document.getElementById("scroll-container").classList.toggle("backdrop",t)}},methods:{toggleDrawer:function(t){this.$store.dispatch("nav/toggleDrawer",t)},onClick:function(t){t.target.href&&this.toggleDrawer(!1)}}},h=(r(182),{name:"NavFooter",computed:{tree:function(){return this.$store.getters["nav/tree"]}}}),m={components:{NavHeader:c,NavSideBar:Object(o.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{class:["hidden",{"md:block":t.open,drawer:t.drawer},"w-64 bg-white border-r-2 divide-y-2"],on:{click:t.onClick}},[r("div",{staticClass:"mx-4 py-2 flex justify-center"},[r("span",{},[t._v("v"+t._s(t.version))])]),t._v(" "),t._l(t.tree,(function(e,n){return r("div",{key:"chapter-"+n,staticClass:"mx-4 py-4"},[r("nuxt-link",{staticClass:"flex justify-center",attrs:{to:e.slug}},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.active?t._l(e.children,(function(e,o){return r("div",{key:"sub-chapter-"+n+"-"+o,staticClass:"mt-4 p-2 bg-gray-200"},[r("div",{staticClass:"py-2 flex text-gray-600"},[r("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),r("span",{staticClass:"ml-4 font-medium"},[t._v(t._s(e.title))])]),t._v(" "),r("ul",{staticClass:"ml-8"},t._l(e.children,(function(article,i){return r("li",{key:"article-"+n+"-"+o+"-"+i},[r("nuxt-link",{staticClass:"block py-2 text-sm text-gray-600",attrs:{to:article.slug}},[t._v("\n              "+t._s(article.title)+"\n            ")])],1)})),0)])})):t._e()],2)}))],2)}),[],!1,null,null,null).exports,NavFooter:Object(o.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"text-gray-700 body-font border-t-2"},[r("div",{staticClass:"container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"},[r("div",{staticClass:"w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"},[r("nuxt-link",{staticClass:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",attrs:{to:"/"}},[r("svg",{staticClass:"w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"}})]),t._v(" "),r("span",{staticClass:"ml-3 text-xl"},[t._v("Vuapix")])]),t._v(" "),r("p",{staticClass:"mt-2 text-sm text-gray-500"},[t._v("The headless state managmer to handle API calls easily!")])],1),t._v(" "),r("div",{staticClass:"flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"},t._l(t.tree,(function(e,n){return r("div",{key:"footer-"+n,staticClass:"lg:w-1/4 md:w-1/2 w-full px-4"},[r("h2",{staticClass:"title-font font-medium text-gray-900 tracking-widest text-sm mb-3"},[r("nuxt-link",{attrs:{to:e.slug}},[t._v(t._s(e.title))])],1),t._v(" "),r("nav",{staticClass:"list-none mb-10"},[r("ul",t._l(e.children,(function(e,o){return r("li",{key:"footer-link-"+n+"-"+o},[r("nuxt-link",{staticClass:"text-gray-600 hover:text-gray-800",attrs:{to:e.slug}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)})),0)])])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-200"},[e("div",{staticClass:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row sm:justify-center"},[e("p",{staticClass:"text-gray-500 text-sm text-center sm:text-left"},[this._v("© 2020 vuapix —\n        "),e("a",{staticClass:"text-gray-600 ml-1",attrs:{href:"https://github.com/rwaness",target:"_blank",rel:"noopener noreferrer"}},[this._v("@rwaness")])])])])}],!1,null,null,null).exports}},x=(r(184),Object(o.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-screen w-full overflow-x-hidden",attrs:{id:"scroll-container"}},[r("nav-header"),t._v(" "),r("div",{staticClass:"container h-full mx-auto -mt-20 pt-20 flex flex-col"},[r("div",{staticClass:"flex-1 flex"},[r("nav-side-bar"),t._v(" "),r("nuxt-child",{staticClass:"px-4 py-2 flex-1"})],1),t._v(" "),r("nav-footer")],1),t._v(" "),r("div",{staticClass:"backdrop-layer hidden",on:{click:function(e){return t.$store.dispatch("clickBackdrop")}}})],1)}),[],!1,null,null,null));e.a=x.exports},138:function(t,e,r){t.exports=r(139)},182:function(t,e,r){"use strict";r(115)},183:function(t,e,r){(e=r(37)(!1)).push([t.i,".drawer{display:block;position:fixed;z-index:50;bottom:0;overflow-y:auto;top:64px}",""]),t.exports=e},184:function(t,e,r){"use strict";r(116)},185:function(t,e,r){(e=r(37)(!1)).push([t.i,"h1{font-size:1.5rem}h2{font-size:1.25rem}h3{font-size:1.125rem}a{--text-opacity:1;color:#3182ce;color:rgba(49,130,206,var(--text-opacity))}#scroll-container{min-width:320px}#scroll-container.backdrop{position:relative;overflow-y:hidden}#scroll-container.backdrop .backdrop-layer{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:40;--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity));--bg-opacity:0.25}",""]),t.exports=e},186:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"getters",(function(){return f})),r.d(e,"actions",(function(){return d})),r.d(e,"mutations",(function(){return v}));r(23);var n=r(2),o=(r(36),r(130)),c=r(69),l=function(){return{version:"",articles:[],currentSlug:"/"}},f={version:function(t){return t.version},articles:function(t){return t.articles},currentSlug:function(t){return t.currentSlug},articleBySlug:function(t,e){return function(t){var r=e.articles.filter((function(article){return article.slug.startsWith(t)}));return 1===r.length?r[0]:r.sort((function(t,e){return t.order<e.order?-1:1})).shift()}}},d={nuxtServerInit:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,l=e.$content,n("setVersion",o.version),r.next=5,l("/",{deep:!0}).only(["path"]).fetch();case 5:f=r.sent,n("setArticles",f.map(c.b));case 7:case"end":return r.stop()}}),r)})))()},initIndexPage:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,r("nav/toggle",!1);case 3:case"end":return e.stop()}}),e)})))()},initDocPage:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,o=t.dispatch,c=e.slug,n("setCurrentSlug",c),r.next=5,o("nav/toggle",!0);case 5:case"end":return r.stop()}}),r)})))()},clickBackdrop:function(t){(0,t.dispatch)("nav/toggleDrawer",!1)}},v={setVersion:function(t,e){t.version=e},setArticles:function(t,e){t.articles=e},setCurrentSlug:function(t,e){t.currentSlug=e}}},187:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return f})),r.d(e,"mutations",(function(){return d}));var n=r(44),o=r(69),c=function(){return{open:!0,drawer:!1}},l={open:function(t){return t.open},drawer:function(t){return t.drawer},articles:function(t,e,r,o){return Object(n.a)(o.articles).sort((function(t,e){return t.pos<e.pos?-1:1}))},tree:function(t,e){return Object(o.a)(e.articles)}},f={toggle:function(t,e){var r=t.commit,n=t.getters;r("toggle",void 0===e?!n.open:e)},toggleDrawer:function(t,e){var r=t.commit,n=t.getters;r("toggleDrawer",void 0===e?!n.drawer:e)}},d={toggle:function(t,e){t.open=e},toggleDrawer:function(t,e){t.drawer=e}}},69:function(t,e,r){"use strict";r.d(e,"b",(function(){return v})),r.d(e,"a",(function(){return h}));r(54),r(16),r(18),r(7),r(34),r(36);var n=r(15),o=(r(12),r(30)),c=r(91);r(35);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){return t.split("-").map((function(t){var e=Object(c.a)(t),r=e[0],n=e.slice(1);return"".concat(r.toUpperCase()).concat(n.join(""))})).join(" ")}function v(article){var t=article.path.substr(1).split("/").reduce((function(t,e){var r="index"===e?[0,e]:e.split("."),n=Object(o.a)(r,2),c=n[0],l=n[1];return{name:"/".concat(l),pos:"".concat(t.pos?"".concat(t.pos,"."):"").concat(c),slug:"".concat(t.slug).concat("index"!==l?"/".concat(l):""),title:"index"!==l?d(l):t.title}}),{slug:""}),e=t.name,r=t.pos,n=t.slug;return f(f({title:t.title},article),{},{name:e,pos:r,slug:n})}function h(t){var e=Object(c.a)(t).slice(0),r="";return e.sort((function(t,e){return t.pos<e.pos?-1:1})).reduce((function t(e,article,n,o){if(article.pos.startsWith(r.substr(1))){var c=r.split(".").length,l=article.pos.split("."),f=l[c-1];if(!e[f]){var v=article.slug.split("/");c===l.length?e[f]=article:(r="".concat(r,".").concat(f),e[f]={title:d(v[c]),slug:article.slug,children:o.reduce(t,[]).filter(Boolean)},r=r.split(".").slice(0,-1).join("."))}}return e}),[]).filter(Boolean)}}},[[138,4,1,5]]]);