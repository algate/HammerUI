<template>
    <view>
        <view class="hammer-tencent">
            <image src="/static/images/mine/tencent.png" mode="widthFix"></image>
        </view>
        <view class="hammer-logo">
            <view class="logo">
                <image src="/static/images/tabBar/hammer.svg" mode="scaleToFill" />
            </view>
        </view>
        <button class="goToHome bg-color" @tap="h5onGotUserInfo">登录</button>
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
                nickName: 'HammerUI',
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
            success(res) {
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
        bindGetUserInfo(e) {
            console.log(e.detail.userInfo);
        }
    },
    onShow() {
        console.log("进入🔨入口")
    }
}
</script>
<style lang="scss">
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

.goToHome {
    margin-top: 160upx;
    width: 60%;
}

.login-btn {
    visibility: hidden;
    display: none;
}

.hammer-tencent {
    margin-bottom: 100upx;

    image {
        width: 100%;
        background: #2ba045;
    }
}
</style>
