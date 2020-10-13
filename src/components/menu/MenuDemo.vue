<template>
<div>
  <h1>菜单</h1>
  <p>kirin-menu 组件展示一个菜单在用于激活它的元素的位置上</p>
  <!--<Demo :component="Toast1Demo" />-->

  <h2 class="props">Menu props</h2>
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
    </tbody>
  </table>
  <!--<p>
    下一节：<a href="#/doc/dialog">Dialog 组件</a>
  </p>-->
</div>
</template>

<script>
// import Demo from "../Demo.vue";
// import Button1Demo from "./Button1.demo.vue"
// export default {
//   components: {
//     Demo,
//   },
//   setup() {
//     return {
//       Button1Demo,
//       Button2Demo,
//       Button3Demo,
//       Button4Demo,
//       Button5Demo,
//     };
//   },
// };
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
