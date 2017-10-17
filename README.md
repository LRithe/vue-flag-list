# vue-flag-list

> List of global area codes

## 使用组件
安装npm包
```$xslt
npm install vue-flag-list --save
```
引用vue-flag-list插件
```$xslt
import VueFlagList from 'vue-flag-list'
import 'vue-flag-list/dist/vue-flag-list.min.css'

Vue.use(VueFlagList)
```
在组件中使用
```$xslt
<flagCode height="30" width="120" @getCode="getCode"></flagCode>

methos: {
    getCode(code) {
        console.log(code)
    }
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
