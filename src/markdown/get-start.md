# 开始使用

请先<a href="#/doc/install">安装</a>本组件库。  
然后在你的代码中写入下面的代码  
```
import {Button, Tabs, Switch, Dialog} from "kirin-ui-1"
```
就可以使用我们提供的组件了。  

##  Vue 单文件组件
代码示例：
```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
  import {Button, Tabs, Tab , Switch, Dialog , openDialog} from "king-ui-1"
  export default {
    components: {Button}
  }
</script>
```
下一节：[Switch 组件](#/doc/switch)
