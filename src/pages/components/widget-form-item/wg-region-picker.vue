<style>
    uni-picker {
        min-height: 35px;
    }

    .tip {
        color: lightgray;
    }

    .cu-form-group picker::after {
        margin-top: -10px !important;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
    }
</style>
<template>
    <view v-if="element.shengshuqu" class="cu-form-group">
        <view class="flex-row" :style="`width: ${element.options.width || '100%'}`">
            <view style="width: 30%;">
                {{element.name}}
            </view>
            <view style="width: 70%;" v-show="!element.options.disabled">
                <picker mode="multiSelector" @change="change" @columnchange="columnChange" :range="regions"
                        :value="showIndex">
                    <view v-show="selectedRegion">
                        {{selectedRegion}}
                    </view>
                    <view class="tip" v-show="!selectedRegion">
                        {{element.options.placeholder}}
                    </view>
                </picker>
            </view>
            <view style="width: 50%;" v-show="element.options.disabled">
                <view class="tip">
                    {{element.options.placeholder}}
                </view>
            </view>
        </view>
    </view>
</template>
<script type="text/javascript">
    import http from '@/common/http.js';
    import env from '@/environment.js';

    export default {
        props: {
            element: {
                type: Object
            }
        },
        data() {
            return {
                regions: [
                    [],
                    [],
                    []
                ], // 地区数据
                selectedRegion: null, // 选择的区域展示label
                showIndex: [0, 0, 0] // 组件显示的数据index
            }
        },
        methods: {
            // 点击确定触发的事件回调
            change(e) {
                this.$data.selectedRegion = `${this.regions[0][e.detail.value[0]]}/${this.regions[1][e.detail.value[1]]}/${this.regions[2][e.detail.value[2]]}`;
            },
            // 列数据改时触发的事件回调
            columnChange(e) {
                // 数据列更改的列标
                let changedColIndex = e.detail.column;
                for (let i = changedColIndex + 1; i <= 2; i++) {
                    this.$data.regions[i] = [];
                }
                switch (changedColIndex) {
                    case 0:
                        this.getCityListByProvince(this.$data.regions[0][e.detail.value]).then(() => {
                            this.getAreaListByCity(this.$data.regions[1][0]);
                        });
                        break;
                    case 1:
                        this.getAreaListByCity(this.$data.regions[1][e.detail.value]);
                        break;
                }
            },
            getProvinceList() {
                return http.post('/userSignInfo/getProvince', {}, {
                    baseUrl: env.baseDataApi
                }).then(res => {
                    if (res.code !== '0000') {
                        uni.showToast({
                            title: '数据请求失败，请稍候再试。',
                            icon: 'none'
                        });
                        return;
                    }

                    this.$set(this.$data.regions, 0, res.result.map(v => v.code));
                }).catch(e => {
                    console.log(e);
                    uni.showToast({
                        title: '数据请求失败，请稍候再试。',
                        icon: 'none'
                    });
                });
            },
            getCityListByProvince(province) {
                if (!province) {
                    return;
                }
                return http.post("/userSignInfo/getCityByProvince", province, {
                    baseUrl: env.baseDataApi,
                    headers: {
                        "content-type": "application/json;charset=utf-8"
                    }
                }).then(res => {
                    if (res.code !== '0000') {
                        uni.showToast({
                            title: '数据请求失败，请稍候再试。',
                            icon: 'none'
                        });
                        return;
                    }

                    this.$set(this.$data.regions, 1, res.result.map(v => v.code));
                }).catch(e => {
                    console.log(e);
                    uni.showToast({
                        title: '数据请求失败，请稍候再试。',
                        icon: 'none'
                    });
                });
            },
            getAreaListByCity(city) {
                if (!city) {
                    return;
                }
                return http.post("/userSignInfo/getDistrictByCity", city, {
                    baseUrl: env.baseDataApi,
                    headers: {
                        "content-type": "application/json;charset=utf-8"
                    }
                }).then(res => {
                    if (res.code !== '0000') {
                        uni.showToast({
                            title: '数据请求失败，请稍候再试。',
                            icon: 'none'
                        });
                        return;
                    }

                    this.$set(this.$data.regions, 2, res.result.map(v => v.code));
                }).catch(e => {
                    console.log(e);
                    uni.showToast({
                        title: '数据请求失败，请稍候再试。',
                        icon: 'none'
                    });
                });
            },
            getValue() {
                if (!this.$props.element.shengshuqu) {
                    return null;
                }
                let data = {};
                data[this.$props.element.model] = this.selectedRegion;
                return  data;
            }
        },
        mounted() {
            // 组件初始加载时，预先加载省市区数据信息
            this.getProvinceList().then(() => {
                this.getCityListByProvince(this.$data.regions[0][0]).then(() => {
                    this.getAreaListByCity(this.$data.regions[1][0]);
                });
            });
        }
    }
</script>