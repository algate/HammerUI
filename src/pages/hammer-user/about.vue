<template>
	<view>
		<view class="hammer-tencent"><image src="/static/images/mine/wechat.png" mode="widthFix"></image></view>
		<view class="hammer-logo">
			<view class="logo"><image src="/static/images/tabBar/hammer.svg" mode="scaleToFill" /></view>
		</view>
		<view class="tui-content-box">
			<view class="tui-content">尊敬的开发者，欢迎体验 - 锤子UI！</view>
			<view class="tui-content">
				本项目是一个实验小程序项目，本身是基于ThorUI模板进行开发的。项目中大部分组件，还有信息展示，都来源于网络，组件、信息展示、icon等中使用了ColorUI、ThorUI，UniUI组件、集合了Mecroll-Scroll、Ucharts等很多三方组件，方便查找。该项目主要是一些uni-app代码片段和组件的分享。如果想单独使用组件请移步Uni-app插件列表寻找相关组件信息进行使用，都可以在插件列表中找的。本项目免费开源，H5效果可在
				<text class="tui-content-email" @tap="copy('https://algate.github.io/HammerUI/')">锤子UI</text>上预览。
			</view>
			<view class="tui-content">项目可能存在缺陷或者bug，如果您在使用过程中发现问题或者有更好的建议，可反馈给我。</view>
			<view class="tui-content">您可以通过反馈或者以下方式联系我！</view>
			<view class="tui-content tui-content-email" @tap="copy('algate@foxmail.com')">邮箱：algate@foxmail.com</view>
			<view class="tui-footer">
				<image src="../../static/images/mine/wx.png" class="tui-applets" mode="widthFix"></image>
				<view class="tui-footer-text">扫描二维码，您的朋友也可以体验 - 锤子UI！</view>
			</view>
		</view>
		<hammer-toast ref="toast"></hammer-toast>
		<!-- #ifdef MP-WEIXIN -->
		<view><ad unit-id="adunit-0fc72cc383473418" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad></view>
		<!-- #endif -->
	</view>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import hammerToast from "@/pages/components/extend/toast/toast"
const hammerClipboard = require("@/libs/loadClipboard.js");
export default {
	components: {
		hammerToast
	},
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		copy(text) {
			let that = this;
			// #ifdef MP-WEIXIN
			uni.setClipboardData({
			    data: text,
			    success() {
			        uni.getClipboardData({
			            success() {
							that.$refs.toast.show({
								title: "链接已复制",
								iconFrom: "iconfont",
								iconName: "roundcheck",
								icon: true
							})
			            }
			        })
			    }
			})
			// #endif
			// #ifdef H5
			hammerClipboard.getClipboardData(text, res => {
				if (res) {
					that.$refs.toast.show({
						title: "链接已复制",
						iconFrom: "iconfont",
						iconName: "roundcheck",
						icon: true
					})
				} else {
					that.$refs.toast.show({
						title: "操作失败",
						iconFrom: "iconfont",
						iconName: "roundclose",
						iconColor: "#e54d42",
						icon: true
					})
				}
			});
			// #endif
		}
	}
};
</script>
<style lang="scss">
.hammer-tencent {
	margin-bottom: 60upx;
	image {
		width: 100%;
		background: #2ba045;
	}
}
@keyframes swingHammer {
	20% {
		-webkit-transform: rotate3d(0, 0, 1, 15deg);
		transform: rotate3d(0, 0, 1, 15deg);
	}

	40% {
		-webkit-transform: rotate3d(0, 0, 1, -12deg);
		transform: rotate3d(0, 0, 1, -12deg);
	}

	60% {
		-webkit-transform: rotate3d(0, 0, 1, 15deg);
		transform: rotate3d(0, 0, 1, 15deg);
	}

	80% {
		-webkit-transform: rotate3d(0, 0, 1, -12deg);
		transform: rotate3d(0, 0, 1, -12deg);
	}

	to {
		-webkit-transform: rotate3d(0, 0, 1, 15deg);
		transform: rotate3d(0, 0, 1, 15deg);
	}
}

.hammer-logo {
	text-align: center;

	.logo {
		width: 50vw;
		height: 50vw;
		transform: translateX(50%);
		animation: swingHammer 3s infinite;

		image {
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
}
.tui-content-box {
	width: 100%;
	margin-top: 30px;
	padding: 30upx;
	box-sizing: border-box;
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10upx #eee;
}

.tui-content {
	color: #333;
	font-size: 30upx;
	line-height: 44upx;
	padding: 10upx 0;
	text-align: justify;
}

.tui-content-email {
	color: #5677fc !important;
}

.tui-footer {
	display: flex;
	align-items: center;
	padding-top: 30upx;
}

.tui-applets {
	width: 80px;
	height: 80px;
	display: block;
}

.tui-footer-text {
	font-size: 24upx;
	color: #999;
	padding-left: 20upx;
	width: 300upx;
}
</style>
