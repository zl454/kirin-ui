<template>
<div class="body">
  <Topnav />
  <main class="home">
    <header class="banner">
      <img src="../images/logo.png" alt="">
      <p class="description">一款基于 Vue3 和 TypeScript 开发的 UI 组件</p>
      <p class="actions">
        <a href="https://github.com/zl454" target="_blank">GitHub</a>
        <router-link to="/doc">get start →</router-link>
      </p>
    </header>
    <div class="features">
      <div class="feature">
        <h2>简明优先</h2>
        <p>极简化设计，注重内部功能实现。</p>
      </div>
      <div class="feature">
        <h2>Vue3 驱动</h2>
        <p>一款基于 Vue3 的 UI 组件库，api友好，可用于开发的复杂单页面应用</p>
      </div>
      <div class="feature">
        <h2>可定制</h2>
        <p>Kirin UI 自定义主题方式极为优雅，仅需少量代码即可完成主题样式替换</p>
      </div>
    </div>
    <footer>
      Copyright © 2020 by ZhangLin
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
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  >header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >img {
      max-width: 100%;
      // max-height: 280px;
      margin: 80px 0 70px;
      user-select: none;
    }

    >h1 {
      font-size: 3rem;
      margin: 0.5rem 0;
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
    padding: 2em;
    margin-top: 3rem;
    display: flex;
    flex: auto;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: stretch;

    >.feature {
      margin-bottom: 3rem;

      // flex-grow: 1;
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

    @media (min-width: 800px) {
      flex-direction: row;

      >.feature {
        flex-grow: 1;
        flex-basis: 30%;
        max-width: 30%;
      }
    }
  }

  >footer {
    padding: 1.5rem 0;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
  }
}
</style>
