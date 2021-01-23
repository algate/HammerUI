# 锤子UI🔨

订阅号搜索 我叫白纸(关注) - 点击 【锤子UI】菜单可以直接访问
微信搜索 【锤子UI】也可以直接访问到小程序

# HammerUI

本项目是一个实验小程序项目，本身是基于ThorUI模板进行开发的。该项目主要是一些uni-app代码片段和组件的分享。项目中大部分组件，还有信息展示，都来源于网络，组件、信息展示、icon等中使用了ColorUI、ThorUI，UniUI组件、集合了Mecroll-Scroll、Ucharts、icon、button等很多三方组件，方便查找。如果想单独使用组件请移步相关Uni-app插件列表寻找相关组件信息进行使用，都可以在插件列表中找的。本项目免费开源，H5效果可在地址[HammerUI]('https://algate.github.io/HammerUI/')上预览。cui开头的都来自于colorUI，tui开头的都来自于thorUI。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
#### 浏览器h5预览
```
yarn serve
```

### Compiles and minifies for production
#### H5端打包部署
```
yarn build
```
#### 开发版微信小程序
```
yarn dev:MP-WEIXIN
```

### Compiles and minifies for production
#### 打包部署上传到小程序
```
yarn build:MP-WEIXIN
```

H5预览地址：[HammerUI](https://algate.github.io/HammerUI/)

小程序预览：微信小程序搜索 【锤子UI】 即可查看

注意：
要用地图，请自行配置相关的地图id

微信要部署，要使用自己的appid

功能列表罗列如下，方便开发的时候，直接找到文件，具体：

1. Canvas是小程序开发的关于canvas的特效

+ 绘制七巧板
+ 动态倒计时
+ 触屏特效
+ 滑动下雪特效
+ 网上收藏的例子动画特效
+ 网上比较多件的，触屏连线特效
+ 手指滑动冒泡特效

2. 基础组件
+ 布局展示
+ icon图片支持模糊搜索
+ 轮播图效果
+ 自定义表单
    - 扫码小程序可以直接测试二维码或者条形码返回的结果
    - 数字加减
    - radio
    - checkbox
    - 日期选择
    - 时间选择器
    - 图片展示
    - 腾讯地图组件
+ 签名画板
+ badge
+ 分割线

3. 功能组件
+ 信息提示
+ 日期选择器
+ N级联动
+ 下拉选择底部弹层
+ 导航+索引
+ 折叠面板
+ 下拉刷新上拉加载
+ ucharts图表展示（小程序中貌似有问题）
+ tree结构树

4. 模仿ThorUI开发的关于我的相关内容
+ 加油站、停车场、天气等相关位置信息获取信息
    - 代码中高德和百度地图api均有实现
+ 小程序反馈问题
+ 如果喜欢，可以赞赏哦！
+ 关于更新版本日志
