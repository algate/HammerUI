<template>
    <view>
        <view class="hammer-form hammer-box">
            <view class="sub-title">{{name}}</view>
            <picker @change="subPickerChange" :value="num" :range="range">
                <view class="picker">{{range[index]}}</view>
            </picker>
        </view>
        <hammerPicker v-if="index > 0 && subArray.length > 0" :name="subName" :range="subArray" :num="subIndex" @confirm="subChange">
            <slot></slot>
        </hammerPicker>
    </view>
</template>
<script>
import hammerPicker from '@/pages/components/linkage-picker/linkage-picker'
export default {
    name: 'hammerPickerItem',
    components: {
        hammerPicker
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        range: {
            type: Array,
            default: []
        },
        num: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            index: 0,
            subName: '',
            subArray: [],
            subIndex: 0
        }
    },
    methods: {
        subPickerChange(e) {
            console.log(e);
            console.log('picker发送选择改变，携带值为', e.target.value);
            this.index = e.target.value;
            // 此处写请求接口，返回是否有children停止
            this.subName = 'N级联动';
            this.subArray = ['请选择', '威海1', '北京2', '深圳3'];
            // this.subArray = ['请选择'];
            this.subIndex = 0;

            let indexValue = e.target.value
            this.$emit("confirm", {indexValue});
        },
        subChange(index) {
            console.log(index)
        }
    }
}
</script>
<style>
.hammer-box {
    background: #444;
    color: #fff;
}
</style>
