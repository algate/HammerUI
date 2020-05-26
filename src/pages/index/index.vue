<template>
	<view>
		<view class="hammer-tencent"><image src="/static/images/mine/wechat.png" mode="widthFix"></image></view>
		<view class="hammer-logo">
			<view class="logo"><image src="/static/images/tabBar/hammer.svg" mode="scaleToFill" /></view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-login">
			<hammer-button style="margin-left:50upx;" type="green" @tap="experienceHammerUI" width="280upx" height="90upx">体验🔨UI!</hammer-button>
		</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="wx-login"> 
			<hammer-button class="bg-color" @tap="h5onGotUserInfo" type="green" width="280upx" height="90upx" :size="32">体验🔨UI!</hammer-button>
		</view>
		<!-- #endif -->
	</view>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import hammerButton from "@/components/hammer-button/hammer-button.vue"
export default {
	components:{
		hammerButton
	},
	computed: {
		...mapState(['isLogin'])
	},
	data() {
		return {
			canIUse: wx.canIUse('button.open-type.getUserInfo')
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
	},
	methods: {
		...mapMutations(['login']),
		// #ifdef H5
		h5onGotUserInfo: function() {
			uni.reLaunch({
				url: '/pages/hammer-basic/home'
			});
		},
		// #endif
		experienceHammerUI() {
			uni.reLaunch({
				url: '/pages/hammer-basic/home'
			});
		}
	},
	onShow() {
		console.log('进入🔨门口');
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

.wx-login {
	margin-top: 180upx;
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
