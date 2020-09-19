<template>
<div class="topnav">
  <router-link to="/" class="logo"><img src="../images/logo-name.png" alt=""></router-link>
  <ul class="menu" :class="menuBool?'moobile-menu':''">
    <li><input type="search"></li>
    <li>
      <router-link @click="openHomeMenu" class="nav-link" to="/doc">文档</router-link>
    </li>
    <li>
      <router-link @click="openHomeMenu" class="nav-link" to="/">主页</router-link>
    </li>
    <li><a class="nav-link" href="https://github.com/zl454" target="_blank">Github</a></li>
  </ul>
  <svg @click="openHomeMenu" viewBox="64 64 896 896" focusable="false" class="svg" data-icon="unordered-list" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
  </svg>
  <span class="toggleAside" @click="toggleMenu"></span>
</div>
</template>

<script lang="ts">
import {
  inject,
  onMounted,
  ref,
  Ref
} from "vue";
export default {
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const menuBool = ref(true);
    const openHomeMenu = () => {
      menuBool.value = !menuBool.value;
    };
    let flag = false;
    const menuShow = onMounted(() => {
      document.addEventListener("click", (e) => {
        if (document.getElementsByClassName("svg")[0].contains(e.target))
          return;
        flag = document.getElementsByClassName("menu")[0].contains(e.target);

        if (!flag) {
          menuBool.value = true;
        }
      });
    });
    return {
      menuBool,
      openHomeMenu,
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
  z-index: 20;
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

  >.svg {
    margin-right: 1rem;
    display: none;
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
      position: fixed;
      top: 75px;
      right: 0.5rem;
      padding: 0.5rem 0;
      background: rgb(240, 235, 235);
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      >li {
        padding: 0 1rem;
        line-height: 3em;

        input {
          width: 5rem;
        }
      }
    }

    >.moobile-menu {
      display: none;
    }

    >.svg {
      display: block;
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
