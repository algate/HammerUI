<template>
    <view class="view-wrap">
        <scroll-view class="scroll-view" :style="{height: 'calc(100vh - ' + topSizeSub + bottomSize + 'upx)'}" scroll-y :scroll-top="scrollTop" @scroll="scroll">
            <view class="block-wrap">
                <view class="block" v-for="(item, index) in list" :key="index">
                    <view v-if="index == listItemCur" class="block__title block__title--cur" :style="{color: color}">
                        <view class="title-item" :style="style1">{{item.key}}</view>
                    </view>
                    <view v-else-if="index == listItemCur + 1" class="block__title">
                        <view class="title-item" :style="style2">{{item.key}}</view>
                    </view>
                    <view v-else class="block__title">
                        <view class="title-item">{{item.key}}</view>
                    </view>
                    <view class="block__item" v-for="(item, j) in item.data" :key="j" :for-index="j" @tap="itemClick" :data-i="index" :data-j="j">
                        <view class="item">
                            <view class="item__hd" :style="{background: item.color}">
                                {{item.firstChar}}
                            </view>
                            <view class="item__bd">
                                <view class="info__name">{{item.name}}-{{item.short}}</view>
                                <view class="info__title">{{item.code}}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="indicator" :class="[touching && indicatorTop != -1 ? 'indicator--show' : '', treeKeyTran ? 'indicator--tran' : '']" :style="{top: indicatorTop + 'px'}">
                {{listData.length > 0 ? listData[treeItemCur].key : ''}}
            </view>
            <view id="tree" class="tree" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
                <view class="tree__item" :class="[index === treeItemCur ? 'tree__item--cur' : '']" v-for="(item, index) in listData" :key="index">
                    <view class="key" :style="{background: index === treeItemCur ? color : 'initial'}">{{item.key}}</view>
                </view>
            </view>
        </scroll-view>
        <view v-if="list.length === 0 && emptyShow" class="view-wrap__empty">
            <hammer-icon name="nodata" :size="40"></hammer-icon>
            <view class="empty-text">{{emptyText}}</view>
        </view>
    </view>
</template>
<script>
// rgb to hex
function rgbToHex(r, g, b) {
    var hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
}

// hex to rgb
function hexToRgb(hex) {
    var rgb = [];
    for (var i = 1; i < 7; i += 2) {
        rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
    }
    return rgb;
}

// 计算渐变过渡色
function gradient(startColor, endColor, step) {
    //将hex转换为rgb
    var sColor = hexToRgb(startColor),
        eColor = hexToRgb(endColor);

    //计算R\G\B每一步的差值
    var rStep = (eColor[0] - sColor[0]) / step,
        gStep = (eColor[1] - sColor[1]) / step,
        bStep = (eColor[2] - sColor[2]) / step;

    var gradientColorArr = [];
    for (var i = 0; i < step; i++) {
        //计算每一步的hex值
        gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
    }
    return gradientColorArr;
}

// 生成随机颜色值
function  generateColor() {
    let color="#";
    for(let i=0;i<6;i++){
        color += (Math.random()*16 | 0).toString(16);
    }
    return color;
}
export default {
    props: {
        // 数据源
        listData: {
            type: Array,
            default: [],
            observer: "dataChange"
        },
        // 颜色
        color: {
            type: String,
            default: "#00AB98"
        },
        // 顶部高度
        topSize: {
            type: Number,
            default: 0,
            observer: 'dataChange'
        },
        // 底部高度
        bottomSize: {
            type: Number,
            default: 0,
            observer: 'dataChange'
        },
        // 空状态的文字提示
        emptyText: {
            type: String,
            default: "未找到数据"
        },
        // 控制空状态的显示
        emptyShow: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            list: [], // 处理后数据
            treeItemCur: 0, // 索引树的聚焦项
            listItemCur: 0, // 节点树的聚焦项
            touching: false, // 是否在触摸索引树中
            scrollTop: 0, // 节点树滚动高度
            indicatorTop: -1, // 指示器顶部距离
            treeKeyTran: false,
            style1: "",
            style2: "",
            treeInfo: {},
            topSizeSub: this.topSize
        }
    },
    // #ifdef H5
    mounted() {
        console.log(`init listData length: ${this.listData.length}`)
        if(this.listData.length > 0) {
            this.initData();
            setTimeout(() => this.init(),10)
        }
    },
    // #endif
    // #ifdef MP-WEIXIN
    onReady() {
        if(this.listData.length > 0) {
            this.initData();
            setTimeout(() => this.init(),0)
        }
    },
    // #endif
    methods: {
        /**
         * scroll-view 滚动监听
         */
        scroll(e) {
            if (this.touching) return;
            let scrollTop = e.detail.scrollTop;
            // 大于最大滚动距离时候返回
            if (scrollTop > this.maxScrollTop) return;
            // 处理未获到 blocks 异常时候返回
            if (!this.blocks) return;
            let blocks = this.blocks;
            // 计算获得 .block__title 高度
            let stickyTitleHeight = this.remScale * 30
            for (let i = blocks.length - 1; i >= 0; i--) {
                let block = blocks[i];
                // 判断当前滚动值 scrollTop 所在区间, 以得到当前聚焦项
                if (scrollTop >= block.top && scrollTop < block.bottom) {
                    // 判断当前滚动值 scrollTop 是否在当前聚焦项底一个 .block__title 高度范围内, 如果是则开启过度色值计算
                    if (scrollTop > block.bottom - stickyTitleHeight) {
                        let percent = Math.floor(((scrollTop - (block.bottom - stickyTitleHeight)) / stickyTitleHeight) * 100);
                        let style1 = `background: rgba(237, 237, 237, ${percent}%);color: ${this.colors[percent]}`;
                        let style2 = `background: rgba(237, 237, 237, ${100 - percent}%);color: ${this.colors[100 - percent]}`;
                        /*this.setData({
                            style1: style1,
                            style2: style2,
                            treeItemCur: i,
                            listItemCur: i
                        });*/
                        this.style1 = style1;
                        this.style2 = style2;
                        this.treeItemCur = i;
                        this.listItemCur = i;
                    } else if (scrollTop <= block.bottom - stickyTitleHeight) {
                        /*this.setData({
                            style1: "",
                            style2: "",
                            treeItemCur: i,
                            listItemCur: i
                        });*/
                        this.style1 = '';
                        this.style2 = '';
                        this.treeItemCur = i;
                        this.listItemCur = i;
                    }
                    break;
                }
            }
        },
        /**
         * 触摸之后后设置对应value
         */
        setValue(treeItemCur) {
            if (treeItemCur == this.treeItemCur) return;
            if(!(this.blocks && this.blocks[treeItemCur])) return;
            let {scrollTop, scrollIndex} = this.blocks[treeItemCur];
            let indicatorTop = this.indicatorTopList[treeItemCur];
            /*this.setData({
                style1: "",
                style2: "",
                treeItemCur: treeItemCur,
                scrollTop: scrollTop,
                listItemCur: scrollIndex,
                indicatorTop: indicatorTop
            });*/
            this.style1 = '';
            this.style2 = '';
            this.treeItemCur = treeItemCur;
            this.listItemCur = scrollIndex;
            this.scrollTop = scrollTop;
            this.indicatorTop = indicatorTop;
            if(this.platform != "devtools") wx.vibrateShort();
        },
        /**
         * tree 触摸开始
         */
        touchStart(e) {
            // 获取触摸点信息
            let startTouch = e.changedTouches[0];
            console.log(e);
            if(!startTouch) return;
            // this.setData({touching: true});
            this.touching = true;
            let treeItemCur = this.getCurrentTreeItem(startTouch.pageY);
            this.setValue(treeItemCur);
        },
        /**
         * tree 触摸移动
         */
        touchMove(e) {
            // 获取触摸点信息
            let currentTouch = e.changedTouches[0];
            console.log(e);
            if(!currentTouch) return;
            // 滑动结束后迅速开始第二次滑动时候 touching 为 false 造成不显示 indicator 问题
            if(!this.touching) {
                /*this.setData({
                    touching: true
                });*/
                this.touching = true;
            }
            let treeItemCur = this.getCurrentTreeItem(currentTouch.pageY);
            this.setValue(treeItemCur);
        },
        /**
         * tree 触摸结束
         */
        touchEnd(e) {
            let {treeItemCur, listItemCur} = this;
            if (treeItemCur != listItemCur) {
                /*this.setData({
                    treeItemCur: listItemCur,
                    indicatorTop: this.indicatorTopList[treeItemCur]
                });*/
                this.treeItemCur = listItemCur;
                this.indicatorTop = this.indicatorTopList[treeItemCur]
            }
            /*this.setData({
                treeKeyTran: true
            });*/
            this.treeKeyTran = true;
            setTimeout(() => {
                /*this.setData({
                    touching: false,
                    treeKeyTran: false
                });*/
                this.touching = false;
                this.treeKeyTran = false;
            }, 300);
        },
        /**
         * 获取当前触摸的 tree-item
         * @param pageY: 当前触摸点pageY
         */
        getCurrentTreeItem(pageY) {
            console.log(this.treeInfo)
            let {top, bottom, itemHeight, len} = this.treeInfo;
            if (pageY < top) {
                return 0
            } else if (pageY >= bottom) {
                return len - 1
            } else {
                return Math.floor((pageY - top) / itemHeight)
            }
        },
        /**
         *  初始化处理数据, 不于 init 方法合并以防止2.7.1版本及以下版本无法及时获取到dom信息
         */
        initData(){
            let list = this.listData.map((item, index) => {
                let data = item.data.map((chItem, chIndex) => {
                    return {
                        firstChar: chItem.name.slice(0,1),
                        color: generateColor(),
                        ...chItem
                    }
                });
                item.data = data;
                return item
            });
            /*this.setData({
                list: list
            });*/
            console.log(list);
            this.list =  list;
        },
        /**
         *  初始化函数
         */
        init() {
            // 获取主题色到灰色之间100阶色值
            this.colors = gradient(this.color, "#767676", 100);
            // 获取系统信息
            let {windowHeight, windowWidth, platform} = wx.getSystemInfoSync();
            this.platform = platform;
            // 计算缩放比
            this.remScale = (windowWidth || 375) / 375;
            this.topSizeSub = this.topSizeSub * this.remScale / 2;
            this.bottomSize = this.bottomSize * this.remScale / 2;
            // 获取索引树元素信息
            this.createSelectorQuery().select("#tree").boundingClientRect((res) => {
                // 保存索引树节点信息
                this.treeInfo = {
                    len: this.listData.length,
                    itemHeight: res.height / this.listData.length,
                    top: res.top,
                    bottom: res.top + res.height
                };
                // 保存指示器节点信息
                let indicatorTopList = this.listData.map((item, index) => {
                    let {top, itemHeight} = this.treeInfo, remScale = this.remScale;
                    let indicatorTop = itemHeight / 2 + index * itemHeight + top - remScale * 25;
                    return indicatorTop
                });
                this.indicatorTopList = indicatorTopList;
            }).exec();

            // 获取整个列表元素信息
            this.createSelectorQuery().select(".block-wrap").boundingClientRect((res) => {
                // 获取最大滚动高度
                let maxScrollTop = Math.round(res.height - (windowHeight - this.topSizeSub - this.bottomSize));
                this.maxScrollTop = maxScrollTop;
                // 获取每个块的节点信息
                this.createSelectorQuery().selectAll(".block").boundingClientRect((res) => {
                    // 获取最大滚动项的index
                    let maxScrollIndex = -1;
                    // 保存每个块的 top 和 bottom 信息
                    let blocks = res.map((item, index) => {
                        let top = Math.round(item.top - this.topSizeSub) , bottom = Math.round(item.top + item.height - this.topSizeSub) ;
                        let scrollTop = top >= maxScrollTop ? maxScrollTop : top;
                        if (maxScrollTop >= top && maxScrollTop < bottom) {
                            maxScrollIndex = index;
                        }
                        let scrollIndex = maxScrollIndex == -1 ? index : maxScrollIndex;
                        return {
                            scrollTop: scrollTop,
                            scrollIndex: scrollIndex,
                            top: top,
                            bottom: bottom
                        }
                    });
                    this.blocks = blocks;
                }).exec();
            }).exec();
        },
        /**
         * 清除参数
         */
        clearData() {
            /*this.setData({
                treeItemCur: 0, // 索引树的聚焦项
                listItemCur: 0, // 节点树的聚焦项
                touching: false, // 是否在触摸索引树中
                scrollTop: 0, // 节点树滚动高度
                indicatorTop: -1, // 指示器顶部距离
                treeKeyTran: false,
                style1: "",
                style2: ""
            });*/
            this.treeItemCur = 0 // 索引树的聚焦项
            this.listItemCur = 0 // 节点树的聚焦项
            this.touching = false // 是否在触摸索引树中
            this.scrollTop = 0 // 节点树滚动高度
            this.indicatorTop = -1 // 指示器顶部距离
            this.treeKeyTran = false
            this.style1 = ""
            this.style2 = ""
        },
        /**
         * 监听列数变化, 如果改变重新初始化参数
         */
        dataChange(newVal, oldVal) {
            // 防止初次进入init方法无法获取到dom信息
            if(newVal.length > 0 || (oldVal.length > 0 && newVal.length == 0)) {
                this.clearData();
                this.initData();
                setTimeout(() => this.init(),10)
            }
        },
        /**
         * 点击每一项后触发事件
         */
        itemClick(e) {
            console.log(e);
            let {i, j} = e.currentTarget.dataset;
            let data = this.list[i].data[j];
            // this.triggerEvent('click', data);
            this.$emit('click', data);
        }
    }
}
</script>
<style lang="scss">
.view-wrap {
    width: 100vw;
    overflow: hidden;
    position: relative;
}

.view-wrap__empty {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30upx;
    text-align: center;
}

.view-wrap .empty-image {
    width: 200upx;
    height: 200upx;
    margin: 160upx auto 60upx;
}

.view-wrap .empty-text {
    color: #999999;
}

.scroll-view {
    width: calc(100vw + 20upx);
}

.block-wrap {
    position: relative;
    width: 100%;
    padding-right: 20upx;
    box-sizing: border-box;
}

.sticky-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #f7f7f7;
    font-weight: bold;
    padding: 10upx 20upx;
    z-index: 1;
}

.indicator {
    position: fixed;
    right: 140upx;
    width: 100upx;
    height: 100upx;
    border-radius: 10upx;
    text-align: center;
    line-height: 100upx;
    color: #ffffff;
    font-size: 60upx;
    font-weight: bold;
    display: none;
    z-index: 3;
}

.indicator:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 100% 0% 100% 100%;
    background: rgba(0, 0, 0, 0.3);
    transform: rotate(45deg);
}

.indicator--show {
    display: block;
}

.indicator--tran {
    display: block;
    opacity: 0;
    transition: opacity 0.3s linear;
}

.tree {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 3;
}

.tree__item {
    font-size: 20upx;
    padding: 0upx 8upx;
    color: #666666;
    font-weight: bold;
}

.tree__item>.key {
    width: 32upx;
    height: 32upx;
    border-radius: 50%;
    line-height: 32upx;
}

.tree__item--cur>.key {
    background: #3F82FD;
    color: #FFFFFF;
    border-radius: 50%;
}

.block__title {
    height: 60upx;
    line-height: 60upx;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #ffffff;
    font-size: 24upx;
    font-weight: bold;
    color: #767676;
}

.block__title>.title-item {
    border-top: 1upx solid #ebedf0;
    border-bottom: 1upx solid #ebedf0;
    padding: 0 20upx;
    background: #ededed;
}

.block__title--cur {
    color: #3F82FD;
}

.block__title--cur>.title-item {
    background: #ffffff;
}

.block__item {
    background: #ffffff;
    padding: 30upx 20upx;
}

.block__item:not(:last-child) {
    border-bottom: 1upx solid #ebedf0;
}

.item {
    display: flex;
    align-items: center;
}

.item__hd {
    width: 80upx;
    height: 80upx;
    border-radius: 50%;
    font-weight: bold;
    line-height: 80upx;
    text-align: center;
    margin-right: 20upx;
    color: #ffffff;
}

.info__name {
    margin-bottom: 10upx;
}

.info__title {
    color: #999999;
}
</style>
