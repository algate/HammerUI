<template>
    <view class="maps-container">
        <view class="search-bar">
            <view class="search-bar-form">
                <view class="search-bar-box">
                    <hammer-icon name="search" :size="16"></hammer-icon>
                    <input confirm-type="search" class="search-bar-input" placeholder="请输入您的目的地" :value="inputVal" :focus="inputShowed"
                     @confirm="bindInput" @input="inputTyping" />
                    <view class="icon-clear" v-if="inputVal" @tap="clearInput">
                        <hammer-icon name="close" :size="14"></hammer-icon>
                    </view>
                </view>
                <label class="search-bar-label" v-show="!inputShowed" @tap="showInput">
                    <hammer-icon name="search" :size="16"></hammer-icon>
                    <view class="search-bar-text">请输入您的目的地</view>
                </label>
            </view>
            <view class="cancel-btn" @tap="hideInput" v-show="inputShowed">取消</view>
        </view>
        <map :latitude="lat" :longitude="lng" :markers="covers" :scale="12"></map>
        <view class="box weather">
            <text v-if="weather.city">{{weather.city.text}} : {{weather.city.data}}</text>
            <text v-if="weather.weather">{{weather.weather.text}} : {{weather.weather.data}}</text>
            <text v-if="weather.temperature">{{weather.temperature.text}} : {{weather.temperature.data}} ℃</text>
            <text v-if="weather.winddirection">风速 : {{weather.winddirection.data}} {{weather.windpower.data}}</text>
            <text v-if="weather.humidity">{{weather.humidity.text}} : {{weather.humidity.data}}</text>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <!-- <view class="adContainer"><ad unit-id="adunit-a70e7b1bf691ba70"></ad></view> -->
        <!-- #endif -->
    </view>
</template>

<script>
    const amap = require('@/libs/amap-wx.js')
    export default {
        data() {
            return {
                inputShowed: false,
                inputVal: "",
                amapPlugin: null,
                key: this.$hammer.$constant.amapWxKey,
                lat: 39.9776,
                lng: 116.35231,
                covers: [],
                address: [],
                scrollH: 256,
                weather: {}
            }
        },
        onLoad(options) {
            this.amapPlugin = new amap.AMapWX({
                key: this.key
            });
            const that = this;
            setTimeout(() => {
                let winHeight = uni.getSystemInfoSync().windowHeight;
                this.scrollH = winHeight - 44 - uni.upx2px(600);
                this.getLocation(() => {
                    this.getWeather()
                });
            }, 300)
        },
        methods: {
            trim: function(value) {
                return value ? value.toString().replace(/(^\s*)|(\s*$)/g, "") : value;
            },
            showInput() {
                this.inputShowed = true
            },
            hideInput() {
                this.inputVal = "";
                this.inputShowed = false;
                uni.hideKeyboard(); //强行隐藏键盘
            },
            clearInput() {
                this.inputVal = ""
            },
            inputTyping: function(e) {
                this.inputVal = e.detail.value
            },
            getLocation(callback) {
                const that = this
                this.amapPlugin.getRegeo({
                    success: (data) => {
                        that.lng = data[0].longitude;
                        that.lat = data[0].latitude;
                        callback();
                    },
                    fail: (info) => {
                        callback();
                    }
                })
            },
            getWeather(keywords) {
                uni.showLoading({
                    title: '加载中...'
                })
                const that = this;
                setTimeout(() => {
                    that.amapPlugin.getWeather({
                        location: '', //location： 经纬度坐标。 为空时， 基于当前位置进行地址解析。 格式： '经度,纬度'
                        success: (data) => {
                            that.weather = data;
                            /*uni.showModal({
                                title: "信息",
                                showCancel: false,
                                confirmColor: "#00AB98",
                                success: (res) => {
                                    if (res.confirm) {
                                        // 点击确定执行方法
                                    }
                                }
                            });*/
                            uni.hideLoading()
                        },
                        fail: (info) => {
                            uni.showToast({
                                title: '获取位置信息失败，请检查是否打开位置权限'
                            })
                            uni.hideLoading()
                        }
                    })
                }, 0);
            },
            bindInput: function(e) {
                const keywords = e.detail.value;
                this.getWeather(keywords);
            }
        }
    }
</script>

<style lang="scss">
    page {
        height: 100%;
    }
    input,
    uni-input {
        overflow: inherit;
    }

    .tui-list {
        background-color: #fff;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .tui-list-cell {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .tui-list-cell::after {
        content: '';
        position: absolute;
        border-bottom: 1upx solid #eaeef1;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        bottom: 0;
        right: 0;
        left: 30upx;
    }

    .tui-cell-last::after {
        border-bottom: 0;
    }

    .maps-container {
        height: 100%;
        overflow: hidden;
    }

    map {
        width: 100%;
        height: 600upx;
    }
    .box.weather {
        height: calc(100vh - 600upx - 46px);
        background: #00ab98;
        color: #fff;
        padding-top: 80upx;
        padding-left: 100upx;
        line-height: 60upx;
        text {
            display: block;
        }
    }

    .opcity {
        opacity: 0.5;
    }

    /* .scrollView {
        width: 100%;
        background: #fff;
        height: calc(100vh - 46px - 600upx);
    } */

    .search-bar {
        position: relative;
        padding: 8px 10px;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        background-color: #fff;
    }

    .icon-search {
        margin-right: 8px;
        font-size: inherit;
        height: 18px;
        position: relative;
        top: 3px;
    }

    .icon-search-in-box {
        position: absolute;
        left: 10px;
        top: 6px;
    }

    .search-bar-form {
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: auto;
        flex: auto;
        border-radius: 5px;
        background: #f0f0f0;
    }

    .search-bar-text {
        display: inline-block;
        font-size: 14px;
    }

    .search-bar-box {
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        width: 100%;
        box-sizing: border-box;
        z-index: 1;
    }

    .search-bar-input {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        display: inline-block;
    }

    .icon-clear {
        position: absolute;
        top: 0;
        right: 0;
        padding: 7px 8px;
        font-size: 0;
    }

    .search-bar-label {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        border-radius: 3px;
        text-align: center;
        color: #9b9b9b;
        background: #f0f0f0;
        line-height: 30px;
    }

    .cancel-btn {
        margin-left: 10px;
        line-height: 30px;
        color: #5982fd;
        white-space: nowrap;
        font-size: 15px;
    }

    .tui-list-cell {
        display: initial;
        padding: 30upx;
    }

    .addr-title {
        font-size: 30upx;
        line-height: 40upx;
        color: #000;
        font-weight: bold;
        width: 100%;
        padding-bottom: 20upx;
    }

    .addr-box {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .addr-detail {
        width: 450upx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        font-size: 24upx;
        color: #999;
    }

    .distance {
        color: #5982fd;
        padding-right: 6upx;
    }

    .addr-opera {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .opera-box {
        text-align: center;
        margin-left: 26upx;
    }

    .mini-img {
        width: 44upx;
        height: 44upx;
    }

    .text {
        color: #333;
        font-size: 24upx;
        line-height: 30upx;
    }
</style>
