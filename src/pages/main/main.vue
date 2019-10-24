<template>
    <view>
        <!-- #ifdef H5 -->
        <button type="default" @tap="h5onGotUserInfo">进入🔨主页</button>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <button open-type="getUserInfo" type="primary" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取🔨用户信息</button>
        <!-- #endif -->
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
            userInfo: {}
        };
    },
    onLoad() {
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
        this.init()
    },
    methods: {
        ...mapMutations(['login']),
        init() {
            uni.hideLoading()
        },
        // #ifdef MP-WEIXIN
        onGotUserInfo: function(e) {
            console.log(e.detail.errMsg)
            console.log(e.detail.userInfo)
            console.log(e.detail.rawData)
            console.log(e.detail.signature)
            console.log(e.detail.encryptedData)
            console.log(e.detail.iv)
            console.log(e.detail.cloudID)
            this.login(e.detail.userInfo);
            uni.reLaunch({
                url: '/pages/hammer-basic/home'
            });
        },
        // #endif
        h5onGotUserInfo: function(e) {
            uni.reLaunch({
                url: '/pages/hammer-basic/home'
            });
        }
    },
    onShow() {
        console.log("进入🔨入口")
    }
}
</script>
