<template>
<div class="topnav">
  <router-link to="/" class="logo"><img src="../images/logo-name.png" alt=""></router-link>
  <ul class="menu">
    <li><input type="search"></li>
    <li>
      <router-link class="nav-link" to="/doc">文档</router-link>
    </li>
    <li>
      <router-link class="nav-link" to="/">主页</router-link>
    </li>
    <li><a class="nav-link" href="https://github.com/zl454">Github</a></li>
  </ul>
  <span class="toggleAside" @click="toggleMenu"></span>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
export default {
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: white;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaecef;

  >.logo {
    max-width: 6em;
    margin-right: auto;

    >img {
      margin: 12px 0;
      height: 36px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1.2em;

      >input {
        cursor: text;
        width: 10rem;
        height: 2rem;
        color: #4e6e8e;
        display: inline-block;
        border: 1px solid #cfd4db;
        border-radius: 2rem;
        font-size: 0.9rem;
        line-height: 2rem;
        padding: 0 0.5rem 0 2rem;
        outline: none;
        transition: all 0.2s ease;
        background: #fff url(../images/search.svg) 0.6rem 0.5rem no-repeat;
        background-size: 1rem;

        &:focus {
          cursor: auto;
          border-color: #3eaf7c;
        }
      }

      >.nav-link:hover {
        color: #3eaf7c;
      }

      >a {
        line-height: 2rem;
        color: #000;
      }
    }
  }

  >.toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>
