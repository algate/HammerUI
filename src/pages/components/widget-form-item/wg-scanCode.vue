<template>
    <view v-if="element.type == 'scanCode'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <view class="sub-title">
                <hammer-icon name="sweep" :size="20" @tap="scanCodeWX"></hammer-icon>
            </view>
        </view>
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">扫码直接返回结果</view>
            <view class="sub-title">
                <hammer-icon name="sweep" :size="20" @tap="scanCodeOR"></hammer-icon>
            </view>
        </view>
        <view class="hammer-box bg-white" ng-if="code.assetCode?true:false">
            <view class="sub-title">编码：</view>
            <view class="sub-title">{{code.assetCode}}</view>
        </view>
        <view class="hammer-box bg-white" ng-if="code.modelCode?true:false">
            <view class="sub-title">型号：</view>
            <view class="sub-title">{{code.modelCode}}</view>
        </view>
    </view>
</template>
<script>
export default {
    name: 'WgScanCode',
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            code: {
                assetCode: '',
                modelCode: ''
            }
        }
    },
    methods: {
        scanCodeWX() {
            this.assetCode = "微信处理返回扫码";
            // #ifdef MP-WEIXIN
            let that = this;
            uni.scanCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"],
                success: function (res) {
                    console.log('条码类型：' + res.scanType);
                    console.log('条码内容：' + res.result);
                    // var attrList = res.result.split(/[\n,]/g);
                    // console.log(attrList);
                    let result = JSON.stringify(res.result);
                    uni.showModal({
                        title: "微信扫码结果",
                        content: result,
                        confirmColor: "#00AB98",
                        success: (res) => {
                            if (res.confirm) {
                                uni.setClipboardData({
                                    data: result,
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
                            }
                        }
                    })
                }
            });
            // #endif
            // JS-SDK 调用 npm install jweixin-module --save
            /*this.$hammer.$wx.ready(res => {
                console.log(this, res);
            })*/
        },
        scanCodeOR() {
            this.assetCode = "直接返回扫码结果";
            // #ifdef MP-WEIXIN
            let that = this;
            uni.scanCode({
                needResult: 1,
                scanType: ["qrCode", "barCode"],
                success: function (res) {
                    console.log('条码类型：' + res.scanType);
                    console.log('条码内容：' + res.result);
                    let result = JSON.stringify(res.result);
                    uni.showModal({
                        title: "未处理扫码结果",
                        content: result,
                        confirmColor: "#00AB98",
                        success: (res) => {
                            if (res.confirm) {
                                uni.setClipboardData({
                                    data: result,
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
                            }
                        }
                    })
                }
            });
            // #endif
        },
        getValue() {
            if (this.$props.element.type !== 'scanCode') {
                return null;
            }
            let data = {};
            data[this.$props.element.model] = this.assetCode;
            return  data;
        }
    }
}
</script>
