(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("28b3fbaa",content,!0,{sourceMap:!1})},202:function(t,e,r){"use strict";r(200)},203:function(t,e,r){(e=r(36)(!1)).push([t.i,".article-content[data-v-4b793d46]  .nuxt-content-container{flex:1 1 0%}.article-content[data-v-4b793d46]  .nuxt-content-container .nuxt-content h2:not(:first-child){margin-top:2rem}.article-content[data-v-4b793d46]  .nuxt-content-container .nuxt-content .nuxt-content-highlight{position:relative;overflow-x:auto}.article-content[data-v-4b793d46]  .nuxt-content-container .nuxt-content .nuxt-content-highlight .filename{position:absolute;right:0;--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));z-index:10;margin:.5rem;font-size:.875rem}",""]),t.exports=e},217:function(t,e,r){"use strict";r.r(e);r(24);var n=r(2),l=r(45),c={name:"NavBreadcrumb",computed:{breadcrumb:function(){return this.$store.getters["nav/breadcrumb"]}}},o=r(7),d=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap"},t._l(t.breadcrumb,(function(e,n){return r("div",{key:"breadcrumb-"+n,staticClass:"flex items-center py-2"},[e.slug===t.breadcrumb[t.breadcrumb.length-1].slug?r("span",{staticClass:"truncate"},[t._v("\n      "+t._s(e.title)+"\n    ")]):r("nuxt-link",{staticClass:"truncate",attrs:{to:e.slug}},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),r("svg",{class:["w-5 h-5",{hidden:n===t.breadcrumb.length-1}],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])],1)})),0)}),[],!1,null,null,null).exports,v=(r(48),r(16),r(17),r(8),r(35),r(15)),f=r(31);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"NavPrevNext",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)("nav",["previousArticle","nextArticle"]))},h={name:"DocArticle",components:{NavBreadcrumb:d,NavPrevNext:Object(o.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex"},[t.previousArticle?r("nuxt-link",{staticClass:"flex items-center py-2",attrs:{to:t.previousArticle.slug}},[r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})]),t._v(" "),r("span",{staticClass:"px-2 text-right"},[t._v("\n      "+t._s(t.previousArticle.title)+"\n    ")])]):t._e(),t._v(" "),r("div",{class:["mx-auto my-2",{"border-l-2":t.previousArticle&&t.nextArticle}]}),t._v(" "),t.nextArticle?r("nuxt-link",{staticClass:"flex items-center py-2",attrs:{to:t.nextArticle.slug}},[r("span",{staticClass:"px-2"},[t._v("\n      "+t._s(t.nextArticle.title)+"\n    ")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):t._e()],1)}),[],!1,null,null,null).exports},head:function(){return{title:"".concat(this.article.title," | Vuapix"),description:this.article.description}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,d,path,v,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$content,n=t.redirect,c=t.route,o=t.store,e.prev=1,d=o.getters.articleBySlug(c.path),path=d.path,(v=d.slug)===c.path){e.next=6;break}return n(301,v),e.abrupt("return");case 6:return e.next=8,r(path).fetch();case 8:return article=e.sent,e.abrupt("return",{slug:v,article:Object(l.c)(article)});case 12:e.prev=12,e.t0=e.catch(1),console.error("Unexpected error : ",e.t0),n(404);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},mounted:function(){this.initPage()},updated:function(){this.initPage()},methods:{initPage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("initDocPage",t.$route);case 2:case"end":return e.stop()}}),e)})))()}}},w=(r(202),Object(o.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col overflow-y-hidden divide-y-2"},[r("div",{staticClass:"flex justify-between"},[r("nav-breadcrumb"),t._v(" "),r("nav-prev-next",{staticClass:"hidden md:flex ml-4"})],1),t._v(" "),r("div",{staticClass:"flex-1 pt-4 flex flex-col"},[r("h1",{staticClass:"mb-6"},[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"flex-1 flex flex-col items-start lg:flex-row-reverse items-stretch"},[t.article.toc.length>0?r("nav",{staticClass:"mb-6 px-2 pt-2 lg:w-48 lg:mb-4 lg:ml-4 rounded bg-green-100"},[r("div",{staticClass:"font-medium mb-2"},[t._v("Table of contents")]),t._v(" "),r("ul",{staticClass:"list-disc list-inside"},t._l(t.article.toc,(function(e){return r("li",{key:e.id,class:{"py-1":2===e.depth,"ml-2 pb-2":3===e.depth}},[r("nuxt-link",{attrs:{to:"#"+e.id}},[t._v(t._s(e.text))])],1)})),0)]):t._e(),t._v(" "),r("article",{staticClass:"article-content flex-1 flex flex-col"},[r("nuxt-content",{staticClass:"mb-4",attrs:{document:t.article}}),t._v(" "),r("nav-prev-next",{staticClass:"md:hidden border-t-2"})],1)])])])}),[],!1,null,"4b793d46",null));e.default=w.exports}}]);