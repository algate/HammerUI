import Vue from 'vue'
import App from './App'

import { i18n } from './i18n';
import store from './store';

// #ifdef H5
let jweixin = require('@/libs/jweixin.js');
// #endif
import * as loadAMap from '@/libs/loadAMap.js';
import * as loadBMap from '@/libs/loadBMap.js';
import * as constant from '@/libs/constant.js';


// 定义全局组件
import hammerIcon from "@/components/icon/icon"
Vue.component('hammer-icon', hammerIcon);
import hammerButton from "@/components/hammer-button/hammer-button.vue"
Vue.component('hammer-button', hammerButton);

//初始化store
Vue.prototype.$store = store;
Vue.prototype.$hammer = {
    $constant: constant.constant,
    $loadAMap: loadAMap,
    $loadBMap: loadBMap,
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
