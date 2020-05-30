<template>
    <view>
        <view class="search">
            <view class="hd">
                <hammer-icon name="search" :size="30"></hammer-icon>
            </view>
            <view class="bd"><input @input="search" :value="searchValue" placeholder="搜索" /></view>
            <view v-if="searchValue != ''" @tap="clear" class="ft">
                <hammer-icon name="close" :size="20"></hammer-icon>
            </view>
        </view>
        <index-list v-if="listData.length > 0"  @click="itemClick" :emptyShow="emptyShow" :topSize="100" :listData="listData" color="#3F82FD"></index-list>
    </view>
</template>
<script>
const CityList = require('static/city.js').CityList;
import indexList from '@/pages/components/index-list'
export default {
    components:{
        indexList
    },
    data() {
        return {
            listData: [],
            searchValue: '',
            emptyShow: false,
        }
    },
    onLoad() {
        // 模拟异步获取数据场景
        setTimeout(() => {
            this.setList(this.formatList(CityList));
        }, 500)
        // this.setList(this.formatList(CityList));
    },
    methods: {
        formatList(list) {
            let tempArr = [];

            ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"].forEach(initial => {
                let tempObj = {};

                tempObj.key = initial;
                tempObj.data = list.filter(item => item.initial == initial).map(item => {
                    return { name: item.city, code: item.code, short: item.short }
                });

                if (tempObj.data && tempObj.data.length > 0) {
                    tempArr.push(tempObj);
                }
            })
            return tempArr;
        },
        search(e) {
            let value = e.detail.value;
            /*this.setData({
                searchValue: value
            });*/
            this.searchValue = value;
            let cityList = CityList.filter(item => item.city.indexOf(value) > -1 || item.short.indexOf(value) > -1);
            this.setList(this.formatList(cityList));
        },
        clear() {
            /*this.setData({
                searchValue: ""
            });*/
            this.searchValue = ''
            this.setList(this.formatList(CityList));
        },
        setList(listData) {
            let emptyShow = listData.length == 0 ? true : false;

            /*this.setData({
                listData: listData,
                emptyShow: emptyShow
            });*/
            this.listData = listData;
            this.emptyShow = emptyShow;

        },
        itemClick(e) {
            console.log(e);
        }
    }
}
</script>
<style lang="scss">
uni-page-body {
    height: 100%;
    background: #eee;
}
.search {
    padding: 10upx;
    background: #ffffff;
    display: flex;
    align-items: center;
}

.search .hd {
    font-size: 0;
}

.search .bd {
    flex: 1;
}

.search .bd input {
    width: 100%;
    height: 60upx;
    border-radius: 10upx;
    box-sizing: border-box;
}

.search .ft {
    font-size: 0;
    padding: 30upx;
    margin: -30upx;
}
</style>
