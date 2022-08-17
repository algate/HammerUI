<template>
    <view>
        <view class="hammer-header bg-white">
            <view class="title">Icon</view>
            <view class="sub-title">字体图标：应用于字体图标、减少图片的使用，方便颜色和大小控制，还不失真</view>
        </view>
        <view class="hammer-box bg-black">
            <view class="hammer-search">
                <view class="tui-icon tui-icon-search" style="size:20upx;"></view>
                <input type="text" placeholder="请输入字体名称" confirm-type="search" @input="searchIcon"></input>
            </view>
        </view>
        <view>
            <tui-grid>
                <block v-for="(item,index) in iconList" :key="index">
                    <view v-if="item.isShow">
                        <tui-grid-item :cell="cell">
                            <view class="tui-grid-icon">
                                <hammer-icon :name="item.name" :from="item.from" :size="item.size" :color="item.color"></hammer-icon>
                            </view>
                            <text class="tui-grid-label">{{item.name}}</text>
                        </tui-grid-item>
                    </view>
                </block>
            </tui-grid>
        </view>
    </view>
</template>
<script>
import tuiGrid from "@/components/grid/grid"
import tuiGridItem from "@/components/grid-item/grid-item"
export default {
    components: {
        tuiGrid,
        tuiGridItem
    },
    data() {
        return {
            cell: 3,
            iconList: [
                /*{
                    name: 'broken-line',
                    isShow: true,
                    from: 'iconfont'
                },*/
                {
                    name: 'appreciate',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'check',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'close',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'edit',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'emoji',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'favorfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'favor',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'locationfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'location',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundcheckfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundcheck',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundclosefill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundclose',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundrightfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundright',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'warnfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'warn',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'camerafill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'camera',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'commentfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'likefill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'like',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'notificationfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'notification',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'back',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'questionfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'question',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'right',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'friendaddfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'friendadd',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'squarecheckfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'square',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'squarecheck',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundaddfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'roundadd',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'redpacket',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'appreciatefill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'infofill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'info',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'share',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'communityfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'community',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'gasstylec',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'add1',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'move',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'sponsorfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'sponsor',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'hammer',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'weixin',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'ui-icon-code',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'emojifill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'emojiflashfill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'kuaidi',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'chouti',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'tubiao08',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'fengefu',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'maoyishangbianhao',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'redpacket_fill',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'close_light',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'comment_light',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'shangchuan',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'SwipeRight',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'train',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'Gas',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'rongqifuwuContainerServi',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'rate',
                    isShow: true,
                    from: 'iconfont'
                },
                /*{
                    name: 'Charts',
                    isShow: true,
                    from: 'iconfont'
                },*/
                {
                    name: 'time',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'shape',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'fengefu1',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'fengefu2',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'kuaidi2',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'kuaidi3',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'bofang',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'extend',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'Toast',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'git',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'zhifubao',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'u',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'toast',
                    isShow: true,
                    from: 'iconfont'
                },
                /*{
                    name: 'china-map',
                    isShow: true,
                    from: 'iconfont'
                },*/
                {
                    name: 'app',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'Container',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'park',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'ailpay',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'spinner',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'QQkongjian',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'weibo',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'pengyouquan',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'QQ',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'yinlian',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'yunshanfu',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'github',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'dingding',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'kuaidi5',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'red-packet',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'lunbo1',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'liandong',
                    isShow: true,
                    from: 'iconfont'
                },
                /*{
                    name: 'moreread',
                    isShow: true,
                    from: 'iconfont'
                },*/
                {
                    name: 'liandong1',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'download',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'extend1',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'Hammer',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'charging-station',
                    isShow: true,
                    from: 'iconfont'
                },
                {
                    name: 'friendadd',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'friendadd-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'service',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'service-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'explore',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'explore-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'wealth',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'wealth-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'exchange',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'refresh',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'search',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'search-2',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'todown',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'toleft',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'toright',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'video',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'people',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'people-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'community',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'community-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'ios',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'android',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'square',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'square-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'square-selected',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'close',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'close-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'shut',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'plus',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'add',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'add-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'reduce',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'about',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'about-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'explain',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'explain-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'check',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'circle',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'circle-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'circle-selected',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'star',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'star-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'revoke',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'shop',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'shop-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'order',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'feedback',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'share',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'share-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'more',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'more-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'strategy',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'cart',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'cart-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'sweep',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'screen',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'clock',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'clock-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'home',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'home-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'category',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'category-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'notice',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'notice-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'like',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'like-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'bottom',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'top',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'towardsright',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'towardsright-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'towardsleft',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'camera',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'camera-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'camera-add',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'loading',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'wifi',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'agree',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'agree-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'mobile',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'qrcode',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'coupon',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'back',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'transport',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'transport-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'send',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'bankcard',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'bankcard-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'eye',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'calendar',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'picture',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'oppose',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'oppose-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'pie',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'polygonal',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'histogram',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'down',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'up',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'narrow',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'enlarge',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'pwd',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'ellipsis',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'location',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'delete',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'card',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'card-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'alarm',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'alarm-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'computer',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'computer-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'position',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'position-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'member',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'member-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'label',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'label-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'mail',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'mail-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'manage',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'manage-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'message',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'message-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'offline',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'offline-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'redpacket',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'redpacket-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'bag',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'bag-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'setup',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'setup-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'news',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'news-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'time',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'time-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'voice',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'voice-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'nodata',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'link',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'edit',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'unseen',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'arrowup',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'arrowleft',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'arrowdown',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'arrowright',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'turningleft',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'turningright',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'turningup',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'turningdown',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'sina',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'applets',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'qq',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'wechat',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'moments',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'dingtalk',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'alipay',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'skin',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'house',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'download',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'upload',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'kefu',
                    isShow: true,
                    from: 'tui'
                },
                /*{
                    name: 'sport',
                    isShow: true,
                    from: 'tui'
                },*/
                {
                    name: 'gps',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'shield',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'voipphone',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'wallet',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'attestation',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'addressbook',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'addmessage',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'signin',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'evaluate',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'unreceive',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'balloon',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'partake',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'listview',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'weather',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'tool',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'imface',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'deletekey',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'fingerprint',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'warning',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'soso',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'satisfied',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'dissatisfied',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'pic',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'pic-fill',
                    isShow: true,
                    from: 'tui'
                },
                {
                    name: 'play',
                    isShow: true,
                    from: 'tui'
                }
            ]
        }
    },
    methods: {
        searchIcon(e) {
            let key = e.detail.value.toLowerCase();
            let list = this.iconList;
            for (let i = 0; i < list.length; i++) {
                let a = key;
                let b = list[i].name.toLowerCase();
                if (b.search(a) != -1) {
                    list[i].isShow = true
                } else {
                    list[i].isShow = false
                }
            }
            this.iconList = list
        }
    }
}
</script>
<style>
.tui-grid-icon {
    /*width: 30upx;*/
    height: 70upx;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
}

.tui-grid-icon+.tui-grid-label {
    margin-top: 10upx;
}

.tui-grid-label {
    display: block;
    text-align: center;
    font-weight: 400;
    color: #888;
    font-size: 30upx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
