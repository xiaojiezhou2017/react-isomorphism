# react-isomorphism
react前后端同构架构

> 前言

前段时间开发的项目的都是用的react技术栈,也接触到了一些关于react前后端同构的项目, 一直对前后端同构的架构的很感兴趣,所以就自己搭建了这个架构. 由于
是第一次搭建这样的架子, 本着学习的目的,希望能从中学习到一些东西.

> 项目目录
```
├── build
│   └── webpack.dev.conf.js   // 开发环境的配置文件
|   └── webpack.dll.conf.js   // 第三方库文件打包
|   └── webpack.pro.conf.js   // 生产环境打包配置文件
├── src
│   ├── components            // 组件目录
│   ├── containers            // 路由级别页面
│   └── store                 // 状态
└── static                    // 生产环境打包后的静态目录    
└── App.js                    // 应用的入口文件
└── entry-client              // 客户端入口
└── entry-server              // 服务端入口
```
> 开发构建步骤
```
 yarn dll      // 先打包第三方库
 yarn dev      // 打包客户端文件
 yarn server   // 启动服务器
```

> 生产环境构建
```
yarn dll:pro   // 打包生产环境下的第三方库
yarn pro       // 打包生产环境文件
yarn server    // 启动服务器         
```
