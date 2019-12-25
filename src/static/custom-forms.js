module.exports = {
    "list": [
    {
        "type": "scanCode",
        "name": "扫码",
        "model": "scanCode"
    },
    {
        "type": "input",
        "name": "单行文本",
        "icon": "icon-input",
        "options":
        {
            "width": "100%",
            "defaultValue": "",
            "required": false,
            "dataType": "string",
            "pattern": "",
            "placeholder": "请输入当行文本",
            "disabled": false
        },
        "key": "1571127387000_29922",
        "model": "input",
        "rules": [
        {
            "type": "string",
            "message": "单行文本格式不正确"
        }]
    },
    {
        "type": "textarea",
        "name": "多行文本",
        "icon": "icon-diy-com-textarea",
        "options":
        {
            "width": "100%",
            "defaultValue": "",
            "required": false,
            "disabled": false,
            "pattern": "",
            "placeholder": "请输入文本描述",
            "remoteFunc": "func_1571127389000_23072"
        },
        "key": "1571127389000_23072",
        "model": "textarea",
        "rules": []
    },
    {
        "type": "rate",
        "name": "评分",
        "icon": "icon-pingfen1",
        "options":
        {
            "defaultValue": 0,
            "max": 5,
            "disabled": false,
            "allowHalf": false,
            "required": false,
            "remoteFunc": "func_1571127404000_87817"
        },
        "key": "1571127404000_87817",
        "model": "rate",
        "rules": []
    },
    {
        "type": "switch",
        "name": "开关",
        "icon": "icon-switch",
        "options":
        {
            "defaultValue": false,
            "required": false,
            "disabled": false,
            "remoteFunc": "func_1571127407000_57792"
        },
        "key": "1571127407000_57792",
        "model": "switch",
        "rules": []
    },
    {
        "type": "text",
        "name": "文字",
        "icon": "icon-wenzishezhi-",
        "options":
        {
            "defaultValue": "这是一段文本",
            "customClass": "",
            "remoteFunc": "func_1571127408000_87179"
        },
        "key": "1571127408000_87179",
        "model": "text",
        "rules": []
    },
    {
        "type": "cascader",
        "content": "cascaders",
        "name": "级联选择器",
        "icon": "icon-jilianxuanze",
        "options":
        {
            "defaultValue": [],
            "width": "",
            "placeholder": "多级选择器",
            "disabled": false,
            "clearable": false,
            "remote": true,
            "remoteOptions": [],
            "props":
            {
                "value": "value",
                "label": "label",
                "children": "children"
            },
            "remoteFunc": "func_1571127416000_13407"
        },
        "key": "1571127416000_13407",
        "model": "linkage",
        "rules": []
    },
    {
        "type": "editor",
        "name": "编辑器",
        "icon": "icon-fuwenbenkuang",
        "options":
        {
            "defaultValue": "",
            "width": "",
            "remoteFunc": "func_1571127415000_86255"
        },
        "key": "1571127415000_86255",
        "model": "editor",
        "rules": []
    },
    {
        "type": "imgupload",
        "name": "图片",
        "icon": "icon-tupian",
        "options":
        {
            "defaultValue": [],
            "size":
            {
                "width": 100,
                "height": 100
            },
            "width": "",
            "tokenFunc": "funcGetToken",
            "token": "",
            "domain": "http://pfp81ptt6.bkt.clouddn.com/",
            "disabled": false,
            "length": 8,
            "multiple": false,
            "isQiniu": false,
            "isDelete": false,
            "min": 0,
            "isEdit": false,
            "action": "https://jsonplaceholder.typicode.com/photos/",
            "remoteFunc": "func_1571127414000_31487"
        },
        "key": "1571127414000_31487",
        "model": "imgupload",
        "rules": []
    },
    {
        "type": "blank",
        "name": "自定义",
        "icon": "icon-zidingyishuju",
        "options":
        {
            "defaultType": "String",
            "remoteFunc": "func_1571127413000_52162"
        },
        "key": "1571127413000_52162",
        "model": "blank",
        "rules": []
    },
    {
        "type": "cascader",
        "chanpinxian": "chanpinxian",
        "name": "产品型号",
        "icon": "icon-jilianxuanze",
        "options":
        {
            "defaultValue": [],
            "width": "",
            "placeholder": "根据产品线获取产品型号",
            "disabled": false,
            "clearable": false,
            "remote": true,
            "remoteOptions": [],
            "props":
            {
                "value": "value",
                "label": "label",
                "children": "children"
            },
            "remoteFunc": "func_1571127410000_26870"
        },
        "key": "1571127410000_26870",
        "model": "cascader",
        "rules": []
    },
    {
        "type": "cascader",
        "shengshuqu": "shengshiqi",
        "name": "省市区选择器",
        "icon": "icon-jilianxuanze",
        "options":
        {
            "defaultValue": [],
            "width": "",
            "placeholder": "请选择省市区",
            "disabled": false,
            "clearable": false,
            "remote": true,
            "remoteOptions": [],
            "props":
            {
                "value": "value",
                "label": "label",
                "children": "children"
            },
            "remoteFunc": "func_1571127409000_11139"
        },
        "key": "1571127409000_11139",
        "model": "region",
        "rules": []
    },
    {
        "type": "slider",
        "name": "滑块",
        "icon": "icon-slider",
        "options":
        {
            "defaultValue": 0,
            "disabled": false,
            "required": false,
            "min": 0,
            "max": 100,
            "step": 1,
            "showInput": false,
            "range": false,
            "width": "",
            "remoteFunc": "func_1571127408000_2681"
        },
        "key": "1571127408000_2681",
        "model": "slider",
        "rules": []
    },
    {
        "type": "select",
        "name": "下拉选择框",
        "icon": "icon-select",
        "options":
        {
            "defaultValue": "",
            "multiple": false,
            "disabled": false,
            "clearable": false,
            "placeholder": "下拉请选择",
            "required": false,
            "showLabel": false,
            "width": "",
            "options": [
            {
                "value": "下拉框1"
            },
            {
                "value": "下拉框2"
            },
            {
                "value": "下拉框3"
            }],
            "remote": false,
            "filterable": false,
            "remoteOptions": [],
            "props":
            {
                "value": "value",
                "label": "label"
            },
            "remoteFunc": "func_1571127406000_77850"
        },
        "key": "1571127406000_77850",
        "model": "select",
        "rules": []
    },
    {
        "type": "color",
        "name": "颜色选择器",
        "icon": "icon-color",
        "options":
        {
            "defaultValue": "",
            "disabled": false,
            "showAlpha": false,
            "required": false,
            "remoteFunc": "func_1571127405000_97877"
        },
        "key": "1571127405000_97877",
        "model": "color",
        "rules": []
    },
    {
        "type": "number",
        "name": "计数器",
        "icon": "icon-number",
        "options":
        {
            "width": "",
            "required": false,
            "defaultValue": 0,
            "min": 0,
            "max": 0,
            "step": 1,
            "placeholder": "请输入数字",
            "disabled": false,
            "controlsPosition": "",
            "remoteFunc": "func_1571127396000_53684"
        },
        "key": "1571127396000_53684",
        "model": "number",
        "rules": []
    },
    {
        "type": "radio",
        "name": "单选框组",
        "icon": "icon-radio-active",
        "options":
        {
            "inline": false,
            "defaultValue": "",
            "showLabel": false,
            "options": [
            {
                "value": "选项1",
                "label": "选项1"
            },
            {
                "value": "选项2",
                "label": "选项2"
            },
            {
                "value": "选项3",
                "label": "选项3"
            }],
            "required": false,
            "width": "",
            "remote": false,
            "remoteOptions": [],
            "props":
            {
                "value": "value",
                "label": "label"
            },
            "remoteFunc": "func_1571127397000_26555",
            "disabled": false
        },
        "key": "1571127397000_26555",
        "model": "radio",
        "rules": []
    },
    {
        "type": "checkbox",
        "name": "多选框组",
        "icon": "icon-check-box",
        "options":
        {
            "inline": false,
            "defaultValue": [],
            "showLabel": false,
            "options": [
            {
                "value": "选项1"
            },
            {
                "value": "选项2"
            },
            {
                "value": "选项3"
            }],
            "required": false,
            "width": "",
            "remote": false,
            "remoteOptions": [],
            "props":
            {
                "value": "value",
                "label": "label"
            },
            "remoteFunc": "func_1571127399000_67409",
            "disabled": false
        },
        "key": "1571127399000_67409",
        "model": "checkbox",
        "rules": []
    },
    {
        "type": "date",
        "name": "日期选择器",
        "icon": "icon-date",
        "options":
        {
            "defaultValue": "",
            "readonly": false,
            "disabled": false,
            "editable": true,
            "clearable": true,
            "placeholder": "选择日期",
            "startPlaceholder": "",
            "endPlaceholder": "",
            "type": "date",
            "format": "yyyy-MM-dd",
            "timestamp": false,
            "required": false,
            "width": "",
            "remoteFunc": "func_1571127403000_58853"
        },
        "key": "1571127403000_58853",
        "model": "date"
    },
    {
        "type": "time",
        "name": "时间选择器",
        "icon": "icon-time",
        "options":
        {
            "defaultValue": "",
            "readonly": false,
            "disabled": false,
            "editable": true,
            "clearable": true,
            "placeholder": "选择时间",
            "startPlaceholder": "",
            "endPlaceholder": "",
            "isRange": false,
            "arrowControl": true,
            "format": "HH:mm:ss",
            "required": false,
            "width": "",
            "remoteFunc": "func_1571127400000_66506"
        },
        "key": "1571127400000_66506",
        "model": "time"
    },
    {
        "type": "picture",
        "name": "图片展示",
        "options": {
            "options": [
                    "http://shp.qpic.cn/ishow/2735092409/1569290387_84828260_13119_sProdImgNo_2.jpg/0",
                    "http://shp.qpic.cn/ishow/2735062811/1561692452_-695593207_23925_sProdImgNo_2.jpg/0",
                    "http://shp.qpic.cn/ishow/2735070910/1562640168_1186005513_17698_sProdImgNo_2.jpg/0",
                    "http://shp.qpic.cn/ishow/2735061310/1560394439_-695593207_21939_sProdImgNo_3.jpg/0",
                    "http://shp.qpic.cn/ishow/2735011517/1547545098_-888937974_18837_sProdImgNo_3.jpg/0"
            ]
        },
        "mode": "image"
    },
    {
        "type": "phone",
        "name": "手机号码",
        "options": {
            "placeholder": "请输入手机号码",
            "verificationCode": true
        },
        "mode": "telephone"
    },
    {
        "type": "map",
        "name": "地图展示",
        "mode": "map"
    }]
}
