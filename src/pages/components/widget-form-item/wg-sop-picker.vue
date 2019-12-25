<template>
    <view class="body" v-if="element.type === 'sop'">
        <view class="title row">
            故障记录
        </view>
        <view class="flex row">
            <view class="label">产品线</view>
            <view style="width: 70%;">
                <picker @change="changeFaultType" :range="list1" range-key="judName">
                    <span v-if="!originalData.judClassValue" class="placeholder">
                        请选择产品线
                    </span>
                    <span v-if="originalData.judClassValue">
                        {{originalData.judClassValue.judName}}
                    </span>
                </picker>
            </view>
        </view>
        <view class="flex row">
            <view class="label">产品类别</view>
            <view style="width: 70%;">
                <picker @change="changeFaultDisc" :range="list2" range-key="judName">
                    <span v-if="!originalData.judTypeValue" class="placeholder">
                        请选择产品类别
                    </span>
                    <span v-if="originalData.judTypeValue">
                        {{originalData.judTypeValue.judName}}
                    </span>
                </picker>
            </view>
        </view>
        <view class="flex row">
            <view class="label">产品模块</view>
            <view style="width: 70%;">
                <picker @change="changeFaultModule" :range="list3" range-key="judName">
                    <span v-if="!originalData.judModelValue" class="placeholder">
                        请选择产品模块
                    </span>
                    <span v-if="originalData.judModelValue">
                        {{originalData.judModelValue.judName}}
                    </span>
                </picker>
            </view>
        </view>
        <view class="flex row">
            <view class="label">故障现象</view>
            <view style="width: 70%;">
                <picker @change="changeFaultPhenomenon" :range="list4" range-key="judName">
                    <span v-if="!originalData.judSymbolValue" class="placeholder">
                        请选择故障现象
                    </span>
                    <span v-if="originalData.judSymbolValue">
                        {{originalData.judSymbolValue.judName}}
                    </span>
                </picker>
            </view>
        </view>
        <view class="flex row">
            <view class="label">故障原因</view>
            <view style="width: 70%;">
                <picker @change="changeFaultReason" :range="list5" range-key="judName">
                    <span v-if="!originalData.judReasonValue" class="placeholder">
                        请选择故障原因
                    </span>
                    <span v-if="originalData.judReasonValue">
                        {{originalData.judReasonValue.judName}}
                    </span>
                </picker>
            </view>
        </view>
        <view class="flex row">
            <view class="label">处理描述</view>
            <view style="width: 70%;">
                <textarea style="width: 100%;" v-model="originalData.judDes" placeholder="请输入处理描述"
                          placeholder-style="color: lightgray;"></textarea>
            </view>
        </view>
    </view>
</template>

<script>
    import http from '@/common/http.js';
    import env from '@/environment.js';

    export default {
        name: "wg-sop-picker",
        props: {
            element: {
                type: Object
            }
        },
        data() {
            return {
                originalData: { // 原始数据（页面显示数据）
                    judClassValue: null, // 设备分类
                    judTypeValue: null, //故障辨别
                    judModelValue: null, //故障模块
                    judSymbolValue: null, //故障现象
                    judReasonValue: null, //故障原因
                    judDes: '' //处理描述
                },
                labelMapping: { // 显示label映射
                    judClassValue: '产品线', // 设备分类
                    judTypeValue: '产品类别', //故障辨别
                    judModelValue: '产品模块', //故障模块
                    judSymbolValue: '故障现象', //故障现象
                    judReasonValue: '故障原因', //故障原因
                    judDes: '处理描述' //处理描述
                },
                list1: [ // 设备分类数据list
                ],
                list2: [ // 故障辨别数据list
                ],
                list3: [ // 故障模块数据list
                ],
                list4: [ // 故障现象数据list
                ],
                list5: [ // 故障原因数据list
                ]
            }
        },
        methods: {
            changeFaultType(e) {
                this.originalData.judClassValue = this.list1[e.detail.value];
                this.getSOPListByJudId(this.originalData.judClassValue.judId).then(res => {
                    this.list2 = res.result;
                });
                this.clear(2);
            },
            changeFaultDisc(e) {
                this.originalData.judTypeValue = this.list2[e.detail.value];
                this.getSOPListByJudId(this.originalData.judTypeValue.judId).then(res => {
                    this.list3 = res.result;
                });
                this.clear(3);
            },
            changeFaultModule(e) {
                this.originalData.judModelValue = this.list3[e.detail.value];
                this.getSOPListByJudId(this.originalData.judModelValue.judId).then(res => {
                    this.list4 = res.result;
                });
                this.clear(4);
            },
            changeFaultPhenomenon(e) {
                this.originalData.judSymbolValue = this.list4[e.detail.value];
                this.getSOPListByJudId(this.originalData.judSymbolValue.judId).then(res => {
                    this.list5 = res.result;
                });
                this.clear(5);
            },
            changeFaultReason(e) {
                this.originalData.judReasonValue = this.list5[e.detail.value];
                this.clear(6);
            },
            clear(start) {
                // 清空其它选项
                for (; start <= 5; start++) {
                    this.$data[`list${start}`] = [];
                    switch (start) {
                        case 2:
                            this.originalData.judTypeValue = null;
                            this.originalData.judModelValue = null;
                            this.originalData.judSymbolValue = null;
                            this.originalData.judReasonValue = null;
                            break;
                        case 3:
                            this.originalData.judModelValue = null;
                            this.originalData.judSymbolValue = null;
                            this.originalData.judReasonValue = null;
                            break;
                        case 4:
                            this.originalData.judSymbolValue = null;
                            this.originalData.judReasonValue = null;
                            break;
                        case 5:
                            this.originalData.judReasonValue = null;
                            break;
                    }
                }
            },
            // 校验组件数据
            validate() {
                if (this.element.type !== 'sop') {
                    return true;
                }
                for (let key in this.originalData) {
                    if (!this.originalData[key]) {
                        uni.showToast({
                            title: `${this.labelMapping[key]}不能为空`,
                            icon: 'none',
                            duration: 2000
                        });
                        return false;
                    }
                }
                return true;
            },
            // 获取组件数据
            getValue() {
                if (this.$props.element.type !== 'sop') {
                    return null;
                }

                let data = {
                    sop: {}
                };

                for (let key in this.originalData) {
                    if (this.originalData[key]) {
                        let judId = -1;
                        if (this.originalData[key].judId || this.originalData[key].judId === 0) {
                            judId = this.originalData[key].judId;
                        }
                        data.sop[key] = judId === -1 ? this.originalData[key] : judId;
                    }
                }

                return data;
            },
            // 请求SOP数据
            getSOPListByJudId(judId) {
                return http.post(`/workorder/queryAllFaultSOPByParentId.html?parentId=${judId}&wrCode=${this.$route.query.wrCode}`, {}, {
                    baseUrl: env.webRoot
                });
            }
        },
        mounted() {
            http.post(`/workorder/queryFaultSOPByJudCode.html?wrCode=${this.$route.query.wrCode}`, {}, {
                baseUrl: env.webRoot,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                timeout: 0
            }).then(res => {
                if (res.code !== '0000') {
                    uni.showToast({
                        title: 'SOP数据请求失败，请稍候再试',
                        icon: 'none',
                        duration: 2000
                    });
                    return;
                }
                this.list1 = res.result.faultSopList;
            });
        }
    }
</script>

<style scoped>
    .body {
        background-color: #FFFFFF;
    }

    .title {
        font-size: 16px;
        font-weight: bold;
    }

    .placeholder {
        color: lightgray;
    }

    .row {
        margin: 10px;
    }

    .label {
        width: 30%;
    }
</style>
