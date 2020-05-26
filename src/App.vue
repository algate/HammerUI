<script>
    let settings = require('./settings');
	export default {
		onLaunch: function() {
			console.log('App Launch')
            // 调试跳转页面
            /*uni.reLaunch({
                url: '/pages/hammer-basic/basic-custom-forms'
            })*/
            // #ifdef H5
            if (settings.whiteListPages.indexOf(this.$route.path) === -1) {
                // 跳转页面不在白名单中，强制跳转到鉴权页面
                uni.reLaunch({
                    url: '/pages/index/index'
                })
            }
            // #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
    /*每个页面公共css */
    @import "./hammerui/common/hammer.scss";
    @import "./hammerui/common/animate.css";
    @import "./hammerui/common/hammericon.scss";
    @import "./hammerui/common/cuiicon.css";
    /* 组件css */
    @import "./hammerui/components.scss";
	/* 页面展示使用icon */
    @import "./hammerui/hammericon.scss";
</style>
