<template>
    <view>
        <view class="hammer-form hammer-box">
            <view class="sub-title">{{name}}</view>
            <picker @change="pickerChange" :value="index" :range="range">
                <view class="picker">{{range[index]}}</view>
            </picker>
        </view>
        <!-- <hammerPickerItem v-if="index > 0 && subArray.length > 0" :name="subName" :range="subArray" :num="subIndex" @confirm="subChange">
            <slot></slot>
        </hammerPickerItem> -->
        <hammerPicker v-if="index > 0 && subArray.length > 0" :name="subName" :range="subArray" :num="subIndex" @subconfirm="confirm">
            <slot></slot>
        </hammerPicker>
    </view>
</template>
<script>
// import hammerPickerItem from '@/pages/components/linkage-picker/linkage-picker-item'
import hammerPicker from '@/pages/components/linkage-picker/linkage-picker'
export default {
    name: 'hammerPicker',
    components: {
        hammerPicker
    },
    /*computed: {
        index(val) {
            return this.num
        }
    },*/
    watch: {
        index: {
            immediate: true,
            handler(val, oldVal) {
                console.log(val, oldVal);
                // this.subIndex = val;
            }
        }
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
        pickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.target.value);
            this.index = e.target.value;
            console.log(this.index);

            /* 此处写请求接口，下级联动数据内容展示，返回是否有children停止 */
            this.subName = `${Math.floor(Math.random()*100)}级联动`;
            this.subIndex = 0;
            this.subArray = [`请选择`,`威海${Math.floor(Math.random()*100)}`, `海淀${Math.floor(Math.random()*100)}`, `成都${Math.floor(Math.random()*100)}`];
            this.$emit('subconfirm', {emitIndex: this.index});
        },
        /* 父组件方法 */
        confirm(emitIndex) {
            console.log(emitIndex);
            this.subIndex = emitIndex.emitIndex;
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
