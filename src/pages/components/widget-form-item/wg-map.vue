<template>
    <view v-if="element.type == 'map'">
        <view class="cu-bar bg-white margin-top">
            <view class="action">{{element.name}}</view>
        </view>
        <view class="page-section page-section-gap">
            <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
            </map>
        </view>
        <view class="cu-bar bg-white margin-top">
            <view class="action">百度地图</view>
        </view>
        <view class="page-section page-section-gap">
            <BmapMap></BmapMap>
        </view>
        <view class="cu-bar bg-white margin-top">
            <view class="action">高德地图</view>
        </view>
        <view class="page-section page-section-gap">
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
