(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-word-word"],{"5b56":function(n,t,e){t=n.exports=e("24fb")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-d322d400]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-d322d400]{width:%?750?%;height:%?500?%;background-color:#fff}",""])},6788:function(n,t,e){var i=e("5b56");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("dd9262f4",i,!0,{sourceMap:!1,shadowMode:!1})},"6c65":function(n,t,e){"use strict";var i=e("4ea4"),a=i(e("7618"));n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=(0,a.default)(t)||!t)}catch(e){return console.log("error："+n+"!!!"+e),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},8264:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[e("v-uni-text",[n._v("pages/basic/word/word")])],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("词云图")])],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasWord",id:"canvasWord"},on:{touchstart:function(t){t=n.$handleEvent(t),n.touchWord(t)}}})],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[e("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),e("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),e("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},a=[];e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return a}))},"933c":function(n,t,e){"use strict";e.r(t);var i=e("8264"),a=e("dcbf");for(var s in a)"default"!==s&&function(n){e.d(t,n,(function(){return a[n]}))}(s);e("f990");var u=e("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"d322d400",null);t["default"]=r.exports},c1b7:function(n,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=i(e("af1e")),u=e("6c65"),r=null,o={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){a=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={series:[]};t.series=[{name:"跨全端图表",textSize:25},{name:"微信小程序",textSize:20},{name:"支付宝小程序",textSize:20},{name:"百度小程序",textSize:20},{name:"QQ小程序",textSize:20},{name:"头条小程序",textSize:20},{name:"抖音小程序",textSize:20},{name:"360小程序",textSize:20},{name:"跨全端",textSize:10},{name:"跨全端",textSize:12},{name:"跨全端",textSize:10},{name:"跨全端",textSize:12},{name:"跨全端",textSize:10},{name:"跨全端",textSize:12},{name:"跨全端",textSize:10},{name:"跨全端",textSize:12}],a.textarea=JSON.stringify(t),a.showWord("canvasWord",t)},fail:function(){a.tips="网络错误，小程序端请检查合法域名"}})},showWord:function(n,t){r=new s.default({$this:a,canvasId:n,type:"word",background:"#000000",animation:!0,pixelRatio:a.pixelRatio,series:t.series,width:a.cWidth*a.pixelRatio,height:a.cHeight*a.pixelRatio,extra:{word:{type:"normal"}}})},touchWord:function(n){r.showToolTip(n,{format:function(n){return n.name}})},changeData:function(){if((0,u.isJSON)(a.textarea)){var n=JSON.parse(a.textarea);r.updateData({series:n.series})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})},saveImage:function(){uni.canvasToTempFilePath({canvasId:r.opts.canvasId,success:function(n){console.log(n.tempFilePath)}})}}};t.default=o},dcbf:function(n,t,e){"use strict";e.r(t);var i=e("c1b7"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,(function(){return i[n]}))}(s);t["default"]=a.a},f990:function(n,t,e){"use strict";var i=e("6788"),a=e.n(i);a.a}}]);