<script>
    let settings = require('./settings');
	export default {
		onLaunch: function() {
			console.log('App Launch')
            // 调试跳转页面
            uni.reLaunch({
                url: '/pages/hammer-basic/basic-custom-forms'
            })
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
    @import "./hammerui/common/tuiicon.scss";
    @import "./hammerui/common/cuiicon.css";
    /* 组件css */
    @import "./hammerui/components.scss";
    @import "./hammerui/hammericon.scss";
</style>
