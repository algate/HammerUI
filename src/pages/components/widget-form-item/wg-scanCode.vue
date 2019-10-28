<template>
    <view v-if="element.type == 'scanCode'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <view>
                <hammer-icon from="tui" name="sweep" :size="28"  @tap="scanCode"></hammer-icon>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    methods: {
        scanCode() {
            console.log('要扫码了');
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
        }
    }
}
</script>
