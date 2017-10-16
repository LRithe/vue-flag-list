# vue-flag-list

> List of global area codes

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8082
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 使用组件
安装npm包
```
npm install vue-flag-list --save
```
引用vue-flag-list插件
```$xslt
import VueFlagList from 'vue-flag-list'
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
