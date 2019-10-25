<template>
    <view class="hammer-box h-margin-top" v-if="element.type == 'button'">
        <button :type="element.options.class_name" :style="{width: element.options.width?element.options.width:'100%'}" :disabled="element.options.disabled">{{element.options.mode.label}}</button>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object,
            required: true
        }
    }
}
</script>
