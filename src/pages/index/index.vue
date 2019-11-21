<template>
    <view>
        <button type="default" @tap="h5onGotUserInfo">进入🔨主页</button>
		<button v-if="canIUse" class="login-btn" open-type="getUserInfo" type="hidden" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">微信登录</button>
    </view>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex'
export default {
    computed: {
        ...mapState(['isLogin'])
    },
    data() {
        return {
            userInfo: {},
			canIUse: wx.canIUse('button.open-type.getUserInfo')
        };
    },
    onLoad() {
		let that = this;
        uni.showLoading({
            title: '加载中...'
        });
        // #ifdef H5
        if (window.location.hostname.indexOf("localhost") !== -1) {
            uni.hideLoading();
            // 状态管理中存放地址栏参数
            this.userInfo = {
                nickName: 'hammer',
                avatarUrl: '/static/images/logo.svg',
                gender: 0, //性别 0：未知、1：男、2：女
                province: '北京市',
                city: '北京',
                country: '中国'
            };
            this.login(this.userInfo);
        }
        // #endif
		// 查看是否授权
        // #ifdef MP-WEIXIN
		wx.getSetting({
		  success (res){
			if (res.authSetting['scope.userInfo']) {
			  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
			  wx.getUserInfo({
				success: function(res) {
				  that.login(res.userInfo);
				}
			  })
			}
		  }
		});
        // #endif
        this.init()
    },
    methods: {
		...mapMutations(["login"]),
        init() {
            uni.hideLoading()
        },
        h5onGotUserInfo: function() {
			/* uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					console.log(loginRes.authResult);
				}
			}); */
            uni.reLaunch({
                url: '/pages/hammer-basic/home'
            });
        },
		bindGetUserInfo (e) {
			console.log(e.detail.userInfo);
		}
    },
    onShow() {
        console.log("进入🔨入口")
    }
}
</script>
<style lang="scss">
	.login-btn {
		visibility: hidden;
		display: none;
	}
</style>