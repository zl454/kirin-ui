<template>
<div>
  <h1>Switch 组件演示</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switch1Demo />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Switch1Demo.__sourceCode,Prism.languages.html,'html')" />
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled</h2>
    <div class="demo-component">
      <Switch2Demo />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre class="language-html" v-html="Prism.highlight(Switch2Demo.__sourceCode,Prism.languages.html,'html')" />
    </div>
  </div>
</div>
<!--
  </div>
  <h2>禁用状态</h2>
  <Switch v-model:checked="checkedBool2" disabled />
  <h2>自定义大小</h2>
  大
  <Switch v-model:checked="checkedBool3" size="big" />
  默认
  <Switch v-model:checked="checkedBool3" />
  小
  <Switch v-model:checked="checkedBool3" size="small" />
  <h2>自定义颜色</h2>
  <Switch v-model:checked="checkedBool4" color="red" />

<h2>API</h2>
<h3>props</h3>
<table class="kylin-table">
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>v-model</td>
    <td>开关选中状态</td>
    <td>boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>是否为禁用状态</td>
    <td>boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>size</td>
    <td>开关尺寸，默认单位为px</td>
    <td>nubmer | string</td>
    <td>normal | big | small </td>
  </tr>-->
<!--<tr>
      <td>level</td>
      <td>开关打开时的背景颜色</td>
      <td>string</td>
      <td>#40a9ff</td>
    </tr>
</table>-->
</template>

<script lang="ts">
import {
  ref
} from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import "prismjs";
import "../../node_modules/prismjs/themes/prism.css"; //import问题待解决
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      Switch1Demo,
      Switch2Demo,
      Prism,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
