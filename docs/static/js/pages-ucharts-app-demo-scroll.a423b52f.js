(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-app-demo-scroll"],{"0122":function(n,t,i){"use strict";function e(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.default=e=function(n){return typeof n}:t.default=e=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e,i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0")},"0250":function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-scroll-view",{staticStyle:{height:"400upx"},attrs:{"scroll-y":"true"},on:{scroll:function(t){arguments[0]=t=n.$handleEvent(t),n.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{height:"400upx"}},[e("v-uni-image",{staticStyle:{width:"750upx",height:"400upx"},attrs:{src:i("4962")}})],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[e("v-uni-text",[n._v("pages/basic/column/column")])],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("基本柱状图")])],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchColumn.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[e("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),e("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),e("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)],1)},o=[]},2474:function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-037da9d3]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-037da9d3]{width:%?750?%;height:%?500?%;background-color:#fff}",""]),n.exports=t},4962:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADICAMAAAAOYPdeAAAAb1BMVEVHcEwuwlorwlguw1ofocouwloqxlotwlofocYtwlsuwlouwlouwlovwVouwlosw1otxFotw1ofosUuwlouw1suwlstwWAvwlsYkP8Zk/Qtv2Ybl+crunUip7McmtwotoUnspIgosEjq6klrp0dndEXQPV7AAAAF3RSTlMAQRdnwPQOdraB6NuozLgzJ1e1mE3Fi0PhxTAAAAO9SURBVHja7drneptAEIVhIwKYKikqM3RU7v8a88POE8e2LMrMihXnvQJ/3sKy6OUFAAAAAAAAAAAAYHl8xw2TLI0j8uI0S47B+qlrt7uUvjoct/5T9u4Tj27Kni56dYzoZ17yTPPbSaiPZPMkvZuM+tqtnmE+72gAz7U+2PVomMTuLWyV0WCRY/OOFdEYgbXBIY2UWHrCOtBoqY179jqmCSL7Hs2OR5NEtp3A9jSVZ1eyS9N5zsKCichZWrD0KPvbuQcTeXvJvysLZh8sO7FdrbPcXjJYcMdea51eN55osdhRxI+Viv2YhEUiB04/1XpDyUhcvBIKVikOieaY/BasUewQzTH571KTL15FNMfkTax203AgLfGEHXvrqd2thKRn/ENqp3eb5JCmkWfsVap3f+ZHpGvETbYfeIo3hjvSNvi+bxtp3pHuSd+w+z4nVb0VXnkGiod8o9kelO/BEzIj7bVnr8JI++bfIWN2994f/W1i4FtHTAal7u2PcU54MPJ1JyDDsq8/mNns3V3mGfqeZWbb+ryLZckx2Dp7Nwh3SdZrkgXWbVtTiRWvaWnFh6UV72lpxfHSil1aWLHvLa141MVHUbXd5Xy+dG1V2FY8dIirrr6WOX+QX+u2sKh4yBC35+t/rR+UdWVJcf8hbk+3at9dOyuKew5xcS75vrwuZl/cb4iLOud+8svciwPRXmbmsp13cdhjPg/pZWY+FVYXD+5l5ry1t7gqeZTa1uKaxyorG4vHDvDbzO7sKz7zNLVlxcWVp2oKm4qrnKeTX8x6xRcWIf6YUis+sZTOjuIryzmLFocqxUXDkiS37PZVo1g4mPkkFlyUGsVFyTzX5BP/li8WH2HB5I5ZfowVRpiZ+SpxFilyhWKVEZY6fjWsUKwVzFwW0xexQvGV9Uw9cb69uArvXCfWlE9Kfj/2yo5xzbqmHLI7Vii+sLrRyS0rFFdsQDdthEWLi9xEMY+6v/9wGSNY3LAZ55GPJfHimk2ppwTLPZ06NmfY8evTfarUGBtaxCOeUp/vU6WKGzar78yuvvxhQrO6ZtOaXuevbz55yRS3/AD39+zLd0tNpNjsIv43zD+v5u77F3WRdXziB2lunsDa+tbFhERxx49TXr6u5+LHH9gIzOpjzg9V1m314adipzuPDYHiXzwDedk0Zd7nf/8sxf29ohjFKEYxilGMYhSjGMUoRjGKUYxiFKMYxShGMYpRjGIUoxjFKEYxilGMYhQDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWOcP/nl3hyudhlQAAAAASUVORK5CYII="},"66df":function(n,t,i){"use strict";i.r(t);var e=i("f6ee"),a=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},"6c65":function(n,t,i){var e=i("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=e(t)||!t)}catch(i){return console.log("error："+n+"!!!"+i),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},be88:function(n,t,i){"use strict";var e=i("e822"),a=i.n(e);a.a},e822:function(n,t,i){var e=i("2474");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("83adffcc",e,!0,{sourceMap:!1,shadowMode:!1})},f3b6:function(n,t,i){"use strict";i.r(t);var e=i("0250"),a=i("66df");for(var o in a)["default"].indexOf(o)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("be88");var u,s=i("f0c5"),r=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"037da9d3",null,!1,e["a"],u);t["default"]=r.exports},f6ee:function(n,t,i){"use strict";var e=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(i("0122"));i("b680");var o,u=e(i("af1e")),s=i("6c65"),r=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:"",scrollTop:0}},onLoad:function(){o=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={categories:[],series:[]};t.categories=n.data.data.ColumnB.categories,t.series=n.data.data.ColumnB.series,o.textarea=JSON.stringify(n.data.data.ColumnB),o.showColumn("canvasColumn",t)},fail:function(){o.tips="网络错误，小程序端请检查合法域名"}})},scroll:function(n){this.scrollTop=n.detail.scrollTop},showColumn:function(n,t){r=new u.default({$this:o,canvasId:n,type:"column",padding:[15,5,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:o.pixelRatio,animation:!0,categories:t.categories,series:t.series,xAxis:{disableGrid:!0},yAxis:{data:[{position:"right",axisLine:!1,format:function(n){return n.toFixed(0)+"元"}}]},dataLabel:!0,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,extra:{column:{type:"group",width:o.cWidth*o.pixelRatio*.45/t.categories.length}}})},touchColumn:function(n){r.showToolTip(n,{format:function(n,t){return"object"===(0,a.default)(n.data)?t+" "+n.name+":"+n.data.value:t+" "+n.name+":"+n.data}}),r.touchLegend(n,{animation:!0})},changeData:function(){if((0,s.isJSON)(o.textarea)){var n=JSON.parse(o.textarea);r.updateData({series:n.series,categories:n.categories,animation:!0})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=c}}]);