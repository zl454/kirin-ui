<template>
<h1>对话框</h1>
<p>kylin-dialog 对话框用于提示用户作出一些决定，或者是完成某个任务时需要的一些其它额外的信息。</p>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
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
      <td>theme</td>
      <td>按钮的主题</td>
      <td>string</td>
      <td>button</td>
    </tr>
    <tr>
      <td>size</td>
      <td>按钮的大小</td>
      <td>string</td>
      <td>normal</td>
    </tr>
    <tr>
      <td>level</td>
      <td>按钮的颜色</td>
      <td>string</td>
      <td>normal</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>按钮是否为禁用状态</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>按钮是否在加载中</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>
<p>
  下一节：<a href="#/doc/tabs">Tabs 组件</a>
</p>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
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
