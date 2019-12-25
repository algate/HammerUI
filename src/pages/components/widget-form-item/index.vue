<template>
    <form>
        <template v-for="(item, index) in formCustom">
            <view class="hammer-form" :key="item.key">
                <!-- 单行输入框 -->
                <WgInput :ref="`comp_${index}`" :element="item" />
                <!-- 文本描述 -->
                <WgStaticText :ref="`comp_${index}`" :element="item" />
                <!-- 下拉选择 -->
                <WgSelect :ref="`comp_${index}`" :element="item" />
                <!-- 单选 -->
                <WgRadio :ref="`comp_${index}`" :element="item" />
                <!-- 多选 -->
                <WgCheckbox :ref="`comp_${index}`" :element="item" />
                <!-- 时间 -->
                <WgTime :ref="`comp_${index}`" :element="item" />
                <!-- date -->
                <WgDate :ref="`comp_${index}`" :element="item" />
                <!-- 开关 -->
                <WgSwitch :ref="`comp_${index}`" :element="item" />
                <!-- 图片展示 -->
                <WgPicture :ref="`comp_${index}`" :element="item" />
                <!-- 图片上传 -->
                <WgUpload :ref="`comp_${index}`" :element="item" />
                <!-- 手机号码(带验证码) -->
                <WgPhone :ref="`comp_${index}`" :element="item" />
                <!-- 数字输入框 -->
                <wgNumber :ref="`comp_${index}`" :element="item" />
                <!-- 地图定位 -->
                <WgMap :ref="`comp_${index}`" :element=item />
                <!-- JSSDK -->
                <WgScanCode :ref="`comp_${index}`" :element="item" />
            </view>
        </template>
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
    props: ["formCustom"],
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
