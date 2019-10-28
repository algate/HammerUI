<template>
    <view class="bg-black">
        <view class="hammer-box bg-white">
            <view class='title'>
                <text class='cuIcon-title text-blue'></text>标签颜色
            </view>
        </view>
        <view>
        <!-- <view class="grid"> -->
            <view class="grid">
                <view style="margin:0 10px 10px 0;" v-for="(item,index) in ColorList" :key="item.name + index" v-if="item.name!='gray'">
                    <view class='cu-tag' :class="'bg-' + item.name">{{item.title}} {{`bg-${item.name}`}}</view>
                </view>
            </view>
            <view class="grid">
                <view style="margin:0 10px 10px 0;" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='gray' && item.name!='black' && item.name!='white'">
                    <view class='cu-tag light' :class="'bg-' + item.name">{{item.title}} {{`bg-${item.name} light`}}</view>
                </view>
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class='sub-title'>
                镂空标签
            </view>
        </view>
        <view class="grid">
            <view style="margin:0 10px 10px 0;" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'">
                <view class='cu-tag' :class="'line-' + item.name">{{item.title}}</view>
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class='sub-title'>胶囊样式
            </view>
        </view>
        <view style="margin:10px;">
            <view class='cu-tag bg-red'>
                <hammer-icon from="iconfont" name="like" :size="20"></hammer-icon>
            </view>
            <view class="cu-tag line-red">
                12
            </view>
        </view>
        <view class="hammer-box bg-white">
            <view class='sub-title'>
                <text class='cuIcon-title text-blue'></text>数字标签
            </view>
        </view>
        <view class="grid grid-item grid-col-4">
            <view class="bg-green">
                <view class="cu-tag badge bg-mauve">99+</view>
            </view>
            <view class="bg-green light" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);background-size: cover;background-position: 50%;">
                <view class='cu-tag badge bg-mauve'>9</view>
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
.cu-tag {
    font-size: 24rpx;
    vertical-align: middle;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0rpx 16rpx;
    height: 48rpx;
    font-family: Helvetica Neue, Helvetica, sans-serif;
    white-space: nowrap;
}
.cu-tag[class*="line-"]::after {
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1rpx solid currentColor;
    transform: scale(0.5);
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: inherit;
    z-index: 1;
    pointer-events: none;
}
.badge {
    border-radius: 200rpx;
    position: absolute;
    top: -10rpx;
    right: -10rpx;
    font-size: 20rpx;
    padding: 0rpx 10rpx;
    height: 28rpx;
    color: #ffffff;
}
.line-red::after,
.lines-red::after {
    border-color: #e54d42;
}

.line-orange::after,
.lines-orange::after {
    border-color: #f37b1d;
}

.line-yellow::after,
.lines-yellow::after {
    border-color: #fbbd08;
}

.line-olive::after,
.lines-olive::after {
    border-color: #8dc63f;
}

.line-green::after,
.lines-green::after {
    border-color: #39b54a;
}

.line-cyan::after,
.lines-cyan::after {
    border-color: #1cbbb4;
}

.line-blue::after,
.lines-blue::after {
    border-color: #0081ff;
}

.line-purple::after,
.lines-purple::after {
    border-color: #6739b6;
}

.line-mauve::after,
.lines-mauve::after {
    border-color: #9c26b0;
}

.line-pink::after,
.lines-pink::after {
    border-color: #e03997;
}

.line-brown::after,
.lines-brown::after {
    border-color: #a5673f;
}

.line-grey::after,
.lines-grey::after {
    border-color: #8799a3;
}

.line-gray::after,
.lines-gray::after {
    border-color: #aaaaaa;
}

.line-black::after,
.lines-black::after {
    border-color: #333333;
}

.line-white::after,
.lines-white::after {
    border-color: #ffffff;
}
.text-red,
.line-red,
.lines-red {
    color: #e54d42;
}

.text-orange,
.line-orange,
.lines-orange {
    color: #f37b1d;
}

.text-yellow,
.line-yellow,
.lines-yellow {
    color: #fbbd08;
}

.text-olive,
.line-olive,
.lines-olive {
    color: #8dc63f;
}

.text-green,
.line-green,
.lines-green {
    color: #39b54a;
}

.text-cyan,
.line-cyan,
.lines-cyan {
    color: #1cbbb4;
}

.text-blue,
.line-blue,
.lines-blue {
    color: #0081ff;
}

.text-purple,
.line-purple,
.lines-purple {
    color: #6739b6;
}

.text-mauve,
.line-mauve,
.lines-mauve {
    color: #9c26b0;
}

.text-pink,
.line-pink,
.lines-pink {
    color: #e03997;
}

.text-brown,
.line-brown,
.lines-brown {
    color: #a5673f;
}

.text-grey,
.line-grey,
.lines-grey {
    color: #8799a3;
}

.text-gray,
.line-gray,
.lines-gray {
    color: #aaaaaa;
}

.text-black,
.line-black,
.lines-black {
    color: #333333;
}

.text-white,
.line-white,
.lines-white {
    color: #ffffff;
}
</style>
