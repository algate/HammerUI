import Vue from 'vue'
import App from './App'

import { i18n } from './i18n';
import store from './store';

// 定义全局组件
import hammerIcon from "@/components/icon/icon"
Vue.component('hammer-icon', hammerIcon);

//初始化store
Vue.prototype.$store = store;
// #ifdef H5
let jweixin = require('@/common/jweixin.js');
// #endif
Vue.prototype.$hammer = {
    // #ifdef H5
    $weixin: jweixin
    // #endif
};

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    i18n,
    store,
    ...App
})
app.$mount()
