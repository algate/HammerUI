<template>
	<view>
		<view class="hammer-tencent"><image src="/static/images/mine/wechat.png" mode="widthFix"></image></view>
		<view class="hammer-logo">
			<view class="logo"><image src="/static/images/tabBar/hammer.svg" mode="scaleToFill"></image></view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-login">
			<hammer-button v-if="canIUse" open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo" width="280upx" height="90upx">授权微信登录</hammer-button>
			<view v-else>请升级微信版本</view>
			<hammer-button style="margin-left:50upx;" type="green" @tap="experienceHammerUI" width="280upx" height="90upx">{{loginFlag?'欢迎回来':'体验🔨UI!'}}</hammer-button>
		</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="wx-login"><hammer-button class="bg-color" @tap="h5onGotUserInfo" type="green" width="280upx" height="90upx" :size="32">体验🔨UI!</hammer-button></view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="hammer-official-account">
			<view class="adContainer"><ad unit-id="adunit-2d10a7b6828d8fc6"></ad></view>
			<official-account></official-account>
		</view>
		<!-- #endif -->
	</view>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			canIUse: wx.canIUse('button.open-type.getUserInfo'),
			loginFlag: false
		};
	},
	onLoad() {
		let that = this;
		// #ifdef H5
		if (window.location.hostname.indexOf('localhost') !== -1) {
			// 状态管理中存放地址栏参数
			const userInfo = {
				nickName: 'HammerUI',
				avatarUrl: '/static/images/logo.svg',
				gender: 0, //性别 0：未知、1：男、2：女
				province: '北京市',
				city: '北京',
				country: '中国'
			};
			this.login(userInfo);
		}
		// #endif
		// 查看是否授权
		// #ifdef MP-WEIXIN
		wx.getSetting({
			success(res) {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success(r) {
							console.log('getUserInfo', r);
							that.login(r.userInfo);
							// 跳转到首页
							/* uni.reLaunch({
								url: '/pages/hammer-canvas/home'
							}); */
							that.loginFlag = true;
						}
					});
				} else {
					// wx登录
					wx.login({
						success(res) {
							if (res.code) {
								console.log('登录成功！' + res.errMsg);
							} else {
								console.log('登录失败！' + res.errMsg);
							}
						}
					});
				}
			}
		});
		// #endif
	},
	methods: {
		...mapMutations(['login']),
		// #ifdef H5
		h5onGotUserInfo: function() {
			uni.reLaunch({
				url: '/pages/hammer-canvas/home'
			});
		},
		// #endif
		bindGetUserInfo(e) {
			console.log(e);
			this.login(e.userInfo);
			if (e.userInfo) {
				uni.reLaunch({
					url: '/pages/hammer-canvas/home'
				});
			}
		},
		experienceHammerUI() {
			uni.reLaunch({
				url: '/pages/hammer-canvas/home'
			});
		}
	},
	onShow() {
		console.log('进入🔨门口');
		// #ifdef MP-WEIXIN
		// 在适合的场景显示插屏广告
		if (this.interstitialAd) {
			this.interstitialAd.show().catch((err) => {
				console.error(err)
			})
		}
		// #endif
	}
};
</script>
<style lang="scss">
.hammer-tencent {
	margin-bottom: 100upx;

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

.wx-login {
	margin-top: 120upx;
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
