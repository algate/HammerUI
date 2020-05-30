<template>
    <view class="mapPage">
        <view id="allAMap"></view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                //地图对象
                AmapObject: null
            }
        },
        /*computed: {
            lang() {
                return this.$t('message');
            }
        },*/
        mounted() {
            uni.showLoading({
                title: "高德地图加载中……",
                mask: true
            });
            this.$hammer.$loadAMap.init().then(res => {
                this.AmapObject = new AMap.Map('allAMap');
                uni.hideLoading();
            }).catch((err) => {
                uni.hideLoading();
                console.log('request fail', err);
            });
        },
        methods: {
            // 方法
        }
    }
</script>
<style lang="scss">
    .mapPage {
        width: 100%;
        height: 400upx;

        #allAMap {
            width: 100%;
            height: 400upx;
        }
    }
</style>
