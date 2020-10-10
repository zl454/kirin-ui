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
   
### 3、安装并初始化 vue-router4
- 安装 vue-router4  
```
运行 npm info vue-router version 查询版本
运行 npm insall vue-router@4.0.0-beta.3 安装vue-router4
```
- 初始化 vue-router
```JavaScript
// router.ts 文件
//引入 history 对象，引入 router 对象
import { createWebHashHistory, createRouter } from "vue-router"
//引入 Hone、Doc、DocDemo 组件
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'
import DocDemo from './components/DocDemo.vue'
//创建 history 对象，hash模式
const history = createWebHashHistory()
//创建 router 对象
export const router = createRouter({
  history: history,
  routes: [
    //根路径路由，显示 Home 组件
    { path: '/', component: Home },
    {
      // 创建路径'/doc'和他的子路径
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
      ]
      }
  ]
})
```
```JavaScript
// main.ts 文件
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```
新建 `shims-vue.ts` 让 `TS` 能够解析 `vue` 文件
```JavaScript
// shims-vue.ts 文件
declare module '*vue' {
  import { ComponentOptions } from "vue"
  const Componentoptions: ComponentOptions
  export default Componentoptions
}
```
- 添加`<router-view>`   
显示路由组件的区域
- 添加`<router-link>`   
路由跳转链接

### 4、安装 SASS
> `npm install sass -D` 安装sass到生产依赖  

**-S、-D、-g 的区别**

`npm i module_name  -S`  = >  `npm install module_name --save`    写入到 `dependencies` 对象

`npm i module_name  -D`  => `npm install module_name --save-dev`   写入到 `devDependencies` 对象

`npm i module_name  -g`  全局安装

### 6、封装 TopNav 并引入到 Home 与 Doc 中
### 7、在 Doc 中创建侧边栏并实现点击切换功能
使用 `provie` 与 `inject` 实现切换功能 [Vue 依赖注入 - Provide/Inject](https://www.jianshu.com/p/6651dccd282c)
### 8、封装 TopNav
### 9、适配手机样式
### 10、侧边栏路由间组件切换
### 11、官网完成

## NPM
### 查询当前的 NPM 源
> npm config get registry
### 
