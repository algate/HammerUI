<template>
    <view v-if="element.type == 'picture'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
        </view>
        <view class="bg-white">
            <view class="grid grid-col-4">
                <view class="grid-item bg-img-eq" v-for="(item,index) in element.options.options" :key="index" :style="[{ backgroundImage:'url(' + item + ')' }]"></view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    name: 'WgPicture',
    props: {
        element: {
            type: Object
        }
    }
}
</script>
