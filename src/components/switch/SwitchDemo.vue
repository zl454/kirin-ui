<template>
<div>
  <h1>开关</h1>
  <p>kelin-switch 开关控件，可以定制不同的样式</p>
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
  <Demo :component="Switch3Demo" />
  <h2 class="props">Switch props</h2>
  <table class="kirin-table">
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
        <td>value</td>
        <td>开关状态</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>开关是否为禁用状态</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>开关的大小</td>
        <td>string</td>
        <td>normal</td>
      </tr>
    </tbody>
  </table>
  <p>
    下一节：<a href="#/doc/button">Button 组件</a>
  </p>
</div>
</template>

<script lang="ts">
import {
  ref
} from "vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch3Demo from "./Switch3.demo.vue";
import Demo from "../Demo.vue";
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
