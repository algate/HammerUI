import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {},
        version: '1.5.3'
    },
    mutations: {
        login(state, userInfo) {
            if (userInfo && Object.keys(userInfo).length !== 0) {
                state.userInfo = userInfo;
            }
        }
    }
})

export default store
