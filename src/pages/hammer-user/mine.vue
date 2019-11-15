<template>
    <view>
        <view class="top-container">
            <view class="bg-img"></view>
            <view v-show="!isLogin" class="user-wrapper">
                <navigator url="../main/main" hover-class="opcity" :hover-stay-time="150" class="user">
                    <image class="avatar-img" src="../../static/images/mine/user-default.png"></image>
                    <text class="user-info-mobile">请登录</text>
                </navigator>
            </view>
            <view v-show="isLogin" class="user">
                <image class="avatar-img" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/images/my/mine_def_touxiang.png'"></image>
                <view class="user-info-mobile">
                    <text>{{userInfo.nickName}}</text>
                    <view class="edit-img" hover-class="opcity" :hover-stay-time="150" @tap="edit">
                        <hammer-icon from="iconfont" name="edit" :size="24"></hammer-icon>
                    </view>
                </view>
            </view>
        </view>
        <view class="middle-container justify-around">
            <view data-url="../myWashTicket/myWashTicket" @tap="tapEvent" data-index="1" class="middle-item" hover-class="opcity" :hover-stay-time="150">
                <image class="ticket-img" src="/static/images/logo.svg"></image>
                <text class="middle-tag">锤子 UI</text>
            </view>
            <!-- #ifdef MP-WEIXIN -->
            <view @tap="github(1)" class="middle-item" hover-class="opcity" :hover-stay-time="150">
                <hammer-icon class="github" from="iconfont" color="#008381" name="github" :size="64"></hammer-icon>
                <text class="middle-tag">GitHub</text>
            </view>
            <!-- #endif -->
            <!-- #ifdef H5 -->
            <view @tap="github(2)" class="middle-item" hover-class="opcity" :hover-stay-time="150">
                <hammer-icon class="github" from="iconfont" color="#008381" name="github" :size="64"></hammer-icon>
                <text class="middle-tag">GitHub</text>
            </view>
            <!-- #endif -->
        </view>
        <view class="bottom-container">
            <view class="ul-item">
                <view @tap="tapEvent" data-index="2" data-key="加油站" class="item" hover-class="opcity" :hover-stay-time="150">
                    <hammer-icon class="github" from="iconfont" name="Gas" :size="36"></hammer-icon>
                    <text class="item-name">加油站</text>
                </view>
                <view @tap="tapEvent" data-index="2" data-key="停车场" class="item" hover-class="opcity" :hover-stay-time="150">
                    <hammer-icon class="github" from="iconfont" name="park" :size="36"></hammer-icon>
                    <text class="item-name">停车场</text>
                </view>
                <view @tap="tapEvent" data-index="4" data-key="天气" class="item" hover-class="opcity" :hover-stay-time="150">
                    <hammer-icon class="github" name="weather" :size="36"></hammer-icon>
                    <text class="item-name">天气</text>
                </view>
            </view>
            <view class="ul-item">
                <view @tap="previewReward" class="item" hover-class="opcity" :hover-stay-time="150">
                    <hammer-icon class="github" from="iconfont" name="sponsorfill" :size="36"></hammer-icon>
                    <text class="item-name">赞赏</text>
                </view>
                <view class="item" hover-class="opcity" :hover-stay-time="150">
                    <button open-type="feedback" class="btn-feedback"></button>
                    <hammer-icon class="github" from="iconfont" name="edit" :size="36"></hammer-icon>
                    <text class="item-name">反馈</text>
                </view>
                <view @tap="tapEvent" data-index="3" class="item" hover-class="opcity" :hover-stay-time="150">
                    <hammer-icon class="github" from="iconfont" name="time" :size="36"></hammer-icon>
                    <text class="item-name">日志</text>
                </view>
            </view>
        </view>
        <view @tap="logout" class="logout h-margin-top" :hover-stay-time="150">
            <button class="bg-color" v-show="isLogin">退出</button>
        </view>
    </view>
</template>
<script>
import {
    mapState,
    mapMutations
} from "vuex"
export default {
    computed: {
        ...mapState(["isLogin","userInfo"])
    },
    data() {
        return {}
    },
    onShow: function() {},
    methods: {
        ...mapMutations(["logoff"]),
        logout: function() {
            uni.showModal({
                title: "提示",
                content: "确定退出登录？",
                confirmColor: "#00AB98",
                success: (res) => {
                    if (res.confirm) {
                        uni.reLaunch({
                            url: "/pages/main/main"
                        })
                    }
                }
            });
        },
        edit() {
            uni.showToast({
                title: 'Tips: 别点了😊'
            })
        },
        tapEvent: function(e) {
            let index = e.currentTarget.dataset.index;
            let url = "";
            if (index == 1) {
                url = "../about/about"
            } else if (index == 4) {
                let key = e.currentTarget.dataset.key;
                url = "../hammer-user/user-weather?key=" + key
            } else if (index == 2) {
                let key = e.currentTarget.dataset.key;
                url = "../hammer-user/user-amap?key=" + key
            } else {
                url = "../log/log"
            }
            uni.navigateTo({
                url: url
            })
        },
        github: function(type) {
            if (type == 1) {
                const that = this
                uni.setClipboardData({
                    data: "https://github.com/algate/HammerUI",
                    success(res) {
                        uni.getClipboardData({
                            success(res) {
                                that.showToast({
                                    title: "链接已复制"
                                })
                            }
                        })
                    }
                })
            } else {
                // #ifdef H5
                window.open("https://github.com/algate/HammerUI");
                // #endif
            }
        },
        previewReward: function() {
            uni.previewImage({
                urls: ["https://algate.github.io/img/reward.png"]
            })
        }
    }
}
</script>
<style lang="scss">
/* pages/my/my.wxss */
.container {
    position: relative;
}

.top-container {
    height: 440rpx;
    position: relative;
    display: flex;
    flex-direction: column;
}

.bg-img {
    position: absolute;
    width: 100%;
    height: 440rpx;
    background: linear-gradient($hammer-color, #f1f1f1);
}

.logout {
    position: relative;
    z-index: 2;
    margin: 40rpx 60rpx;
}

.user-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    margin-top: 100rpx;
}

.avatar-img {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    align-self: center;
}

.user-info {
    display: flex;
    flex-direction: row;
    margin-top: 30rpx;
    align-items: center;
}

.user-info-mobile {
    margin-top: 30rpx;
    position: relative;
    font-size: 28rpx;
    color: #FEFEFE;
    line-height: 28rpx;
    align-self: center;
    padding: 0 50rpx;
}

.edit-img {
    position: absolute;
    right: 0;
    bottom: -4rpx;
}

.middle-container {
    height: 138rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10rpx;
    background-color: #FFFFFF;
    margin: -30rpx 30rpx 26rpx 30rpx;
    box-shadow: 0 10rpx 20rpx 4rpx #efefef;
    position: relative;
    z-index: 2;

}

.middle-item {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.ticket-img {
    width: 80rpx;
    height: 80rpx;
}

.middle-tag {
    font-size: 28rpx;
    color: #333333;
    line-height: 28rpx;
    font-weight: bold;
    padding-left: 22rpx;
}

.car-img {
    width: 80rpx;
    height: 80rpx;
    margin-left: 97rpx;
}

.bottom-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40rpx 80rpx 40rpx 80rpx;
    margin: 0 30rpx;
    background-color: #FFFFFF;
    border-radius: 10rpx;
    box-sizing: border-box;
    box-shadow: 0 0 10rpx #e9e9e9;
}

.ul-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30rpx;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.item-img {
    width: 64rpx;
    height: 64rpx;
}

.item-name {
    font-size: 24rpx;
    color: #666666;
    min-width: 80rpx;
    text-align: center;
}

.btn-feedback {
    background: transparent !important;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
.btn-feedback:after {
    border: 0;
}
</style>
