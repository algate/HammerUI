<template>
    <form>
        <block v-for="(item, index) in formCustom" :key="index">
            <view class="hammer-form">
                <!-- 单行输入框 -->
                <!-- <template  v-if="item.type='input'"> -->
                    <WgInput :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 文本描述 -->
                <!-- <template  v-if="item.type == 'textarea'"> -->
                    <WgStaticText :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 下拉选择 -->
                <!-- <template  v-if="item.type='select'"> -->
                    <WgSelect :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 单选 -->
                <!-- <template  v-if="item.type='radio'"> -->
                    <WgRadio :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 多选 -->
                <!-- <template  v-if="item.type='checkbox'"> -->
                    <WgCheckbox :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 时间 -->
                <!-- <template  v-if="item.type='time'"> -->
                    <WgTime :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- date -->
                <!-- <template  v-if="item.type='date'"> -->
                    <WgDate :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 开关 -->
                <!-- <template  v-if="item.type='switch'"> -->
                    <WgSwitch :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 图片展示 -->
                <!-- <template  v-if="item.type='picture'"> -->
                    <WgPicture :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 图片上传 -->
                <!-- <template  v-if="item.type='imgupload'"> -->
                    <WgUpload :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 手机号码(带验证码) -->
                <!-- <template  v-if="item.type='phone'"> -->
                    <WgPhone :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 数字输入框 -->
                <!-- <template  v-if="item.type='number'"> -->
                    <wgNumber :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- 地图定位 -->
                <!-- <template  v-if="item.type='map'"> -->
                    <WgMap :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
                <!-- JSSDK -->
                <!-- <template  v-if="item.type='scanCode'"> -->
                    <WgScanCode :ref="`comp_${index}`" :element="item"/>
                <!-- </template> -->
            </view>
        </block>
    </form>
</template>
<script>
import WgInput from './wg-input'
import WgSelect from './wg-select'
import WgStaticText from './wg-statictext'
import WgRadio from './wg-radio'
import WgCheckbox from './wg-checkbox'
import WgTime from './wg-time'
import WgDate from './wg-date'
import WgSwitch from './wg-switch'
import WgPicture from './wg-picture'
import WgUpload from './wg-upload'
import WgPhone from './wg-phone'
import WgNumber from './wg-number'
import WgMap from './wg-map'
import WgScanCode from './wg-scanCode'
export default {
    name: 'WidgetForm',
    props: {
        formCustom: {
            type: Array
        }
    },
    components: {
        WgInput,
        WgStaticText,
        WgSelect,
        WgRadio,
        WgCheckbox,
        WgTime,
        WgDate,
        WgSwitch,
        WgPicture,
        WgUpload,
        WgPhone,
        WgNumber,
        WgMap,
        WgScanCode
    },
    methods: {
        generateData() {
            let data = {};
            for (let key in this.$refs) {
                this.$refs[key].forEach(comp => {
                    if (!comp.getValue) {
                        return true;
                    }
                    let compValue = comp.getValue();
                    compValue && Object.assign(data, compValue);
                });
            }
            return data;
        },
        validate() {
            let isValid = true;
            for (let key in this.$refs) {
                for (let i in this.$refs[key]) {
                    let comp = this.$refs[key][i];
                    if (comp.validate) {
                        isValid = comp.validate();
                        if (!isValid) {
                            break;
                        }
                    }
                }
                if (!isValid) {
                    break;
                }
            }
            return isValid;
        }
    }
};
</script>
