(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{195:function(t,e,r){"use strict";var n=r(6),l=r(134)(6),c="findIndex",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(74)(c)},196:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("7c19c696",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";r(196)},198:function(t,e,r){(e=r(47)(!1)).push([t.i,".article-content .nuxt-content .nuxt-content-highlight{position:relative}.article-content .nuxt-content .nuxt-content-highlight .filename{position:absolute;right:0;--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));font-weight:300;z-index:10;margin-right:.5rem;margin-top:.25rem;font-size:.875rem}",""]),t.exports=e},210:function(t,e,r){"use strict";r.r(e);r(23);var n=r(2),l=r(69),c=r(42),o=(r(35),r(36),r(133),{name:"NavBreadcrumb",computed:{breadcrumb:function(){var t=this;return function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=null==r?void 0:r.find((function(e){var r=e.slug;return t.$route.path.startsWith(r.split("/").slice(0,n+1).join("/"))}));return l?[l].concat(Object(c.a)(e(l.children,n+1))):[]}(this.$store.getters["nav/tree"])}}}),v=r(9),d=Object(v.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap"},t._l(t.breadcrumb,(function(e,n){return r("div",{key:"breadcrumb-"+n,staticClass:"flex items-center"},[r("nuxt-link",{staticClass:"truncate",attrs:{to:e.slug}},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),r("svg",{class:["w-5 h-5",{hidden:n===t.breadcrumb.length-1}],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])],1)})),0)}),[],!1,null,null,null).exports,f=(r(195),{name:"NavPrevNext",computed:{allArticles:function(){return this.$store.getters["nav/articles"]},currentArticleIndex:function(){var t=this;return this.allArticles.findIndex((function(e){var r=e.slug;return t.$route.path===r}))},previousArticle:function(){return this.allArticles[this.currentArticleIndex-1]},nextArticle:function(){return this.allArticles[this.currentArticleIndex+1]}}}),h={name:"DocArticle",components:{NavBreadcrumb:d,NavPrevNext:Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hidden sm:flex divide-x-2"},[t.previousArticle?r("div",{staticClass:"flex items-center ml-2"},[r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})]),t._v(" "),r("nuxt-link",{staticClass:"px-2 text-right",attrs:{to:t.previousArticle.slug}},[t._v("\n      "+t._s(t.previousArticle.title)+"\n    ")])],1):t._e(),t._v(" "),t.nextArticle?r("div",{staticClass:"flex items-center mr-2"},[r("nuxt-link",{staticClass:"px-2",attrs:{to:t.nextArticle.slug}},[t._v("\n      "+t._s(t.nextArticle.title)+"\n    ")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])],1):t._e()])}),[],!1,null,null,null).exports},head:function(){return{title:"".concat(this.article.title," | Vuapix"),description:this.article.description}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,v,path,d,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$content,n=t.redirect,c=t.route,o=t.store,e.prev=1,v=o.getters.articleBySlug(c.path),path=v.path,(d=v.slug)===c.path){e.next=6;break}return n(301,d),e.abrupt("return");case 6:return e.next=8,r(path).fetch();case 8:return article=e.sent,e.abrupt("return",{slug:d,article:Object(l.b)(article)});case 12:e.prev=12,e.t0=e.catch(1),console.error("Unexpected error : ",e.t0),n(404);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("initDocPage",{slug:t.$route.path});case 2:case"end":return e.stop()}}),e)})))()}},x=(r(197),Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"divide-y-2"},[r("div",{staticClass:"flex justify-between mb-4"},[r("nav-breadcrumb"),t._v(" "),r("nav-prev-next")],1),t._v(" "),r("div",{staticClass:"pt-4"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"flex flex-row-reverse"},[r("nav",{staticClass:"w-40 ml-4 p-2 bg-gray-200"},[r("span",[t._v("In this article :")]),t._v(" "),r("ul",t._l(t.article.toc,(function(e){return r("li",{key:e.id},[r("nuxt-link",{attrs:{to:"#"+e.id}},[t._v(t._s(e.text))])],1)})),0)]),t._v(" "),r("article",{staticClass:"article-content flex-1"},[r("nuxt-content",{attrs:{document:t.article}})],1)])])])}),[],!1,null,null,null));e.default=x.exports}}]);