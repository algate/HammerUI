<template>
	<view class="qiun-columns">
		<!--#ifdef H5 -->
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">页面地址</view>
		</view>
		<view class="qiun-bg-white qiun-padding">
		    <text>pages/basic/arcbar/mix</text>
		</view>
		<!--#endif-->
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">多重圆弧进度条</view>
		</view>
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="chartsa" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="chartsa" ></canvas>
			<!--#endif-->
		</view>
		<!--#ifdef H5 -->
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">标准数据格式</view>
		</view>
		<view class="qiun-bg-white qiun-padding">
		    <textarea class="qiun-textarea" auto-height="true" maxlength="-1" v-model="textarea"/>
		</view>
		<view class="qiun-text-tips">Tips：修改后点击更新图表</view>
		<button class="qiun-button" @tap="changeData()">更新图表</button>
		<!--#endif-->
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import  { isJSON } from '@/common/checker.js';
	var _self;
	var canvaArea=null;
   
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				arcbarWidth:0,
				pixelRatio:1,
				textarea:''
			}
		},
		onReady() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(340);
			this.arcbarWidth=uni.upx2px(26);
			this.getServerData();
		},
		methods: {
			getServerData(){
				let Area={series:[{name:'分数',data:0.85},{name:'排名',data:0.8},{name:'排名',data:0.75},{name:'排名',data:0.7},{name:'排名',data:0.65},{name:'排名',data:0.6},{name:'排名',data:0.55}]};
				this.textarea = JSON.stringify(Area);
				this.showArea("canvasArea",Area);
			},
			showArea(canvasId,chartData){
				let border=this.arcbarWidth;
				let aWidth=this.cWidth/2-border;
				let aHeight=this.cHeight-border;
				let radius=(aWidth*aWidth+aHeight*aHeight)/aHeight/2;
				let centerPoint={
					x:this.cWidth/2*this.pixelRatio,
					y:(radius+border)*this.pixelRatio
				};
				canvaArea=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize:11,
					colors:['#FF0000','#FF7F00','#FFFF00','#00FF00','#00FFFF','#0000FF','#8B00FF'],
					legend:{show:false},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						arcbar:{
							type:'default',
							width: border*_self.pixelRatio,
							backgroundColor:'rgba(233,233,233,0.4)',
							startAngle:0.9999,
							endAngle:0.0001,
							radius:radius*_self.pixelRatio,
							gap:5*_self.pixelRatio,
							center:centerPoint
						}
					}
				});
				
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaArea.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750rpx;
		height: 340rpx;
		background: linear-gradient(to top, #28E5A0, #0BB7D6);
		background-size: 100% 100%;
	}
	
	.chartsa {
		width: 750rpx;
		height: 340rpx;
	}
</style>
