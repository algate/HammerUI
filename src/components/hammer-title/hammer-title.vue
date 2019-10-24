<template>
    <view class="hammer-title">
        <view class="title title-fixed" :style="color !== 'blue' ? {'background': 'white'} : {}">
            <view class="item-title" title="title">
                <!-- <img class="backImg" :class="hasBack?'':'noBackImg'" :src="color === 'blue' ? backImg : backBlueImg"
                    @click="onClick"> -->
                <view class="backImg"></view>
                <view class="titel-text-view">
                    <text :class="color === 'blue' ? 'whiteSpan' : 'blackSpan'" v-html="titleName"></text>
                    <image v-if="helpString" class="help-image" src="../../static/image/tip-icon.png" @click="togglePopup('show')"></image>
                </view>
                <view class="placeholder"></view>
            </view>
        </view>
        <view class="title title-transparent">
            <view class="item-title" title="title">
                <!-- <img class="backImg" :class="hasBack?'':'noBackImg'" :src="color === 'blue' ? backImg : backBlueImg"
                    @click="onClick"> -->
                <view class="backImg"></view>
                <view class="titel-text-view">
                    <text :class="color === 'blue' ? 'whiteSpan' : 'blackSpan'" v-html="titleName"></text>
                    <image v-if="helpString" class="help-image" src="../../static/image/tip-icon.png" @click="togglePopup('show')"></image>
                </view>
                <view class="placeholder"></view>
            </view>
        </view>
        <uni-popup ref="popup" type="center">
            <view>{{helpString}}</view>
        </uni-popup>
    </view>
</template>
<script>
import {
    mapState
} from 'vuex';
let titleJson = require("@/static/title.json");

export default {
    name: "hammerTitle",
    props: {
        // 标题名称
        title: {
            type: [String, Number],
            default () {
                return ''
            }
        },
        // 标题的颜色 blue, white，默认blue
        color: {
            type: String,
            default () {
                // blue, white
                return 'blue'
            }
        },
        // 返回地址
        backUrl: {
            type: String,
            default () {
                // 点击back跳回的页面url
                return ''
            }
        },
        // 是否有返回按钮，默认有
        hasBack: {
            type: Boolean,
            default () {
                return true;
            }
        },
        //帮助提示String
        helpString: {
            type: String,
            default () {
                return ''
            }
        }
    },
    data() {
        return {
            titleName: "",
            showHelp: '' //是否显示helpString，在值为'show'时显示
        };
    },
    created() {
        const route = "/" + this.$parent.$parent.$mp.page.route;
        if (this.title) {
            this.titleName = this.title;
        } else {
            if (titleJson[route]) {
                this.titleName = titleJson[route];
            }
        }
        document.title = this.titleName;
    },
    methods: {
        onClick() {
            if (this.backUrl) {
                uni.navigateTo({
                    url: this.backUrl
                });
            } else {
                // 页面回退
                uni.navigateBack();
            }
        },
        togglePopup(value) {
            this.$refs.popup.open();
        }
    }
}
</script>
<style lang="scss">
.hammer-title {
    width: 100%;

    .title-transparent {
        opacity: 0;
    }

    .title-fixed {
        position: fixed;
        top: 0;
        left: 0;
    }

    .title {
        width: 100%;
        box-sizing: border-box;
        padding: 0 40upx;
        z-index: 99;
        border-bottom: 2upx solid #e4e4e4;
        font-size: 28upx;
        /*background: url('../../../static/image/bg_search@3x.png');*/
        font-weight: bold;

        .item-title {
            width: 100%;
            height: 90upx;
            line-height: 90upx;
            display: flex;
            justify-content: space-between;

            .backImg {
                width: 46upx;
            }

            .noBackImg {
                visibility: hidden;
                pointer-events: none;
            }

            .placeholder {
                width: 46upx;
            }

            .whiteSpan {
                color: white;
            }

            .blackSpan {
                color: black;
            }
        }
    }

    .titel-text-view {
        display: flex;
        align-items: center;

        .help-image {
            width: 36upx;
            height: 36upx;
            margin-left: 20upx;
            margin-bottom: 4upx;
        }
    }
}
</style>
