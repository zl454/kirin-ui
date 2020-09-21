<template>
<div class="layout">
  <Topnav class="nav" />
  <div class="topnav">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
  <div class="content">
    <aside v-if="menuVisible">
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
          <router-link to='/doc/switch'>Switch</router-link>
        </li>
        <li>
          <router-link to='/doc/button'>Button</router-link>
        </li>
        <li>
          <router-link to='/doc/dialog'>Dialog</router-link>
        </li>
        <li>
          <router-link to='/doc/tabs'>Tabs</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <section>
        <router-view></router-view>
      </section>
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
    padding-left: 255px;

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
    background: #fff;

    >section {
      margin: 20px auto;
      max-width: 912px;
    }
  }
}

aside {
  background: #fafafa;
  width: 255px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 65px;
  height: 100%;
  z-index: 10;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li {
      a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
      }

      .router-link-active {
        background: #e0e0e0;
      }

      a:hover {
        background: #efefef;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
