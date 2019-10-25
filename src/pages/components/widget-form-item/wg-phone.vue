<template>
    <view v-if="element.type == 'phone'">
        <view class="cu-form-group">
            <view class="title">{{element.name}}</view>
            <input :placeholder="element.options.placeholder" v-model="phoneNumber" name="input"></input>
            <view class="cu-capsule radius">
                <view class="cu-tag bg-blue">
                    +86
                </view>
                <view class="cu-tag line-blue">
                    中国大陆
                </view>
            </view>
        </view>
        <view class="cu-form-group" v-if="element.options.verificationCode">
            <view class="title">验证码</view>
            <input placeholder="输入框带个按钮" v-model="verificationCode" name="input"></input>
            <button class="cu-btn bg-green shadow" @tap="sendVerificationCode" :disabled="canRun">{{canRun?`${countDown}S倒计时`:"验证码"}}</button>
        </view>
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
            countDown: 60,
            canRun: false,
            timer: null,
            phoneNumber: '',
            verificationCode: ''
        }
    },
    methods: {
        sendVerificationCode () {
            this.canRun = true;
            this.countDown = 60;
            let that = this;
            this.timer = setInterval(function () {
                that.countDown--;
                if (that.countDown == 0) {
                    clearInterval(that.timer);
                    that.canRun = false;
                }
            }, 1000);
        }
    }
}
</script>
