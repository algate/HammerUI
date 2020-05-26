<template>
	<view>
		<view class="hammer-tencent"><image src="/static/images/mine/wechat.png" mode="widthFix"></image></view>
		<view class="hammer-logo">
			<view class="logo"><image src="/static/images/tabBar/hammer.svg" mode="scaleToFill" /></view>
		</view>
		<view class="tui-content-box">
			<view class="tui-content">尊敬的开发者，欢迎体验 - 锤子UI！</view>
			<view class="tui-content">
				该项目主要是一些uni-app代码片段的分享，以及基础组件的封装。项目免费开源，H5效果可在
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
	margin-bottom: 160upx;
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
	margin-top: 50px;
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
