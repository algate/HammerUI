(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo5"],{"193c":function(n,e,t){"use strict";t.r(e);var a=t("77ee"),o=t("47a8");for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);var l=t("2877"),i=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"47a8":function(n,e,t){"use strict";t.r(e);var a=t("f86a"),o=t.n(a);for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);e["default"]=o.a},"77ee":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-button",{on:{click:function(e){e=n.$handleEvent(e),n.handleTap(e)}}},[n._v("插槽自定义选择器头部")]),t("v-uni-view",[n._v(n._s(n.value))]),t("lb-picker",{ref:"picker",attrs:{mode:"selector",list:n.list},on:{change:function(e){e=n.$handleEvent(e),n.handleChange(e)},confirm:function(e){e=n.$handleEvent(e),n.handleConfirm(e)},cancle:function(e){e=n.$handleEvent(e),n.handleCancle(e)}},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}},[t("uni-icons",{attrs:{slot:"cancle-text",type:"closeempty"},slot:"cancle-text"}),t("v-uni-view",{attrs:{slot:"action-center"},slot:"action-center"},[n._v("中间自定义")]),t("uni-icons",{attrs:{slot:"confirm-text",type:"checkmarkempty"},slot:"confirm-text"})],1),t("v-uni-view",[n._v("自定义后参数cancleColor、confirmColor将失效")])],1)},o=[];t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return o}))},f86a:function(n,e,t){"use strict";var a=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("976b")),c={components:{LbPicker:o.default},data:function(){return{value:"",label:"",list:[]}},created:function(){for(var n=[],e=1;e<20;e++)n.push({label:"选项".concat(e),value:e});this.list=n},methods:{handleTap:function(){this.$refs.picker.show()},handleChange:function(n){console.log("change::",n)},handleConfirm:function(n){this.label=n.item.label,console.log("confirm::",n)},handleCancle:function(n){console.log("cancle::",n)}}};e.default=c}}]);