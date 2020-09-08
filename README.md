# kylin-ui组件库

##  一、环境搭建

### 1、安装 Node.js

+ 进入 https://nodejs.org/zh-cn/ 点击左边的下载按钮即可，下载后将 Node.js 安装到 D:\node 或者 C:\node 然后一路点击「下一步」即可安装

### 2、安装 npm

+ 不用安装， Node.js 自带 npm  

### 3、npm 下载加速  

+ 在命令行中运行 `npm config set registry https://registry.npm.taobao.org` 回车即可  

### 4、安装 yarn  

+ 进入 https://classic.yarnpkg.com/zh-Hans/ 往下滚，点击「下载安装程序」，下载后将 yarn 安装到 D:\yarn 或者 C:\yarn 然后一路点击「下一步」即可安装  

### 5、使用 VSCode 开发
----
## 二、使用 Vite 搭建官网  

### 1、创建项目

#### 全局安装 create-vite-app 

> `yarn global add create-vite-app@1.18.0`  或者  `npm i -g create-vite-app@1.18.0`  

#### 创建项目

> `cva kylin-ui` 或者 `create-vite-app kylin-ui`  

#### 进入项目目录，初始化项目

>`npm install`  或者  `yarn`   

#### 运行项目
>`npm run dev` 或者 `yarn dev`

##### **知识点:**  
- 简化命令：`npx create-vite-app <project-name>` npx 会自动全局安装用到的包

### 2、初始化项目

- 在 components 目录添加 Frank.vue 组件
- 在 App.vue 中引入 Frank 组件，并添加到页面中

##### **知识点：Vue 2 和 Vue 3 的区别**  
- 90%的写法完全不一致，除了以下几点
- Vue 3 的 Template 支持多个跟标签，Vue 2 不支持
- Vue 3 有 createApp()，而 Vue 2 的是 new Vue()
- createApp(组件)，new Vue({template,render})
   
### 3、安装并初始化 vue-router

