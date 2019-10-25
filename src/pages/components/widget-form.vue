<template>
    <widget-form-item :formCustom="formCustom"></widget-form-item>
</template>
<script>
import WidgetFormItem from './widget-form-item'
export default {
    props: {
        formCustom: Array
    },
    components: {
        WidgetFormItem
    }
}
</script>
