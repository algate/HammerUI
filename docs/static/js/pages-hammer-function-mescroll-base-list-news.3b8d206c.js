(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-function-mescroll-base-list-news"],{6292:function(n,t,e){"use strict";e.r(t);var a=e("b851"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"725e":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*说明*/.notice[data-v-0e7415e0]{font-size:%?30?%;padding:%?40?% 0;border-bottom:%?1?% solid #eee;text-align:center}\n/*展示上拉加载的数据列表*/.news-li[data-v-0e7415e0]{font-size:%?32?%;padding:%?32?%;border-bottom:%?1?% solid #eee}.news-li .new-content[data-v-0e7415e0]{font-size:%?28?%;margin-top:%?10?%;margin-left:%?20?%;color:#666}",""]),n.exports=t},"743c":function(n,t,e){var a=e("725e");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("7711592e",a,!0,{sourceMap:!1,shadowMode:!1})},b851:function(n,t,e){"use strict";var a=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("99af");var i=a(e("f05e")),o={components:{MescrollUni:i.default},data:function(){return{downOption:{auto:!1},dataList:[]}},methods:{downCallback:function(n){var t=this;this.getListDataFromNet(0,1,(function(e){n.endSuccess(),t.dataList.unshift(e[0])}),(function(){n.endErr()}))},upCallback:function(n){var t=this;this.getListDataFromNet(n.num,n.size,(function(e){console.log("mescroll.num="+n.num+", mescroll.size="+n.size+", curPageData.length="+e.length),n.endSuccess(e.length),t.dataList=t.dataList.concat(e)}),(function(){n.endErr()}))},getListDataFromNet:function(n,t,e,a){setTimeout((function(){try{var i=[];if(0==n){var o=(new Date).getTime(),c={id:o,title:"【新增新闻"+o+"】 标题",content:"新增新闻的内容"};i.push(c)}else for(var s=0;s<t;s++){var r=(n-1)*t+s+1,u={id:r,title:"【新闻"+r+"】 标题标题标题标题标题",content:"内容内容内容内容内容内容内容内容内容"};i.push(u)}e&&e(i)}catch(l){a&&a()}}),1e3)}}};t.default=o},c0fa:function(n,t,e){"use strict";var a=e("743c"),i=e.n(a);i.a},cdb8:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={mescrollUni:e("f05e").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("mescroll-uni",{attrs:{down:n.downOption},on:{down:function(t){arguments[0]=t=n.$handleEvent(t),n.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=n.$handleEvent(t),n.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"notice"},[n._v("本Demo的下拉刷新: 添加新数据到列表顶部")]),n._l(n.dataList,(function(t){return e("v-uni-view",{key:t.id,staticClass:"news-li"},[e("v-uni-view",[n._v(n._s(t.title))]),e("v-uni-view",{staticClass:"new-content"},[n._v(n._s(t.content))])],1)}))],2)},o=[]},ece5:function(n,t,e){"use strict";e.r(t);var a=e("cdb8"),i=e("6292");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("c0fa");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"0e7415e0",null,!1,a["a"],c);t["default"]=r.exports}}]);