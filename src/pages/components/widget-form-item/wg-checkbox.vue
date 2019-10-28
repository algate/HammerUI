<template>
    <view v-if="element.type == 'checkbox'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
        </view>
        <checkbox-group @change="CheckboxChange">
            <label class="hammer-box bg-white" v-for="(item, index) in element.options.options" :key="item.value + index">
                <view class="sub-title">{{item.value}}</view>
                <checkbox class="checkbox" :class="item.checked?'checked':''" :checked="item.checked?true:false" :value="item.value"></checkbox>
            </label>
        </checkbox-group>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
        }
    },
    methods: {
        CheckboxChange(e) {
            var items = this.element.options.options,
                values = e.detail.value;
            for (let i = 0, lenI = items.length; i < lenI; ++i) {
                const item = items[i]
                if(values.includes(item.value)){
                    this.$set(item,'checked',true)
                }else{
                    this.$set(item,'checked',false)
                }
            }
        },
        getValue() {
            if (this.$props.element.type !== 'checkbox') {
                return null;
            }
            let checkData = [];
            this.element.options.options.forEach(v => {
                v.checked && checkData.push(v.value);
            });
            let data = {};
            data[this.$props.element.model] = checkData;
            return data;
        }
    }
}
</script>
