(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo11"],{"550e":function(e,l,a){"use strict";var n=a("4ea4");Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=n(a("976b")),t={components:{LbPicker:u.default},data:function(){return{value1:"",value2:[],list1:[],list2:[],loading1:!0,loading2:!0}},created:function(){},methods:{getList1:function(){var e=this;setTimeout((function(){for(var l=[],a=1;a<20;a++)l.push({label:"选项".concat(a),value:a});e.list1=l,e.loading1=!1}),2e3)},getList2:function(){var e=this;setTimeout((function(){e.list2=[{label:"选项1",value:"1",children:[{label:"选项11",value:"11",children:[{label:"选项111",value:"111"},{label:"选项112",value:"112"},{label:"选项113",value:"113"}]},{label:"选项12",value:"12",children:[{label:"选项121",value:"121"},{label:"选项122",value:"122"},{label:"选项123",value:"123"}]},{label:"选项13",value:"13",children:[{label:"选项131",value:"131"},{label:"选项132",value:"132"},{label:"选项133",value:"133"}]}]},{label:"选项2",value:"2",children:[{label:"选项21",value:"21",children:[{label:"选项211",value:"211"},{label:"选项212",value:"212"},{label:"选项213",value:"213"}]},{label:"选项22",value:"22",children:[{label:"选项221",value:"221"},{label:"选项222",value:"222"},{label:"选项223",value:"223"}]},{label:"选项23",value:"23",children:[{label:"选项231",value:"231"},{label:"选项232",value:"232"},{label:"选项233",value:"233"}]}]},{label:"选项3",value:"3",children:[{label:"选项31",value:"31",children:[{label:"选项311",value:"311"},{label:"选项312",value:"312"},{label:"选项313",value:"313"}]},{label:"选项32",value:"32",children:[{label:"选项321",value:"321"},{label:"选项322",value:"322"},{label:"选项323",value:"323"}]},{label:"选项33",value:"33",children:[{label:"选项331",value:"331"},{label:"选项332",value:"332"},{label:"选项333",value:"333"}]}]}],e.loading2=!1}),2e3)},handleTap:function(e){this.$refs[e].show()},handleChange:function(e){console.log("change::",e)},handleConfirm:function(e){this.label=e.item.label,console.log("confirm::",e)},handleCancle:function(e){console.log("cancle::",e)}}};l.default=t},"697c":function(e,l,a){"use strict";a.r(l);var n=a("dd52"),u=a("6b85");for(var t in u)"default"!==t&&function(e){a.d(l,e,(function(){return u[e]}))}(t);var i=a("2877"),o=Object(i["a"])(u["default"],n["a"],n["b"],!1,null,null,null);l["default"]=o.exports},"6b85":function(e,l,a){"use strict";a.r(l);var n=a("550e"),u=a.n(n);for(var t in n)"default"!==t&&function(e){a.d(l,e,(function(){return n[e]}))}(t);l["default"]=u.a},dd52:function(e,l,a){"use strict";var n=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("v-uni-view",[a("v-uni-button",{on:{click:function(l){l=e.$handleEvent(l),e.handleTap("picker1")}}},[e._v("插槽自定义loading")]),a("v-uni-view",[e._v(e._s(e.value1))]),a("lb-picker",{ref:"picker1",attrs:{mode:"selector",list:e.list1,loading:e.loading1},on:{show:function(l){l=e.$handleEvent(l),e.getList1(l)},change:function(l){l=e.$handleEvent(l),e.handleChange(l)},confirm:function(l){l=e.$handleEvent(l),e.handleConfirm(l)},cancle:function(l){l=e.$handleEvent(l),e.handleCancle(l)}},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}},[a("v-uni-view",{attrs:{slot:"loading"},slot:"loading"},[e._v("加载中")])],1),a("v-uni-button",{on:{click:function(l){l=e.$handleEvent(l),e.handleTap("picker2")}}},[e._v("异步加载数据2")]),a("v-uni-view",[e._v(e._s(e.value2))]),a("lb-picker",{ref:"picker2",attrs:{mode:"multiSelector",level:3,list:e.list2,loading:e.loading2},on:{show:function(l){l=e.$handleEvent(l),e.getList2(l)},change:function(l){l=e.$handleEvent(l),e.handleChange(l)},confirm:function(l){l=e.$handleEvent(l),e.handleConfirm(l)},cancle:function(l){l=e.$handleEvent(l),e.handleCancle(l)}},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}})],1)},u=[];a.d(l,"a",(function(){return n})),a.d(l,"b",(function(){return u}))}}]);