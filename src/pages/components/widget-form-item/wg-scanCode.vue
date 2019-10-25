<template>
    <view v-if="element.type == 'scanCode'">
        <view class="cu-bar bg-white solid-bottom">
            <view class="action">{{element.name}}</view>
            <view class="action">
                <text class="cuIcon-scan" @tap="scanCode"></text>
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
            uni.scanCode({
                success: function (res) {
                    console.log('条码类型：' + res.scanType);
                    console.log('条码内容：' + res.result);
                }
            });
            // JS-SDK 调用 npm install jweixin-module --save
            /*this.$snbc.$wx.ready(res => {
                console.log(this, res);
            })*/
        }
    }
}
</script>
