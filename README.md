# backage-blog-vue

## 开发中的参考资料

* [一步一步完成nodejs+express+mysql的简单实例开发](https://blog.csdn.net/hust_cxl/article/details/79929093)  
* [Windows平台安装MySQL和Navicat](https://my729.github.io/blog/article/MySQL%E5%92%8CNavicat%E7%9A%84%E5%AE%89%E8%A3%85.html)

## 问题

1. yarn serve 启动时遇到 "vue-cli-service 不是内部或外部命令,也不是可运行的程序"报错
解决办法将项目里的“node_modules”文件夹删除，然后重新运行yarn install

## 开发记录

1. 如果需要用到某个插件/框架/库，使用yarn add 命令安装
2. node连接mysql[一步一步完成nodejs+express+mysql的简单实例开发](https://blog.csdn.net/hust_cxl/article/details/79929093)
3. 配置路径别名，创建vue.config.js

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
