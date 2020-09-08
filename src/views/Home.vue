<template>
<div>
  <Topnav />
  <main class="home">
    <header class="banner">
      <img src="../images/logo.png" alt="">
      <h1>Kylin-UI</h1>
      <p class="description">一款基于 Vue3 和 TypeScript 开发的 UI 组件</p>
      <p class="actions">
        <a href="#">GitHub搭建中···</a>
        <router-link to="/doc">get start →</router-link>
      </p>
    </header>
    <div class="features">
      <div class="feature">
        <h2>简明优先</h2>
        <p>极简化设计，注重内部功能实现。</p>
      </div>
      <div class="feature">
        <h2>Vue 驱动</h2>
        <p>一款基于 Vue 的 UI 组件库。</p>
      </div>
      <div class="feature">
        <h2>简明优先</h2>
        <p>自动化测试，保证每个组件质量。</p>
      </div>
    </div>
    <footer>
      Copyright © 2020 by flynn
    </footer>
  </main>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 4rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;

  >header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;

    >img {
      max-width: 100%;
      // max-height: 280px;
      margin: 120px 0 80px;
    }

    >h1 {
      font-size: 3rem;
      margin: 1rem 0;
      font-weight: bold;
    }

    >.description {
      font-size: 1.6rem;
      max-width: 35rem;
      text-align: center;
      color: #6a8bad;
      margin: 1rem 0;
    }

    >.actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #389d70;
        font-size: 1rem;
        color: white;
        display: inline-block;
        $h: 2.5rem;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
      }

      a:hover {
        background-color: #4abf8a;
      }
    }
  }

  >.features {
    border-top: 1px solid #eaecef;
    padding: 2em 0;
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: stretch;

    >.feature {
      flex-grow: 1;
      flex-basis: 30%;
      max-width: 30%;

      >h2 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 3rem;
        height: 3rem;
        border-bottom: none;
        padding-bottom: 0;
        color: #3a5169;
      }

      >p {
        color: #3a5169;
      }
    }
  }

  >footer {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
  }
}
</style>
