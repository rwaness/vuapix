(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("7c19c696",content,!0,{sourceMap:!1})},194:function(t,e,n){"use strict";n(193)},195:function(t,e,n){(e=n(45)(!1)).push([t.i,".guide{grid-column:span 3/span 3}.guide .article{display:flex;flex-direction:row-reverse}.guide .article .article-content{flex:1 1 0%}.guide .article .article-content .nuxt-content .nuxt-content-highlight{position:relative}.guide .article .article-content .nuxt-content .nuxt-content-highlight .filename{position:absolute;right:0;--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));font-weight:300;z-index:10;margin-right:.5rem;margin-top:.25rem;font-size:.875rem}",""]),t.exports=e},209:function(t,e,n){"use strict";n.r(e);n(23);var r=n(2),c={head:function(){return{title:this.article.title,description:this.article.description}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l,path,h,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$content,r=t.redirect,c=t.route,o=t.store,e.prev=1,l=o.getters.articleBySlug(c.path),path=l.path,(h=l.slug)===c.path){e.next=6;break}return r(301,h),e.abrupt("return");case 6:return e.next=8,n(path).fetch();case 8:return article=e.sent,e.abrupt("return",{slug:h,article:article});case 12:e.prev=12,e.t0=e.catch(1),console.error("Unexpected error : ",e.t0),r(404);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},created:function(){this.fixedFetch()},watch:{article:function(){this.fixedFetch()}},methods:{fixedFetch:function(){return this.$store.dispatch("initDocPage",{slug:this.$route.path})}}},o=(n(194),n(9)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"guide"},[n("h2",[t._v(t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"article"},[n("nav",{staticClass:"toc"},[n("ul",t._l(t.article.toc,(function(e){return n("li",{key:e.id},[n("nuxt-link",{attrs:{to:"#"+e.id}},[t._v(t._s(e.text))])],1)})),0)]),t._v(" "),n("article",{staticClass:"article-content"},[n("nuxt-content",{attrs:{document:t.article}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);