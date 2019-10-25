<template>
    <view class="cu-form-group" v-if="element.type == 'select'">
        <view class="title">{{element.name}}</view>
        <picker @change="PickerChange" :value="defaultValue" :range="options">
            <view class="picker">
                {{defaultValue?options[defaultValue]:element.options.placeholder}}
            </view>
        </picker>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object
        }
    },
    computed: {
        defaultValue () {
            return this.element.options.defaultValue
        },
        options (){
            return this.element.options.options.map(ele => ele.value)
        }
    },
    data() {
        return {
            // defaultValue: this.element.options.defaultValue
        };
    },
    methods: {
        PickerChange(e) {
            this.defaultValue = e.detail.value
        }
    }
}
</script>
