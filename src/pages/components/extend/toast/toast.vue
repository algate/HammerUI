<template>
	<view class="hammer-toast" :class="[visible?'hammer-toast-show':'',content?'hammer-toast-padding':'',icon?'':'hammer-unicon-padding']" :style="{width:getWidth(icon,content)}">
		<hammer-icon :from="iconFrom" :name="iconName" :color="iconColor" :size="50" v-if="icon"></hammer-icon>
		<view class="hammer-toast-text" :class="[icon?'':'hammer-unicon']">{{title}}</view>
		<view class="hammer-toast-text hammer-content-ptop" v-if="content && icon">{{content}}</view>
	</view>
</template>

<script>
	export default {
		name: "hammerToast",
		props: {
		},
		data() {
			return {
				timer: null,
				//是否显示
				visible: false,
				//显示标题
				title: "操作成功",
				//显示内容
				content: "",
				//是否有icon
				icon:false,
				iconFrom: '',
				iconName: ''
			};
		},
		methods: {
			show: function(options) {
				let {
					duration = 2000,
					icon=false
				} = options;
				clearTimeout(this.timer);
				this.visible = true;
				this.title = options.title || "";
				this.content = options.content || "";
				this.iconFrom = options.iconFrom || "tui";
				this.iconName = options.iconName || "roundcheck";
				this.iconColor = options.iconColor || "";
				this.icon=icon;
				this.timer = setTimeout(() => {
					this.visible = false;
					clearTimeout(this.timer);
					this.timer = null;
				}, duration);
			},
			getWidth(icon,content){
				let width="auto";
				if(icon){
					width=content?'420upx':'360upx'
				}
				return width
			}
		}
	}
</script>

<style>
	.hammer-toast {
		background: rgba(0, 0, 0, 0.75);
		border-radius: 10upx;
		position: fixed;
		visibility: hidden;
		opacity: 0;
		left: 50%;
		top: 48%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		transition:  0.3s ease-in-out;
		transition-property:opacity,visibility;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 40upx 20upx;
		box-sizing: border-box;
	}

	.hammer-toast-padding {
		padding-top: 50upx !important;
		padding-bottom: 50upx !important;
	}
	.hammer-unicon-padding {
		padding: 24upx 40upx !important;
		word-break: break-all;
	}

	.hammer-toast-show {
		visibility: visible;
		opacity: 1;
	}


	.hammer-toast-img {
		width: 120upx;
		height: 120upx;
		display: block;
		margin-bottom: 28upx;
	}

	.hammer-toast-text {
		font-size: 30upx;
		line-height: 30upx;
		font-weight: 400;
		color: #fff;
		text-align: center;
	}
	.hammer-unicon{
		line-height: 40upx !important;
		font-size: 32upx !important;
	}
	.hammer-content-ptop {
		padding-top: 10upx;
		font-size: 26upx !important;
	}
</style>
