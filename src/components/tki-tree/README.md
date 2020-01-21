### 树形选择器

### 使用方法
在 `script` 中引入组件
``` javascript
import tkiTree from "@/components/tki-tree/tki-tree.vue"
export default {
    components: {tkiTree}
}
```
在 `template` 中使用
``` javascript
<tki-tree ref="tkitree" :range="range" :rangeKey="rangeKey" confirmColor="#4e8af7" />
```
### 属性
|属性名|类型|默认值|可选值|说明|
|:-|:-:|:--:|:--:|-:|
|range|Array|[]| |数据|
|rangeKey|String|label| |指定 Object 中 key 的值作为选择器显示的内容|
|multiple|Boolean|false| |是否多选。默认单选|
|selectParent|Boolean|false| |是否可以选父级。默认不能选父级|
|title|String| | |标题|
|confirmColor|String|#07bb07| |确定按钮颜色|
|titleColor|String|#07bb07| |标题颜色|
|cancelColor|String|#757575| |取消按钮颜色|
|currentIcon|String| | |展开时候的ic|
|defaultIcon|String| | |折叠时候的ic|
|lastIcon|String| | |没有子集的ic|
|border|Boolean|false| |是否有分割线|



###  数据格式
<details>
<summary>数据格式</summary>

注意：必须有id字段，且唯一

``` json
[
    {
        id: 1,
        name: '题库',
        children: [{
            id: 11,
            name: '语文',
            children: [{
                id: 111,
                name: '高一卷',
                
            },{
                id: 112,
                name: '高二卷',
                
            }]
        },{
            id: 12,
            name: '数学',
            
        } ]
    },
    {
        id: 2,
        name: '高考',
        children: [{
            id: 21,
            name: '高考1',
            
        },{
            id: 22,
            name: '高考2',
            
        },{
            id: 23,
            name: '高考3',
            
        }, ]
    },
    {
        id: 3,
        name: '课程'
    },
    {
        id: 4,
        name: '论文',
        children: [{
            id: 41,
            name: '论文分享',
            
        }]
    }
]
```
</details>

### 方法
|方法名|参数|默认值|说明|
|:-|:-:|:--:|-:|
|_show()| | |显示选择器|
|_hide()| | |隐藏选择器|

### 事件
|事件名|返回值|说明|
|:-|:-:|-:|
|confirm|JSON数据|返回选择器选中的内容|
|cancel|''|取消的回调事件|