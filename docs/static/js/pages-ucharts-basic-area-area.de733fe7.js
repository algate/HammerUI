(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-area-area"],{"0d0f":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-text",[n._v("pages/basic/area/area")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("基本区域图")])],1),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasArea",id:"canvasArea"},on:{touchstart:function(t){t=n.$handleEvent(t),n.touchArea(t)}}})],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),a("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),a("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},i=[];a.d(t,"a",(function(){return e})),a.d(t,"b",(function(){return i}))},"2b8e":function(n,t,a){"use strict";var e=a("641e"),i=a.n(e);i.a},"3fba":function(n,t,a){t=n.exports=a("24fb")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-95ba1444]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-95ba1444]{width:%?750?%;height:%?500?%;background-color:#fff}",""])},"641e":function(n,t,a){var e=a("3fba");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("7a8074aa",e,!0,{sourceMap:!1,shadowMode:!1})},"6c65":function(n,t,a){"use strict";var e=a("4ea4"),i=e(a("7618"));n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=(0,i.default)(t)||!t)}catch(a){return console.log("error："+n+"!!!"+a),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},"7e0c":function(n,t,a){"use strict";var e=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s=e(a("af1e")),r=a("6c65"),u=null,o={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={categories:[],series:[]};t.categories=n.data.data.Area.categories,t.series=n.data.data.Area.series,i.textarea=JSON.stringify(n.data.data.Area),i.showArea("canvasArea",t)},fail:function(){i.tips="网络错误，小程序端请检查合法域名"}})},showArea:function(n,t){u=new s.default({$this:i,canvasId:n,type:"area",fontSize:11,padding:[0,15,10,15],legend:{show:!0,position:"top",float:"center",itemGap:30,padding:5,lineHeight:18,margin:0},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!0,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8,splitNumber:5},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{area:{type:"curve",opacity:.2,addLine:!0,width:2,gradient:!1}}})},touchArea:function(n){u.touchLegend(n),u.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}})},changeData:function(){if((0,r.isJSON)(i.textarea)){var n=JSON.parse(i.textarea);u.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=o},"7f06":function(n,t,a){"use strict";a.r(t);var e=a("7e0c"),i=a.n(e);for(var s in e)"default"!==s&&function(n){a.d(t,n,(function(){return e[n]}))}(s);t["default"]=i.a},d782:function(n,t,a){"use strict";a.r(t);var e=a("0d0f"),i=a("7f06");for(var s in i)"default"!==s&&function(n){a.d(t,n,(function(){return i[n]}))}(s);a("2b8e");var r=a("2877"),u=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"95ba1444",null);t["default"]=u.exports}}]);