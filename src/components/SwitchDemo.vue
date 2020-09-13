<template>
<div>
  <h2>基础用法</h2>
  <Switch v-model:checked="checkedBool1" />
  <h2>禁用状态</h2>
  <Switch v-model:checked="checkedBool2" disabled />
  <h2>自定义大小</h2>
  <Switch v-model:checked="checkedBool3" />
  <h2>自定义颜色</h2>
  <Switch v-model:checked="checkedBool4" />
</div>
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
    <td>30px</td>
  </tr>
  <tr>
    <td>level</td>
    <td>开关打开时的背景颜色</td>
    <td>string</td>
    <td>#40a9ff</td>
  </tr>
</table>
</template>

<script lang="ts">
import {
  ref
} from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const checkedBool1 = ref(false);
    const checkedBool2 = ref(false);
    const checkedBool3 = ref(false);
    const checkedBool4 = ref(false);
    return {
      checkedBool1,
      checkedBool2,
      checkedBool3,
      checkedBool4,
    };
  },
};
</script>

<style lang="scss" scoped>
.kylin-table {
  border-collapse: collapse;
  border: 1px solid #000;

  th {
    border: 1px solid #000;
    padding: 5px 10px;
  }

  td {
    text-align: center;
    padding: 5px 10px;
    border: 1px solid #000;
  }
}
</style>
