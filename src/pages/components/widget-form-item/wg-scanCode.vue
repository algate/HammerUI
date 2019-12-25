<template>
    <view v-if="element.type == 'scanCode'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <view class="sub-title">
                <hammer-icon name="sweep" :size="20" @tap="scanCode"></hammer-icon>
            </view>
        </view>
        <view class="hammer-box bg-white" ng-if="assetCode?true:false">
            <view class="sub-title">编码：</view>
            <view class="sub-title">{{assetCode}}</view>
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
            assetCode: ''
        }
    },
    methods: {
        scanCode() {
            console.log('要扫码了');
            this.assetCode = "WeChat上才能测试";
            // #ifdef MP-WEIXIN
            uni.scanCode({
                success: function (res) {
                    console.log('条码类型：' + res.scanType);
                    console.log('条码内容：' + res.result);
                }
            });
            // #endif
            // JS-SDK 调用 npm install jweixin-module --save
            /*this.$hammer.$wx.ready(res => {
                console.log(this, res);
            })*/
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
