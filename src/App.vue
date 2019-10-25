<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
    /* 组件css */
    @import "./hammerui/components.scss";
    @import "./hammerui/hammericon.scss";
</style>
