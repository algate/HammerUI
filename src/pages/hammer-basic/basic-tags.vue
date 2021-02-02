<template>
    <view class="bg-black">
        <view class="hammer-header bg-white">
            <view class="title">Tags+Badge</view>
            <view class="sub-title">标签+徽章标记：设置标签的颜色、样式、徽章标记等</view>
        </view>
        <view class="hammer-box bg-white h-margin-top">
            <view class="title">标签颜色</view>
        </view>
        <view class="h-margin-top h-padding-left-right">
            <view class="hammer-flex flex-wrap flex-grow">
                <view class="h-col-4 flex-item hammer-tag" :class="'bg-' + item.name" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='gray'">
                    <view>{{item.title}} {{`bg-${item.name}`}}</view>
                </view>
            </view>
            <view class="hammer-flex flex-wrap flex-grow">
                <view class="h-col-4 flex-item hammer-tag light" :class="'bg-' + item.name" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='gray' && item.name!='black' && item.name!='white'">
                    <view>{{item.title}} {{`bg-${item.name} light`}}</view>
                </view>
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class="sub-title">镂空标签</view>
        </view>
        <view class="grid">
            <view style="margin:0 10px 10px 0;" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'">
                <view class='hammer-tag' style="width:40px;" :class="'line-' + item.name">{{item.title}}</view>
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class="sub-title">胶囊样式
            </view>
        </view>
        <view style="margin:10px;">
            <view class="hammer-tag bg-red" style="width: 40px;">
                <hammer-icon from="iconfont" name="like" :size="20" color="#fff"></hammer-icon>
            </view>
            <view class="hammer-tag line-red" style="width: 40px;">
                12
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class="title">Badge</view>
        </view>
        <view class="grid grid-col-4">
            <view class="bg-green grid-item bg-img-eq">
                <view class="hammer-badge bg-mauve">99+</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                ColorList: [{
                    title: '嫣红',
                    name: 'red',
                    color: '#e54d42'
                },
                {
                    title: '桔橙',
                    name: 'orange',
                    color: '#f37b1d'
                },
                {
                    title: '明黄',
                    name: 'yellow',
                    color: '#fbbd08'
                },
                {
                    title: '橄榄',
                    name: 'olive',
                    color: '#8dc63f'
                },
                {
                    title: '森绿',
                    name: 'green',
                    color: '#39b54a'
                },
                {
                    title: '天青',
                    name: 'cyan',
                    color: '#1cbbb4'
                },
                {
                    title: '海蓝',
                    name: 'blue',
                    color: '#0081ff'
                },
                {
                    title: '姹紫',
                    name: 'purple',
                    color: '#6739b6'
                },
                {
                    title: '木槿',
                    name: 'mauve',
                    color: '#9c26b0'
                },
                {
                    title: '桃粉',
                    name: 'pink',
                    color: '#e03997'
                },
                {
                    title: '棕褐',
                    name: 'brown',
                    color: '#a5673f'
                },
                {
                    title: '玄灰',
                    name: 'grey',
                    color: '#8799a3'
                },
                {
                    title: '草灰',
                    name: 'gray',
                    color: '#aaaaaa'
                }/*,
                {
                    title: '墨黑',
                    name: 'black',
                    color: '#333333'
                },
                {
                    title: '雅白',
                    name: 'white',
                    color: '#ffffff'
                }*/]
            };
        }
    }
</script>
<style lang="scss">

.flex-item {
    text-align: center;
    padding: 40rpx;
    margin-bottom: 20rpx;
}
.flex-item-mini {
    text-align: center;
    padding: 10rpx;
    margin-bottom: 20rpx;
}
</style>
