(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-arcbar-mix"],{"1aba":function(n,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,s=i(a("af1e")),r=a("6c65"),u=null,c={data:function(){return{cWidth:"",cHeight:"",arcbarWidth:0,pixelRatio:1,textarea:""}},onReady:function(){e=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(340),this.arcbarWidth=uni.upx2px(26),this.getServerData()},methods:{getServerData:function(){var n={series:[{name:"分数",data:.85},{name:"排名",data:.8},{name:"排名",data:.75},{name:"排名",data:.7},{name:"排名",data:.65},{name:"排名",data:.6},{name:"排名",data:.55}]};this.textarea=JSON.stringify(n),this.showArea("canvasArea",n)},showArea:function(n,t){var a=this.arcbarWidth,i=this.cWidth/2-a,r=this.cHeight-a,c=(i*i+r*r)/r/2,o={x:this.cWidth/2*this.pixelRatio,y:(c+a)*this.pixelRatio};u=new s.default({$this:e,canvasId:n,type:"arcbar",fontSize:11,colors:["#FF0000","#FF7F00","#FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF"],legend:{show:!1},background:"#FFFFFF",pixelRatio:e.pixelRatio,series:t.series,animation:!0,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,extra:{arcbar:{type:"default",width:a*e.pixelRatio,backgroundColor:"rgba(233,233,233,0.4)",startAngle:.9999,endAngle:1e-4,radius:c*e.pixelRatio,gap:5*e.pixelRatio,center:o}}})},changeData:function(){if((0,r.isJSON)(e.textarea)){var n=JSON.parse(e.textarea);u.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=c},"2afa":function(n,t,a){"use strict";var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-text",[n._v("pages/basic/arcbar/mix")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("多重圆弧进度条")])],1),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"chartsa",attrs:{"canvas-id":"canvasArea",id:"canvasArea"}})],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),a("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),a("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},e=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return e}))},"45ed":function(n,t,a){t=n.exports=a("24fb")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-55ef21f3]{width:%?750?%;height:%?340?%;background:-webkit-linear-gradient(bottom,#28e5a0,#0bb7d6);background:linear-gradient(0deg,#28e5a0,#0bb7d6);background-size:100% 100%}.chartsa[data-v-55ef21f3]{width:%?750?%;height:%?340?%}",""])},"54d2":function(n,t,a){"use strict";a.r(t);var i=a("1aba"),e=a.n(i);for(var s in i)"default"!==s&&function(n){a.d(t,n,(function(){return i[n]}))}(s);t["default"]=e.a},"6c65":function(n,t,a){"use strict";var i=a("4ea4"),e=i(a("7618"));n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=(0,e.default)(t)||!t)}catch(a){return console.log("error："+n+"!!!"+a),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},a067:function(n,t,a){"use strict";a.r(t);var i=a("2afa"),e=a("54d2");for(var s in e)"default"!==s&&function(n){a.d(t,n,(function(){return e[n]}))}(s);a("e977");var r=a("2877"),u=Object(r["a"])(e["default"],i["a"],i["b"],!1,null,"55ef21f3",null);t["default"]=u.exports},e25b:function(n,t,a){var i=a("45ed");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("4f06").default;e("9651fd82",i,!0,{sourceMap:!1,shadowMode:!1})},e977:function(n,t,a){"use strict";var i=a("e25b"),e=a.n(i);e.a}}]);