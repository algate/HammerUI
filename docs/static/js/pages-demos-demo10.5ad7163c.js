(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo10"],{"1e5e":function(n,e,o){"use strict";o.r(e);var t=o("f51b"),a=o("6012");for(var l in a)"default"!==l&&function(n){o.d(e,n,(function(){return a[n]}))}(l);var i=o("2877"),c=Object(i["a"])(a["default"],t["a"],t["b"],!1,null,null,null);e["default"]=c.exports},6012:function(n,e,o){"use strict";o.r(e);var t=o("d3ac"),a=o.n(t);for(var l in t)"default"!==l&&function(n){o.d(e,n,(function(){return t[n]}))}(l);e["default"]=a.a},d3ac:function(n,e,o){"use strict";var t=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(o("976b")),l={components:{LbPicker:a.default},data:function(){return{value:"",label:"",list:[{label:"选项一",value:"A"},{label:"选项二",value:"B"}]}},methods:{handleTap:function(){this.$refs.picker.show()},handleChange:function(n){console.log("change::",n),uni.showToast({title:"change-".concat(n.value),icon:"none"})},handleConfirm:function(n){console.log("confirm::",n),uni.showToast({title:"confirm-".concat(n.value),icon:"none"})},handleCancle:function(n){console.log("cancle::",n),uni.showToast({title:"cancle",icon:"none"})},handleShow:function(){console.log("show"),uni.showToast({title:"show",icon:"none"})},handleHide:function(){console.log("hide"),uni.showToast({title:"hide",icon:"none"})}}};e.default=l},f51b:function(n,e,o){"use strict";var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("v-uni-view",[o("v-uni-button",{on:{click:function(e){e=n.$handleEvent(e),n.handleTap(e)}}},[n._v("点我弹出选择器")]),o("v-uni-view",[n._v(n._s(n.value))]),o("v-uni-view",[n._v("默认初始化的时候会触发change")]),o("lb-picker",{ref:"picker",attrs:{mode:"selector",list:n.list},on:{change:function(e){e=n.$handleEvent(e),n.handleChange(e)},confirm:function(e){e=n.$handleEvent(e),n.handleConfirm(e)},cancle:function(e){e=n.$handleEvent(e),n.handleCancle(e)},show:function(e){e=n.$handleEvent(e),n.handleShow(e)},hide:function(e){e=n.$handleEvent(e),n.handleHide(e)}},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)},a=[];o.d(e,"a",(function(){return t})),o.d(e,"b",(function(){return a}))}}]);