<template>
<div>
  <h1>Switch 组件展示</h1>
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
  <Demo :component="Switch3Demo" />
  <div>
    下一节：<a href="#/doc/button">Button 组件</a>
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
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch3Demo from "./Switch3.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo,
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
