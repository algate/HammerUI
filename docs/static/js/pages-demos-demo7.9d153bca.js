(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo7"],{"13fe":function(n,e,a){"use strict";var t;a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return t}));var l=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-uni-view",[a("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.handleTap.apply(void 0,arguments)}}},[n._v("点我弹出选择器")]),a("v-uni-view",[n._v(n._s(n.value))]),a("lb-picker",{ref:"picker",attrs:{mode:"selector",list:n.list,props:n.pickerProp},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.handleChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=n.$handleEvent(e),n.handleConfirm.apply(void 0,arguments)},cancle:function(e){arguments[0]=e=n.$handleEvent(e),n.handleCancle.apply(void 0,arguments)}},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)},i=[]},1944:function(n,e,a){"use strict";a.r(e);var t=a("6261"),l=a.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){a.d(e,n,(function(){return t[n]}))}(i);e["default"]=l.a},6261:function(n,e,a){"use strict";var t=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=t(a("976b")),i={components:{LbPicker:l.default},data:function(){return{value:"",pickerProp:{label:"name",value:"id"},list:[{id:1,name:"选项一"},{id:2,name:"选项二"}]}},methods:{handleTap:function(){this.$refs.picker.show()},handleChange:function(n){console.log("change::",n)},handleConfirm:function(n){this.label=n.item.label,console.log("confirm::",n)},handleCancle:function(n){console.log("cancle::",n)}}};e.default=i},"69ac":function(n,e,a){"use strict";a.r(e);var t=a("13fe"),l=a("1944");for(var i in l)["default"].indexOf(i)<0&&function(n){a.d(e,n,(function(){return l[n]}))}(i);var o,c=a("f0c5"),u=Object(c["a"])(l["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],o);e["default"]=u.exports}}]);