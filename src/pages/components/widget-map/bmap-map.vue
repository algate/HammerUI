<template>
    <view class="mapPage">
        <view id="allBMap"></view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                //地图对象
                BmapObject: null
            }
        },
        computed: {
            /*lang() {
                return this.$t('message');
            }*/
        },
        mounted() {
            uni.showLoading({
                // title: this.lang.global.loading,
                title: '百度地图加载中……',
                mask: true
            });
            this.$hammer.$loadBMap.init().then(res => {
                this.BmapObject = new BMap.Map('allBMap');
                this.BmapObject.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
                this.BmapObject.enableScrollWheelZoom(true);
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
    height: 400rpx;

    #allBMap {
        width: 100%;
        height: 400rpx;
    }
}
</style>
