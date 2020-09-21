<template>
<div>
  <h1>按钮</h1>
  <p>kylin-button 按钮组件，可以定制不同的颜色或者样式来替换标准的 html 按钮</p>
  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />

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
    下一节：<a href="#/doc/dialog">Dialog 组件</a>
  </p>
</div>
</template>

<script>
import Demo from "../Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
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
