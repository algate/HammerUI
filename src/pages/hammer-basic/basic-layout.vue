<template>
    <view class="bg-black">
        <view class="hammer-header bg-white">
            <view class="title">Layout</view>
            <view class="sub-title">布局：可设置百分比、Flex、Grid布局等</view>
        </view>
        <view class="hammer-box bg-white h-margin-top">
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
        <view class="grid grid-col-5 bg-white">
            <view class="bg-img grid-item" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">5等分 - 拉伸</view>
        </view>
        <view class="grid grid-col-5 bg-white">
            <view class="bg-img grid-item grid-margin-right-none flex-grow" v-for="(item,index) in avatar" v-if="index < 4" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">5等分 - 等宽等高</view>
        </view>
        <view class="grid grid-col-5 bg-white">
            <view class="bg-img-eq grid-item" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="hammer-box bg-brown light">
            <view class="sub-title">4等分</view>
        </view>
        <view class="grid grid-col-4">
            <view class="bg-img grid-item" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="grid grid-col-3">
            <view class="bg-img grid-item" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
        <view class="grid grid-col-2">
            <view class="bg-img grid-item" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                avatar:[
                    'http://shp.qpic.cn/ishow/2735092409/1569290387_84828260_13119_sProdImgNo_2.jpg/0',
                    'http://shp.qpic.cn/ishow/2735062811/1561692452_-695593207_23925_sProdImgNo_2.jpg/0',
                    'http://shp.qpic.cn/ishow/2735070910/1562640168_1186005513_17698_sProdImgNo_2.jpg/0',
                    'http://shp.qpic.cn/ishow/2735061310/1560394439_-695593207_21939_sProdImgNo_3.jpg/0',
                    'http://shp.qpic.cn/ishow/2735011517/1547545098_-888937974_18837_sProdImgNo_3.jpg/0'
                ]
            }
        },
        methods: {

        }
    }
</script>
