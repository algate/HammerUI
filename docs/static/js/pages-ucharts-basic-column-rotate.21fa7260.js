(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-column-rotate"],{"120b":function(n,t,a){"use strict";var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-text",[n._v("pages/basic/column/rotate")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("柱状图旋转")])],1),a("v-uni-view",{staticClass:"qiun-charts-rotate"},[a("v-uni-canvas",{staticClass:"charts-rotate",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn"},on:{touchstart:function(t){t=n.$handleEvent(t),n.touchColumn(t)}}})],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),a("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),a("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},e=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return e}))},"34fc":function(n,t,a){"use strict";a.r(t);var i=a("9ee8"),e=a.n(i);for(var s in i)"default"!==s&&function(n){a.d(t,n,(function(){return i[n]}))}(s);t["default"]=e.a},"4a22":function(n,t,a){"use strict";var i=a("6cf2"),e=a.n(i);e.a},"59ce":function(n,t,a){t=n.exports=a("24fb")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts-rotate[data-v-7ef3c176]{width:%?700?%;height:%?1100?%;background-color:#fff;padding:%?25?%}.charts-rotate[data-v-7ef3c176]{width:%?700?%;height:%?1100?%;background-color:#fff}",""])},"6c65":function(n,t,a){"use strict";var i=a("4ea4"),e=i(a("7618"));n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=(0,e.default)(t)||!t)}catch(a){return console.log("error："+n+"!!!"+a),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},"6cf2":function(n,t,a){var i=a("59ce");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("4f06").default;e("4f51679a",i,!0,{sourceMap:!1,shadowMode:!1})},"8ff9":function(n,t,a){"use strict";a.r(t);var i=a("120b"),e=a("34fc");for(var s in e)"default"!==s&&function(n){a.d(t,n,(function(){return e[n]}))}(s);a("4a22");var u=a("2877"),o=Object(u["a"])(e["default"],i["a"],i["b"],!1,null,"7ef3c176",null);t["default"]=o.exports},"9ee8":function(n,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,s=i(a("af1e")),u=a("6c65"),o=null,r={data:function(){return{cWidth2:"",cHeight2:"",pixelRatio:1,textarea:""}},onLoad:function(){e=this,this.cWidth2=uni.upx2px(700),this.cHeight2=uni.upx2px(1100),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={categories:[],series:[]};t.categories=n.data.data.ColumnB.categories,t.series=n.data.data.ColumnB.series,e.textarea=JSON.stringify(n.data.data.ColumnB),e.showColumnColumn("canvasColumn",t)},fail:function(){e.tips="网络错误，小程序端请检查合法域名"}})},showColumnColumn:function(n,t){o=new s.default({$this:e,canvasId:n,type:"column",padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:e.pixelRatio,animation:!1,rotate:!0,categories:t.categories,series:t.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:e.cWidth2*e.pixelRatio,height:e.cHeight2*e.pixelRatio,extra:{column:{type:"group",width:e.cWidth*e.pixelRatio*.45/t.categories.length,meter:{border:4,fillColor:"#E5FDC3"}}}})},touchColumn:function(n){o.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}})},changeData:function(){if((0,u.isJSON)(e.textarea)){var n=JSON.parse(e.textarea);o.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=r}}]);