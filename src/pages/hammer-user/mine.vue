<template>
    <view>
        <view class="top-container">
            <view class="bg-img"></view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="user" v-if="isLogin">
				<image class="avatar-img" :src="userInfo.avatarUrl">
			    <view class="user-info-mobile">
                    <text>{{userInfo.nickName}}</text>
			        <view class="edit-img" hover-class="opcity" :hover-stay-time="150" @tap="edit">
			            <hammer-icon from="iconfont" name="edit" :size="24"></hammer-icon>
			        </view>
			    </view>
			</view>
			<view class="user" v-else>
			    <image class="avatar-img" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/images/logo.svg'"></image>
			    <view class="user-info-mobile">
					<hammer-button class="bg-color" open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo" width="280upx" height="90upx">微信登录</hammer-button>
			    </view>
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
            <view class="user">
                <image class="avatar-img" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/images/logo.svg'"></image>
                <view class="user-info-mobile">
                    <text>{{userInfo.nickName}}</text>
                    <view class="edit-img" hover-class="opcity" :hover-stay-time="150" @tap="edit">
                        <hammer-icon from="iconfont" name="edit" :size="24"></hammer-icon>
                    </view>
                </view>
            </view>
			<!-- #endif -->
        </view>
        <view class="middle-container justify-around">
            <view @tap="tapEvent" data-index="1" class="middle-item" hover-class="opcity" :hover-stay-time="150">
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
		<hammer-toast ref="toast"></hammer-toast>
    </view>
</template>
<script>
import {
    mapState,
    mapMutations
} from "vuex"
import hammerToast from "@/pages/components/extend/toast/toast"
// #ifdef H5
const hammerClipboard = require("@/libs/loadClipboard.js");
// #endif
export default {
	components: {
		hammerToast
	},
    computed: {
        ...mapState(["userInfo"])
    },
    data() {
        return {
			isLogin: false
        }
    },
	onLoad() {
		let that = this;
		// 获取授权 - 用于展示用户信息
		// #ifdef MP-WEIXIN
		if(Object.keys(this.userInfo).length > 0){
			uni.showToast({
				title: '欢迎使用锤子UI'
			})
			this.isLogin = true;
		} else {
			this.isLogin = false;
			wx.getSetting({
				success (res) {
					console.log('getSetting', res);
					if (res.authSetting['scope.userInfo']) {
						wx.getUserInfo({
							success(r) {
								console.log('getUserInfo', r);
								that.isLogin = true;
								that.login(r.userInfo);
								uni.showToast({
									title: '欢迎使用锤子UI'
								})
							}
						})
					} else {
						uni.showModal({
						    title: '提示',
						    content: '授权微信登录可以更好的体验HammerUI!',
							confirmColor: '#07BB07',
						    success: function (type) {
								if (type.confirm) {
									uni.redirectTo({
									    url: '/pages/index/index'
									});
								} else if (type.cancel) {
									uni.showToast({
										title: '点击微信登陆显示昵称',
									});
								}
						    }
						});
					}
				}
			})
		}
		// #endif
	},
    methods: {
        ...mapMutations(["login"]),
		bindGetUserInfo(e) {
			this.login(e.userInfo);
			if(e.userInfo) {
				this.isLogin = true;
				uni.showToast({
					title: '欢迎使用锤子UI'
				})
			}
		},
        edit() {
			this.$refs.toast.show({
				title: "Tips: 别点了😊",
				iconFrom: "iconfont",
				iconName: "roundcheck",
				icon: true
			})
        },
        tapEvent: function(e) {
            let index = e.currentTarget.dataset.index;
            let url = "";
            if (index == 1) {
                url = "../hammer-user/about"
            } else if (index == 4) {
                let key = e.currentTarget.dataset.key;
                url = "../hammer-user/user-weather?key=" + key
            } else if (index == 2) {
                let key = e.currentTarget.dataset.key;
                url = "../hammer-user/user-amap?key=" + key
            } else {
                url = "../hammer-user/log"
            }
            uni.navigateTo({
                url: url
            })
        },
        github: function(type) {
			let that = this;
            if (type == 1) {
                uni.setClipboardData({
                    data: "https://github.com/algate/HammerUI",
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
            } else {
                // #ifdef H5
				hammerClipboard.getClipboardData("https://github.com/algate/HammerUI", res => {
					if (res) {
						that.$refs.toast.show({
							title: "链接已复制",
							iconFrom: "iconfont",
							iconName: "roundcheck",
							icon: true
						})
					} else {
						that.$refs.toast.show({
							title: "复制失败",
							iconFrom: "iconfont",
							iconName: "roundclose",
							iconColor: "#e54d42",
							icon: true
						})
					}
				});
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
    height: 440upx;
    position: relative;
    display: flex;
    flex-direction: column;
}

.bg-img {
    position: absolute;
    width: 100%;
    height: 440upx;
    background: linear-gradient($hammer-color, #f1f1f1);
}

.login-btn {
    border: none;
    background: none;
    &:after {
        border: none;
    }
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
    margin-top: 100upx;
}

.avatar-img {
    width: 160upx;
    height: 160upx;
    border-radius: 50%;
    align-self: center;
}

.user-info {
    display: flex;
    flex-direction: row;
    margin-top: 30upx;
    align-items: center;
}

.user-info-mobile {
    margin-top: 30upx;
    position: relative;
    font-size: 50upx;
    color: #FEFEFE;
    line-height: 50upx;
    align-self: center;
    padding: 0 50upx;
	.edit-img {
	    position: absolute;
	    right: 0;
	    bottom: -4upx;
	}
}

.middle-container {
    height: 138upx;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10upx;
    background-color: #FFFFFF;
    margin: -30upx 30upx 26upx 30upx;
    box-shadow: 0 10upx 20upx 4upx #efefef;
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
    width: 80upx;
    height: 80upx;
}

.middle-tag {
    font-size: 28upx;
    color: #333333;
    line-height: 28upx;
    font-weight: bold;
    padding-left: 22upx;
}

.car-img {
    width: 80upx;
    height: 80upx;
    margin-left: 97upx;
}

.bottom-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40upx 80upx 40upx 80upx;
    margin: 0 30upx;
    background-color: #FFFFFF;
    border-radius: 10upx;
    box-sizing: border-box;
    box-shadow: 0 0 10upx #e9e9e9;
}

.ul-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30upx;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.item-img {
    width: 64upx;
    height: 64upx;
}

.item-name {
    font-size: 24upx;
    color: #666666;
    min-width: 80upx;
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
