(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo1"],{"3ac7":function(n,e,a){"use strict";a.r(e);var l=a("f9eb"),t=a.n(l);for(var i in l)["default"].indexOf(i)<0&&function(n){a.d(e,n,(function(){return l[n]}))}(i);e["default"]=t.a},"7d6d":function(n,e,a){"use strict";var l;a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l}));var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-uni-view",[a("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.handleTap.apply(void 0,arguments)}}},[n._v("点我弹出选择器")]),a("v-uni-view",[n._v(n._s(n.value))]),a("v-uni-view",[n._v(n._s(n.label))]),a("lb-picker",{ref:"picker",attrs:{mode:"selector",list:n.list},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.handleChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=n.$handleEvent(e),n.handleConfirm.apply(void 0,arguments)},cancle:function(e){arguments[0]=e=n.$handleEvent(e),n.handleCancle.apply(void 0,arguments)}},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)},i=[]},f4f7:function(n,e,a){"use strict";a.r(e);var l=a("7d6d"),t=a("3ac7");for(var i in t)["default"].indexOf(i)<0&&function(n){a.d(e,n,(function(){return t[n]}))}(i);var o,u=a("f0c5"),c=Object(u["a"])(t["default"],l["b"],l["c"],!1,null,null,null,!1,l["a"],o);e["default"]=c.exports},f9eb:function(n,e,a){"use strict";var l=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(a("976b")),i={components:{LbPicker:t.default},data:function(){return{value:"",label:"",list:[{label:"选项一",value:"A"},{label:"选项二",value:"B"}]}},methods:{handleTap:function(){this.$refs.picker.show()},handleChange:function(n){console.log("change::",n)},handleConfirm:function(n){this.label=n.item.label,console.log("confirm::",n)},handleCancle:function(n){console.log("cancle::",n)}}};e.default=i}}]);