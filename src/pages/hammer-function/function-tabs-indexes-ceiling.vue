<template>
    <view class="container">
        <!--searchbox-->
        <view class="tui-searchbox">
            <view class="tui-search-input" @tap="search">
                <icon type="search" :size='15' color='#999'></icon>
                <text class="tui-search-text">搜索</text>
            </view>
        </view>
        <view class="tui-list-cell tui-cell-last" hover-class="tui-cell-hover" :hover-start-time="150" @tap="detail">
            <!-- <image src="../../../static/images/news/2.jpg" class="tui-img"></image> -->
            <hammer-icon from="iconfont" name="emoji" :size="40"></hammer-icon>
            <view class="tui-name">新的朋友</view>
        </view>
        <!--searchbox-->
        <!--联系人列表-->
        <block v-for="(list,index) in lists" :key="index">
            <tui-sticky :scrollTop="scrollTop" stickyHeight="66upx" :index="index" @change="stickyChange" @select="selectIndex">
                <!--tips:sticky组件中最好不要嵌套其他自定义组件-->
                <template v-slot:header>
                    <view class="tui-list-cell-divider">
                        {{list.letter}}
                    </view>
                </template>
                <template v-slot:content>
                    <view class="tui-list-cell" :class="{'tui-cell-last':last(list.data,index2)}" hover-class="tui-cell-hover"
                     :hover-start-time="150" @tap="detail" v-for="(item,index2) in list.data" :key="index2">
                        <!-- <image :src="'../../../static/images/news/'+((index2%2===0 && index2!==0)?'avatar_1.jpg':'avatar_2.jpg')" class="tui-img"></image> -->
                        <hammer-icon name="wechat" :size="40"></hammer-icon>
                        <view class="tui-name">{{item.name}}</view>
                    </view>
                </template>
            </tui-sticky>
        </block>
        <!--联系人列表-->
        <view class="tui-footer" v-if="lists.length">120位联系人</view>
        <view class="tui-indexed-list-bar" :style="{height:indexBarHeight+'px'}">
            <view @tap.stop="tapIndex(index3)" @touchstart.stop="touchStart" @touchmove.stop.prevent="touchMove" @touchend.stop="touchEnd" @touchcancel.stop="touchCancel" v-for="(items,index3) in lists" :key="index3" class="tui-indexed-list-text" :class="{'cur':selectLetterIndex==index3}" :style="{width:indexBarItemHeight+'px',height:indexBarItemHeight+'px','line-height':indexBarItemHeight+'px'}">
                {{items.letter=="well"?"#":items.letter}}
            </view>
        </view>
        <view class="tui-indexed-list-alert" v-if="touchmove && lists[touchmoveIndex].letter">
            <text>{{lists[touchmoveIndex].letter=="well"?"#":lists[touchmoveIndex].letter}}</text>
        </view>
    </view>
</template>

<script>
    const cityData = require('static/index.list.js')
    import tuiSticky from "@/components/sticky/sticky"
    export default {
        components: {
            tuiSticky
        },
        computed: {
            last() {
                return function(data, index) {
                    return data.length - 1 == index ? true : false
                }
            }
        },
        data() {
            return {
                lists: [],
                touchmove: false, // 是否在索引表上滑动
                touchmoveIndex: -1,
                titleHeight: 0, // A字距离窗口顶部的高度
                indexBarHeight: 0, // 索引表高度
                indexBarItemHeight: 0, // 索引表子项的高度
                winHeight: 0,
                scrollTop: 0,
                selectLetterIndex: 0
            }
        },
        onLoad: function(options) {
            const that = this;
            setTimeout(() => {
                uni.getSystemInfo({
                    success: function(res) {
                        let winHeight = res.windowHeight;
                        let barHeight = winHeight - uni.upx2px(232);
                        that.winHeight = winHeight;
                        that.indexBarHeight = barHeight;
                        that.indexBarItemHeight = barHeight / 25;
                        that.titleHeight = uni.upx2px(132);
                        that.lists = cityData.list
                    }
                })

            }, 10)
        },
        watch: {
            touchmoveIndex: function() {
                if (this.touchmoveIndex != -1) {
                    uni.pageScrollTo({
                        scrollTop: this.lists[this.touchmoveIndex].stickyTop,
                        duration: 0
                    })
                }
            }
        },
        methods: {
            touchStart(e) {
                this.touchmove = true
                let pageY = e.changedTouches[0].pageY - this.scrollTop;
                let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
                let item = this.lists[index]
                if (item) {
                    this.touchmoveIndex = index;
                }
            },
            tapIndex(index) {
                this.selectLetterIndex = index;
            },
            touchMove(e) {
                let pageY = e.changedTouches[0].pageY - this.scrollTop;
                let index = Math.floor((pageY - this.titleHeight) / this.indexBarItemHeight)
                let item = this.lists[index];
                if (item) {
                    this.touchmoveIndex = index;
                    this.selectLetterIndex = index;
                    console.log(this.selectLetterIndex);
                }
            },
            touchEnd() {
                this.touchmove = false;
                this.touchmoveIndex = -1
            },
            touchCancel() {
                this.touchmove = false;
                this.touchmoveIndex = -1
            },
            stickyChange: function(e) {
                let index = e.index;
                this.lists[index].stickyTop = e.top
            },
            selectIndex: function(e) {
                this.selectLetterIndex = e.index
            },
            search: function() {
                uni.navigateTo({
                    url: '../news-search/news-search'
                })
            }/*,
            detail: function() {
                uni.navigateTo({
                    url: '../chat/chat'
                })
            }*/
        },
        //页面滚动执行方式
        onPageScroll(e) {
            this.scrollTop = e.scrollTop
        }
    }
</script>

<style lang="scss">
    page {
        background: #f5f6fa;
    }
    .cur {
        color: #fff;
        background: $hammer-color;
        border-radius: 50%;
    }

    .container {
        padding-bottom: env(safe-area-inset-bottom);
    }

    /*searchbox*/

    .tui-searchbox {
        width: 100%;
        height: 100upx;
        padding: 0 30upx;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .tui-search-input {
        width: 100%;
        height: 72upx;
        background: #f5f6fa;
        border-radius: 36upx;
        font-size: 30upx;
        color: #a8abb8;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tui-search-text {
        padding-left: 16upx;
    }

    .tui-list-cell {
        position: relative;
        width: 100%;
        padding: 15upx 20upx;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        align-items: center;
        background: #fff;
        font-size: 32upx;
        color: #333;
    }

    .tui-cell-hover {
        background: #f7f7f9 !important;
    }

    .tui-list-cell::after {
        content: '';
        position: absolute;
        border-bottom: 1upx solid #ddd;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        bottom: 0;
        right: 30upx;
        left: 100upx;
    }

    .tui-cell-last::after {
        border-bottom: 0 !important;
    }

    /*searchbox*/

    .tui-img {
        width: 80upx;
        height: 80upx;
        border-radius: 50%;
    }

    .tui-name {
        width: 80%;
        padding-left: 30upx;
        font-size: 34upx;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .tui-list-cell-divider {
        height: 66upx;
        padding-left: 30upx;
        font-size: 26upx;
        color: #555;
        background: #f5f6fa;
        padding: 0 30upx;
        display: flex;
        align-items: center;
        font-weight: bold;
        box-sizing: border-box;
    }

    .tui-indexed-list-bar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        z-index: 999999;
        position: fixed;
        top: 132upx;
        /* #ifdef H5 */
        top: 220upx;
        /* #endif */
        right: 0;
        padding-right: 10upx;
        width: 44upx;
        color: #555;
        font-weight: bold;
    }

    .tui-indexed-list-text {
        font-size: 22upx;
        text-align: center;
    }

    .tui-indexed-list-alert {
        position: fixed;
        width: 120upx;
        height: 120upx;
        right: 90upx;
        top: 50%;
        margin-top: -60upx;
        border-radius: 24upx;
        font-size: 50upx;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.65);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        z-index: 9999999;
    }

    .tui-indexed-list-alert text {
        line-height: 50upx;
    }

    .tui-footer {
        padding: 30upx 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30upx;
        color: #999;
    }
</style>
