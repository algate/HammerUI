<template>
    <view v-if="element.type == 'number'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <input type="number" v-model="cuValue" :style="{width: element.options.width}" :placeholder="element.options.placeholder" :disabled="element.options.disabled"></input>
        </view>
        <view class="hammer-box bg-white h-margin-top">
            <view class="title">数字框 - 自选</view>
        </view>
        <view class="hammer-number-box h-margin-top">
            <view class="title"> 基本用法</view>
            <hammer-numberbox :value="value" @change="change"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title">设置最小值和最大值</view>
            <hammer-numberbox :min="1" :max="10" :value="value2" @change="change2"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title">设置步长 0.1</view>
            <hammer-numberbox :step="0.1" :value="value3" @change="change3"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title">设置步长 10</view>
            <hammer-numberbox :step="10" :value="value4" @change="change4"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title">禁用状态</view>
            <hammer-numberbox :disabled="true"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title">设置大小</view>
            <hammer-numberbox :height="70" :width="140" :iconSize="30" :value="value5" @change="change5"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title">调整颜色</view>
            <hammer-numberbox bgcolor="rgba(0,0,0,0.5)" color="#fff" iconColor="rgba(0,0,0,0.5)" :value="value6" @change="change6"></hammer-numberbox>
        </view>
        <view class="hammer-number-box">
            <view class="title"> 获取输入的值：{{value7}}</view>
            <hammer-numberbox :value="value7" @change="change7"></hammer-numberbox>
        </view>
    </view>
</template>

<script>
import hammerNumberbox from "@/components/number-box/number-box"
export default {
    // props来自父组件的数据：props可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    components: {
        hammerNumberbox
    },
    computed: {
        cuValue: {
            // getter
            get () {
                return this.element.options.defaultValue
            },
            // setter
            set (newValue) {
                return this.element.options.defaultValue = newValue
            }
        }
    },
    data() {
        return {
            // value: this.element.options.defaultValue
            value: 0,
            value2: 1,
            value3: 1,
            value4: 0,
            value5: 1,
            value6: 1,
            value7: 1
        }
    },
    methods: {
        getValue() {
            if (this.element.type !== 'number') {
                return null;
            }
            let data = {};
            data[this.element.model] = this.value;
            return  data;
        },
        change: function(e) {
                this.value = e.value
        },
        change2: function(e) {
            this.value2 = e.value
        },
        change3: function(e) {
            this.value3 = e.value
        },
        change4: function(e) {
            this.value4 = e.value
        },
        change5: function(e) {
            this.value5 = e.value
        },
        change6: function(e) {
            this.value6 = e.value
        },
        change7: function(e) {
            this.value7 = e.value
        }
    }
}
</script>
<style lang="scss">
    .uni-input-number {
        display: block;
        height: 100%;
        background: none;
        color: inherit;
        opacity: inherit;
        font: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        text-align: inherit;
        text-indent: inherit;
        text-transform: inherit;
        text-shadow: inherit;
        width: 100%;
        outline: none;
        border: none;
        padding: 0;
        margin: 0;
        text-decoration: inherit;
    }
    .hammer-number-box {
        color: $hammer-color;
        padding: 20rpx;
        box-sizing: border-box;
        margin-bottom: 20rpx;
        background: #fff;
        font-size: 30rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
