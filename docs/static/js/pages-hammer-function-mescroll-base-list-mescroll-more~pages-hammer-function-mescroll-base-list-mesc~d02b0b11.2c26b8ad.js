(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-function-mescroll-base-list-mescroll-more~pages-hammer-function-mescroll-base-list-mesc~d02b0b11"],{e90d:function(t,o,e){"use strict";var i=e("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=s;var n=i(e("7618"));function s(t){var o=this;o.version="1.1.8",o.options=t||{},o.isDownScrolling=!1,o.isUpScrolling=!1;var e=o.options.down&&o.options.down.callback;o.initDownScroll(),o.initUpScroll(),setTimeout((function(){o.optDown.use&&o.optDown.auto&&e&&(o.optDown.autoShowLoading?o.triggerDownScroll():o.optDown.callback&&o.optDown.callback(o)),o.optUp.use&&o.optUp.auto&&!o.isUpAutoLoad&&o.triggerUpScroll()}),30)}s.prototype.extendDownScroll=function(t){s.extend(t,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,offset:80,startTop:100,fps:40,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",inited:null,inOffset:null,outOffset:null,onMoving:null,beforeLoading:null,showLoading:null,afterLoading:null,endDownScroll:null,callback:function(t){t.resetUpScroll()}})},s.prototype.extendUpScroll=function(t){s.extend(t,{use:!0,auto:!0,isLock:!1,isBoth:!0,isBounce:!1,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:80,textLoading:"加载中 ...",textNoMore:"-- END --",inited:null,showLoading:null,showNoMore:null,hideUpScroll:null,toTop:{src:null,offset:1e3,duration:300,btnClick:null,onShow:null},empty:{use:!0,icon:null,tip:"~ 暂无相关数据 ~",btnText:"",btnClick:null,onShow:null},onScroll:!1})},s.extend=function(t,o){if(!t)return o;for(var e in o)if(null==t[e]){var i=o[e];null!=i&&"object"===(0,n.default)(i)?t[e]=s.extend({},i):t[e]=i}else"object"===(0,n.default)(t[e])&&s.extend(t[e],o[e]);return t},s.prototype.initDownScroll=function(){var t=this;t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.downHight=0,t.optDown.use&&t.optDown.inited&&setTimeout((function(){t.optDown.inited(t)}),0)},s.prototype.touchstartEvent=function(t){this.optDown.use&&(this.startPoint=this.getPoint(t),this.startTop=this.getScrollTop(),this.lastPoint=this.startPoint,this.maxTouchmoveY=this.getBodyHeight()-this.optDown.bottomOffset,this.inTouchend=!1)},s.prototype.touchmoveEvent=function(t){if(this.optDown.use&&this.startPoint){var o=this,e=(new Date).getTime();if(!(o.moveTime&&e-o.moveTime<o.moveTimeDiff)){o.moveTime=e,o.moveTimeDiff=1e3/o.optDown.fps;var i=o.getScrollTop(),n=o.getPoint(t),s=n.y-o.startPoint.y;if(s>0&&(i<=0||i<=o.optDown.startTop&&i===o.startTop)&&o.optDown.use&&!o.inTouchend&&!o.isDownScrolling&&!o.optDown.isLock&&(!o.isUpScrolling||o.isUpScrolling&&o.optUp.isBoth)){var p=Math.abs(o.lastPoint.x-n.x),l=Math.abs(o.lastPoint.y-n.y),r=Math.sqrt(p*p+l*l);if(0!==r){var h=Math.asin(l/r)/Math.PI*180;if(h<o.optDown.minAngle)return}if(o.maxTouchmoveY>0&&n.y>=o.maxTouchmoveY)return o.inTouchend=!0,void o.touchendEvent();o.preventDefault(t);var c=n.y-o.lastPoint.y;o.downHight<o.optDown.offset?(1!==o.movetype&&(o.movetype=1,o.optDown.inOffset&&o.optDown.inOffset(o),o.isMoveDown=!0),o.downHight+=c*o.optDown.inOffsetRate):(2!==o.movetype&&(o.movetype=2,o.optDown.outOffset&&o.optDown.outOffset(o),o.isMoveDown=!0),o.downHight+=c>0?Math.round(c*o.optDown.outOffsetRate):c);var u=o.downHight/o.optDown.offset;o.optDown.onMoving&&o.optDown.onMoving(o,u,o.downHight)}o.lastPoint=n}}},s.prototype.touchendEvent=function(t){if(this.optDown.use)if(this.isMoveDown)this.downHight>=this.optDown.offset?this.triggerDownScroll():(this.downHight=0,this.optDown.endDownScroll&&this.optDown.endDownScroll(this)),this.movetype=0,this.isMoveDown=!1;else if(this.getScrollTop()===this.startTop){var o=this.getPoint(t).y-this.startPoint.y<0;o&&this.triggerUpScroll(!0)}},s.prototype.getPoint=function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX,y:t.clientY}:{x:0,y:0}},s.prototype.triggerDownScroll=function(){this.optDown.beforeLoading&&this.optDown.beforeLoading(this)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},s.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.downHight=this.optDown.offset,this.optDown.showLoading(this,this.downHight)},s.prototype.endDownScroll=function(){var t=this,o=function(){t.downHight=0,t.isDownScrolling=!1,t.optDown.endDownScroll&&t.optDown.endDownScroll(t),t.setScrollHeight(0)},e=0;t.optDown.afterLoading&&(e=t.optDown.afterLoading(t)),"number"===typeof e&&e>0?setTimeout(o,e):o()},s.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},s.prototype.initUpScroll=function(){var t=this;t.optUp=t.options.up||{use:!1},t.extendUpScroll(t.optUp),t.optUp.isBounce||t.setBounce(!1),!1!==t.optUp.use&&(t.optUp.hasNext=!0,t.startNum=t.optUp.page.num+1,t.optUp.inited&&setTimeout((function(){t.optUp.inited(t)}),0))},s.prototype.scroll=function(t,o){this.setScrollTop(t.scrollTop),this.setScrollHeight(t.scrollHeight),null==this.preScrollY&&(this.preScrollY=0),this.isScrollUp=t.scrollTop-this.preScrollY>0,this.preScrollY=t.scrollTop,this.isScrollUp&&this.triggerUpScroll(!0),t.scrollTop>=this.optUp.toTop.offset?this.showTopBtn():this.hideTopBtn(),this.optUp.onScroll&&o&&o()},s.prototype.triggerUpScroll=function(t){if(!this.isUpScrolling&&this.optUp.use&&this.optUp.callback){if(!0===t){var o=!1;if(!this.optUp.hasNext||this.optUp.isLock||this.isDownScrolling||this.getScrollBottom()<=this.optUp.offset&&(o=!0),!1===o)return}this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.num=this.optUp.page.num,this.size=this.optUp.page.size,this.time=this.optUp.page.time,this.optUp.callback(this)}},s.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.optUp.showLoading&&this.optUp.showLoading(this)},s.prototype.showNoMore=function(){this.optUp.hasNext=!1,this.optUp.showNoMore&&this.optUp.showNoMore(this)},s.prototype.hideUpScroll=function(){this.optUp.hideUpScroll&&this.optUp.hideUpScroll(this)},s.prototype.endUpScroll=function(t){null!=t&&(t?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},s.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=this.startNum,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.num=o.num,this.size=o.size,this.time=o.time,this.optUp.callback&&this.optUp.callback(this)}},s.prototype.setPageNum=function(t){this.optUp.page.num=t-1},s.prototype.setPageSize=function(t){this.optUp.page.size=t},s.prototype.endByPage=function(t,o,e){var i;this.optUp.use&&null!=o&&(i=this.optUp.page.num<o),this.endSuccess(t,i,e)},s.prototype.endBySize=function(t,o,e){var i;if(this.optUp.use&&null!=o){var n=(this.optUp.page.num-1)*this.optUp.page.size+t;i=n<o}this.endSuccess(t,i,e)},s.prototype.endSuccess=function(t,o,e){var i=this;if(i.isDownScrolling&&i.endDownScroll(),i.optUp.use){var n;if(null!=t){var s=i.optUp.page.num,p=i.optUp.page.size;if(1===s&&e&&(i.optUp.page.time=e),t<p||!1===o)if(i.optUp.hasNext=!1,0===t&&1===s)n=!1,i.showEmpty();else{var l=(s-1)*p+t;n=!(l<i.optUp.noMoreSize),i.removeEmpty()}else n=!1,i.optUp.hasNext=!0,i.removeEmpty()}i.endUpScroll(n)}},s.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},s.prototype.showEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!0)},s.prototype.removeEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!1)},s.prototype.showTopBtn=function(){this.topBtnShow||(this.topBtnShow=!0,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!0))},s.prototype.hideTopBtn=function(){this.topBtnShow&&(this.topBtnShow=!1,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!1))},s.prototype.getScrollTop=function(){return this.scrollTop||0},s.prototype.setScrollTop=function(t){this.scrollTop=t},s.prototype.scrollTo=function(t,o){this.myScrollTo&&this.myScrollTo(t,o)},s.prototype.resetScrollTo=function(t){this.myScrollTo=t},s.prototype.getScrollBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},s.prototype.getStep=function(t,o,e,i,n){var s=o-t;if(0!==i&&0!==s){i=i||300,n=n||30;var p=i/n,l=s/p,r=0,h=setInterval((function(){r<p-1?(t+=l,e&&e(t,h),r++):(e&&e(o,h),clearInterval(h))}),n)}else e&&e(o)},s.prototype.getClientHeight=function(t){var o=this.clientHeight||0;return 0===o&&!0!==t&&(o=this.getBodyHeight()),o},s.prototype.setClientHeight=function(t){this.clientHeight=t},s.prototype.getScrollHeight=function(){return this.scrollHeight||0},s.prototype.setScrollHeight=function(t){this.scrollHeight=t},s.prototype.getBodyHeight=function(){return this.bodyHeight||0},s.prototype.setBodyHeight=function(t){this.bodyHeight=t},s.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},s.prototype.setBounce=function(t){if(!1===t){if(this.optUp.isBounce=!1,setTimeout((function(){var t=document.getElementsByTagName("uni-page")[0];t&&t.setAttribute("use_mescroll",!0)}),30),window.isSetBounce)return;window.isSetBounce=!0,window.bounceTouchmove=function(t){var o=t.target,e=!0;while(o!==document.body&&o!==document){if("UNI-PAGE"===o.tagName){o.getAttribute("use_mescroll")||(e=!1);break}var i=o.classList;if(i){if(i.contains("mescroll-touch")){e=!1;break}if(i.contains("mescroll-touch-x")||i.contains("mescroll-touch-y")){var n=t.touches?t.touches[0].pageX:t.clientX,s=t.touches?t.touches[0].pageY:t.clientY;this.preWinX||(this.preWinX=n),this.preWinY||(this.preWinY=s);var p=Math.abs(this.preWinX-n),l=Math.abs(this.preWinY-s),r=Math.sqrt(p*p+l*l);if(this.preWinX=n,this.preWinY=s,0!==r){var h=Math.asin(l/r)/Math.PI*180;if(h<=45&&i.contains("mescroll-touch-x")||h>45&&i.contains("mescroll-touch-y")){e=!1;break}}}}o=o.parentNode}e&&t.cancelable&&!t.defaultPrevented&&"function"===typeof t.preventDefault&&t.preventDefault()},window.addEventListener("touchmove",window.bounceTouchmove,{passive:!1})}else this.optUp.isBounce=!0,window.bounceTouchmove&&(window.removeEventListener("touchmove",window.bounceTouchmove),window.bounceTouchmove=null,window.isSetBounce=!1)}}}]);