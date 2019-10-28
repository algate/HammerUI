<template>
    <view class="bg-black">
        <view class="hammer-box bg-white">
            <view class="title">Flex</view>
        </view>
        <view class="hammer-box h-margin-top bg-brown light">
            <view class="sub-title">%比percent</view>
        </view>
        <view class="hammer-flex-box">
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-col-12">h-col-12：100%</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-col-6">h-col-6：50%</view>
                <view class="flex-item bg-blue h-col-6">h-col-6：50%</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-col-4">h-col-4：33.33%</view>
                <view class="flex-item bg-blue h-col-4">h-col-4：33.33%</view>
                <view class="flex-item bg-olive h-col-4">h-col-4：33.33%</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-col-4">h-col-3：25%</view>
                <view class="flex-item bg-blue h-col-4">h-col-3：25%</view>
                <view class="flex-item bg-olive h-col-4">h-col-3：25%</view>
                <view class="flex-item bg-orange h-col-4">h-col-3：25%</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-col-8">h-col-8：66.66%</view>
                <view class="flex-item bg-blue h-col-4">h-col-4：33.33%</view>
            </view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">Flex布局 - Flex</view>
        </view>
        <view class="hammer-flex-box">
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-flex-1">h-flex-1</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-flex-1">h-flex-1</view>
                <view class="flex-item bg-blue h-flex-1">h-flex-1</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-flex-1">h-flex-1</view>
                <view class="flex-item bg-blue h-flex-1">h-flex-1</view>
                <view class="flex-item bg-olive h-flex-1">h-flex-1</view>
            </view>
            <view class="hammer-flex">
                <view class="flex-item bg-olive h-flex-1">h-flex-1</view>
                <view class="flex-item bg-blue h-flex-2">h-flex-2</view>
            </view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">Flex - 水平对齐-Justify</view>
        </view>
        <view class="hammer-flex-box">
            <view class="hammer-flex justify-start">
                <view class="flex-item bg-olive">start</view>
                <view class="flex-item bg-blue">start</view>
            </view>
            <view class="hammer-flex justify-end">
                <view class="flex-item bg-olive">end</view>
                <view class="flex-item bg-blue">end</view>
            </view>
            <view class="hammer-flex justify-center">
                <view class="flex-item bg-olive">center</view>
                <view class="flex-item bg-blue">center</view>
            </view>
            <view class="hammer-flex justify-between">
                <view class="flex-item bg-olive">between</view>
                <view class="flex-item bg-blue">between</view>
            </view>
            <view class="hammer-flex justify-around">
                <view class="flex-item bg-olive">around</view>
                <view class="flex-item bg-blue">around</view>
            </view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">Flex-垂直对齐-Align</view>
        </view>
        <view class="hammer-flex-box">
            <view class="hammer-flex align-start">
                <view class="flex-item bg-olive">start</view>
                <view class="flex-item-mini bg-blue">start</view>
            </view>
            <view class="hammer-flex align-center">
                <view class="flex-item bg-olive">center</view>
                <view class="flex-item-mini bg-blue">center</view>
            </view>
            <view class="hammer-flex align-end">
                <view class="flex-item bg-olive">end</view>
                <view class="flex-item-mini bg-blue">end</view>
            </view>
            <view class="hammer-flex align-stretch">
                <view class="flex-item bg-olive">stretch</view>
                <view class="flex-item-mini bg-blue">stretch</view>
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class="title">Grid</view>
        </view>
        <view class="hammer-box bg-white h-margin-top">
            <view class="title">Gid - 1、2、3、4、5等分</view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">5等分 - 未拉伸</view>
        </view>
        <view class="grid grid-item grid-col-5 bg-white">
            <view class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">5等分 - 拉伸</view>
        </view>
        <view class="grid grid-item grid-col-5 bg-white flex-grow">
            <view class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">4等分</view>
        </view>
        <view class="grid grid-item grid-col-4">
            <view class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="grid grid-item grid-col-3">
            <view class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="grid grid-item grid-col-2">
            <view class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg']
            }
        },
        methods: {

        }
    }
</script>
