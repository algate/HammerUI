<template>
    <view v-if="element.type == 'map'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}} - 组件腾讯地图</view>
        </view>
        <view>
            <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
            </map>
        </view>
        <view class="hammer-box bg-white">
            <view class="sub-title">百度地图-JavaScriptSDK</view>
        </view>
        <view>
            <BmapMap></BmapMap>
        </view>
        <view class="hammer-box bg-white">
            <view class="sub-title">高德地图-JavaScriptSDK</view>
        </view>
        <view>
            <AmapMap></AmapMap>
        </view>
    </view>
</template>
<script>
import BmapMap from "pages/components/widget-map/bmap-map"
import AmapMap from "pages/components/widget-map/amap-map"
export default {
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    components:{
        BmapMap,
        AmapMap
    },
    data () {
        return {
            title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742
            }, {
                latitude: 39.90,
                longitude: 116.39
            }]
        }
    }
}
</script>
