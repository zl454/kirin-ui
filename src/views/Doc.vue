<template>
<div class="layout">
  <Topnav class="nav" />
  <div class="topnav">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
  <div class="content">
    <aside v-if="menuVisible">
      <!--<h2>关于Kylin-UI</h2>
      <h2>开发指南</h2>
      <h2>组件</h2>-->
      <ol>
        <li>
          <router-link to='/doc/introduce'>kylin-ui 简介</router-link>
        </li>
        <li>
          <router-link to='/doc/install'>安装指南</router-link>
        </li>
        <li>
          <router-link to='/doc/get-start'>开始使用</router-link>
        </li>
        <li>
          <router-link to='/doc/switch'>Switch 组件</router-link>
        </li>
        <li>
          <router-link to='/doc/button'>Button 组件</router-link>
        </li>
        <li>
          <router-link to='/doc/dialog'>Dialog 组件</router-link>
        </li>
        <li>
          <router-link to='/doc/tabs'>Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible");
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: #f1f2f6;
  }
}

aside {
  background: #dfe4ea;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li {
      a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
