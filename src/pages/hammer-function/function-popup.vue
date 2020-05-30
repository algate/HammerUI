<template>
    <view>
        <view>
            <view class="hammer-box">
                <view class="title">顶部下拉条件筛选菜单</view>
            </view>
            <view class="demo-content">
                <view class="demo-cell">
                    <view class="demo-cell-t" @tap="toApposition()">
                        <text>并列菜单</text>
                    </view>
                    <view class="demo-cell-b">
                        <text>并列菜单：筛选菜单各个子菜单选择完毕点击确定后回传所有结果</text>
                    </view>
                </view>
                <view class="demo-cell">
                    <view class="demo-cell-t" @tap="toIndependence()">
                        <text>独立菜单</text>
                    </view>
                    <view class="demo-cell-b">
                        <text>独立菜单：设置插件属性 :independence="true"。筛选菜单每个子菜单选择完毕点击确定回传当前菜单结果</text>
                    </view>
                </view>
            </view>
        </view>
       <!--下拉选择框 dropdownlist-->
        <view class="tui-drop-input-box">
            <tui-dropdown-list :show="dropdownShow" :top="94" :height="400">
                <template v-slot:selectionbox>
                    <button class="h-margin-top" shape="circle" @tap="dropDownList(-1)">下拉选择框
                        <view class="tui-animation" :class="[dropdownShow?'tui-animation-show':'']">
                            <hammer-icon name="turningdown" :size="20"></hammer-icon>
                        </view>
                    </button>
                </template>
                <template v-slot:dropdownbox>
                    <view class="tui-selected-list">
                        <scroll-view scroll-y class="tui-dropdown-scroll">
                            <block v-for="(item,index) in dropdownlistData" :key="index">
                                <tui-list-cell @tap="dropDownList(item)" bgcolor="#ddd" :last="dropdownlistData.length-1==index">
                                    <hammer-icon :name="item.icon" :size="item.size" :color="item.color"></hammer-icon>
                                    <text class="tui-ml-20">{{item.name}}</text>
                                </tui-list-cell>
                            </block>
                        </scroll-view>
                    </view>
                </template>
            </tui-dropdown-list>
        </view>

        <!--下拉选择框-->

        <view class="tui-share-box h-margin-top">
            <button shape="circle" @tap="popup">底部分享弹窗</button>
        </view>


        <!--底部分享弹窗-->
        <tui-bottom-popup :show="popupShow" @close="popup">
            <view class="tui-share">
                <view class="tui-share-title">分享到</view>
                <scroll-view scroll-x style="padding-right:20upx">
                    <view class="tui-share-top">
                        <view class="tui-share-item" :class="[shareList[0].share.length-1===index?'tui-item-last':'']" v-for="(item,index) in shareList[0].share"
                         :key="index" @tap="popup">
                            <view class="tui-share-icon" hover-class="tui-hover" :hover-stay-time="150">
                                <hammer-icon :name="item.icon" :color="item.color" :size="item.size?item.size:36"></hammer-icon>
                            </view>
                            <view class="tui-share-text">{{item.name}}</view>
                        </view>
                        <view class="tui-empty">!</view>
                    </view>
                </scroll-view>
                <scroll-view scroll-x class="tui-mt">
                    <view class="tui-share-bottom">
                        <view class="tui-share-item" :class="[shareList[1].operate.length-1===index?'tui-item-last':'']" v-for="(item,index) in shareList[1].operate"
                         :key="index" @tap="popup">
                            <view class="tui-share-icon" hover-class="tui-hover" :hover-stay-time="150">
                                <hammer-icon :name="item.icon" color="#404040" :size="item.size" :bold="index===2"></hammer-icon>
                            </view>
                            <view class="tui-share-text">{{item.name}}</view>
                        </view>
                    </view>
                </scroll-view>
                <view class="tui-btn-cancle" @tap="popup">取消</view>
            </view>
        </tui-bottom-popup>
        <!--底部分享弹窗-->
        <!--toast提示-->
        <hammer-toast ref="toast"></hammer-toast>
    </view>
</template>
<script>
    import tuiListCell from "@/components/list-cell/list-cell"
    import tuiDropdownList from "@/components/dropdown-list/dropdown-list"
    import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
    import hammerToast from "@/pages/components/extend/toast/toast"
    export default {
        components: {
            tuiListCell,
            tuiDropdownList,
            tuiBottomPopup,
            hammerToast
        },
        data () {
            return {
                dropShow: false,
                dropdownlistData: [{
                    name: "微信支付",
                    icon: "wechat",
                    color: "#80D640",
                    size: 30
                }, {
                    name: "支付宝支付",
                    icon: "alipay",
                    color: "#00AAEE",
                    size: 30
                }, {
                    name: "银行卡支付",
                    icon: "bankcard-fill",
                    color: "#ff7900",
                    size: 28
                }, {
                    name: "微信支付",
                    icon: "wechat",
                    color: "#80D640",
                    size: 30
                }, {
                    name: "支付宝支付",
                    icon: "alipay",
                    color: "#00AAEE",
                    size: 30
                }, {
                    name: "银行卡支付",
                    icon: "bankcard-fill",
                    color: "#ff7900",
                    size: 28
                }],
                dropdownShow: false,
                popupShow: false,
                shareList: [{
                    share: [{
                        name: "QQ",
                        icon: "qq",
                        color: "#07BDFD",
                        size:34
                    }, {
                        name: "微信",
                        icon: "wechat",
                        color: "#80D640"
                    }, {
                        name: "朋友圈",
                        icon: "moments",
                        color: "#80D640",
                        size:32
                    }, {
                        name: "支付宝",
                        icon: "alipay",
                        color: "#00AAEE"
                    }, {
                        name: "新浪微博",
                        icon: "sina",
                        color: "#F9C718"
                    }, {
                        name: "小程序",
                        icon: "applets",
                        color: "#2BA348"
                    }, {
                        name: "钉钉",
                        icon: "dingtalk",
                        color: "#2DA0F1"
                    }, {
                        name: "浏览器打开",
                        icon: "explore-fill",
                        color: "#1695F7"
                    }, {
                        name: "邮件",
                        icon: "mail-fill",
                        color: "#2868E5"
                    }]
                }, {
                    operate: [{
                        name: "投诉",
                        icon: "warning",
                        size: 30
                    }, {
                        name: "复制链接",
                        icon: "link",
                        size: 28
                    }, {
                        name: "刷新",
                        icon: "refresh",
                        size: 30
                    }, {
                        name: "搜索内容",
                        icon: "search-2",
                        size: 28
                    }]
                }]
            }
        },
        methods: {
            toApposition() {
                uni.navigateTo({
                    url: './apposition/index'
                })
            },
            toIndependence() {
                uni.navigateTo({
                    url: './independence/index'
                })
            },
            dropDownList(e) {
                if (e !== -1) {
                    let params = {};
                    params.title = e.name;
                    this.$refs.toast.show(params)
                }
                this.dropdownShow = !this.dropdownShow
            },
            popup: function() {
                this.popupShow = !this.popupShow
            }
        }
    }
</script>
<style lang="scss">
    .demo-content {
        margin: 50upx 15upx;
    }
    .demo-cell {
        padding-top: 50upx;
    }
    .demo-cell-t {
        padding: 10upx;
        border-radius: 5upx;
        border: #EEEEEE 1px solid;
        display: flex;
        justify-content: center;
    }
    .demo-cell-t text {
        font-size: 16px;
        color: #333333;
    }
    .demo-cell-b {
        margin-top: 10upx;
    }
    .demo-cell-b text {
        font-size: 14px;
        color: #999999;
    }
    .tui-drop-input-box {
        box-sizing: border-box;
    }

    .tui-animation {
        display: inline-block;
        transform: rotate(0deg);
        transition: all 0.2s;
    }

    .tui-animation-show {
        transform: rotate(180deg);
    }

    .tui-selected-list {
        background: #fff;
        border-radius: 20upx;
        overflow: hidden;
        transform: translateZ(0);
    }

    .tui-dropdown-scroll {
        height: 400upx;
    }

    .tui-cell-class {
        display: flex;
        align-items: center;
        padding: 26upx 30upx !important;
    }

    .tui-ml-20 {
        margin-left: 20upx;
    }

    .tui-share {
        background: #e8e8e8;
        position: relative;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .tui-share-title {
        font-size: 26upx;
        color: #7E7E7E;
        text-align: center;
        line-height: 26upx;
        padding: 20upx 0 50upx 0;
    }

    .tui-share-top,
    .tui-share-bottom {
        min-width: 101%;
        padding: 0 20upx 0 30upx;
        white-space: nowrap;
    }

    .tui-mt {
        margin-top: 30upx;
        padding-bottom: 150upx;
    }

    .tui-share-item {
        width: 126upx;
        display: inline-block;
        margin-right: 24upx;
        text-align: center;
    }

    .tui-item-last {
        margin: 0;
    }

    .tui-empty {
        display: inline-block;
        width: 30upx;
        visibility: hidden;
    }

    .tui-share-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fafafa;
        height: 126upx;
        width: 126upx;
        border-radius: 32upx;
    }

    .tui-share-text {
        font-size: 24upx;
        color: #7E7E7E;
        line-height: 24upx;
        padding: 20upx 0;
        white-space: nowrap;
    }

    .tui-btn-cancle {
        width: 100%;
        height: 100upx;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #f6f6f6;
        font-size: 36upx;
        color: #3e3e3e;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .tui-hover {
        background: rgba(0, 0, 0, 0.2)
    }
</style>
