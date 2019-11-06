<template>
    <view v-if="element.type == 'imgupload'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">
                图片上传
            </view>
            <view class="sub-title">
                {{imgList.length}}/4
            </view>
        </view>
        <view class="bg-white">
            <view class="grid grid-col-4">
                <view class="bg-img-eq grid-item" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
                    <image :src="imgList[index]" mode="aspectFill"></image>
                    <view class="hammer-close" @tap.stop="DelImg" :data-index="index">
                        <hammer-icon from="iconfont" name="close" :size="30"></hammer-icon>
                    </view>
                </view>
                <view class="bg-img-eq line-color location-icon" @tap="ChooseImage" v-if="imgList.length<4">
                    <hammer-icon name="camera-add" :size="40"></hammer-icon>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object
        }
    },
    data() {
        return {
            imgList: []
        }
    },
    methods: {
        ViewImage(e) {
            uni.previewImage({
                urls: this.imgList,
                current: e.currentTarget.dataset.url
            });
        },
        DelImg(e) {
            uni.showModal({
                title: '王者荣耀',
                content: '确定要删除战绩么？',
                cancelText: '考录一下',
                confirmText: '再见',
                success: res => {
                    if (res.confirm) {
                        this.imgList.splice(e.currentTarget.dataset.index, 1)
                    }
                }
            })
        },
        ChooseImage() {
            uni.chooseImage({
                count: 4, //默认9
                sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album'], //从相册选择
                success: (res) => {
                    if (this.imgList.length != 0) {
                        this.imgList = this.imgList.concat(res.tempFilePaths)
                    } else {
                        this.imgList = res.tempFilePaths
                    }
                }
            });
        },
    }
}
</script>
