<template>
    <view v-if="element.type == 'picture'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
        </view>
        <view class="hammer-box bg-white">
            <view class="grid col-4 grid-square">
                <view class="bg-img" v-for="(item,index) in element.options.options" :key="index" :style="[{ backgroundImage:'url(' + item + ')' }]"></view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object
        }
    }
}
</script>
