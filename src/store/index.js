import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {},
        isLogin: false
    },
    mutations: {
        login(state, userInfo) {
            console.log(userInfo);
            if (userInfo && Object.keys(userInfo).length !== 0) {
                state.userInfo = userInfo;
                state.isLogin = true;
            }
        },
        logoff(state, isLogin) {
			state.isLogin = isLogin;
        }
    }
})

export default store
