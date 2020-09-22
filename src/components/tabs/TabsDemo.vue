<template>
<h1>选项卡</h1>
<p>kylin-tabs 选项卡切换组件</p>
<Demo :component="Tabs1Demo" />
<Demo :component="Tabs2Demo" />
<Demo :component="Tabs3Demo" />
<Demo :component="Tabs4Demo" />
<h2 class="props">Button props</h2>
<table class="kylin-table">
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>center</td>
      <td>kylin-tab 是否居中显示</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>color</td>
      <td>颜色</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v-model:selected</td>
      <td>用于控制 kylin-tab 的激活状态</td>
      <td>-</td>
      <td>0</td>
    </tr>
    <tr>
      <td>full-width</td>
      <td>是否自动适应父元素宽度</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import Tabs2Demo from "./Tabs2.demo.vue";
import Tabs3Demo from "./Tabs3.demo.vue";
import Tabs4Demo from "./Tabs4.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
      Tabs2Demo,
      Tabs3Demo,
      Tabs4Demo,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  font-size: 2em;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
}

h2 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

p {
  margin: 16px 0;
}

.props {
  color: rgba(0, 0, 0, 0.54);
}

table {
  width: 100%;
  word-break: normal;
  word-break: keep-all;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;

  thead {
    display: table-header-group;
    vertical-align: middle;

    >tr {
      >th {
        padding-left: 24px;
        padding-right: 24px;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        font-weight: 400;
        height: 56px;
        color: rgba(0, 0, 0, 0.54);
        position: relative;
      }
    }
  }

  tbody {
    >tr {
      >td {
        height: 48px;
        text-overflow: ellipsis;
        padding-left: 24px;
        padding-right: 24px;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
}

@media (max-width: 500px) {
  table {
    display: block;
    overflow: hidden;
    overflow-x: auto;
  }
}
</style>
