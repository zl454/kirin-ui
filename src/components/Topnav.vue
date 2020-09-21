<template>
  <div class="topnav">
    <router-link
      to="/"
      class="logo"
    ><img
        src="../images/logo-name.png"
        alt=""
      ></router-link>
    <ul
      class="menu"
      :class="menuBool?'moobile-menu':''"
    >
      <li><input type="search"></li>
      <li>
        <router-link
          @click="openHomeMenu"
          class="nav-link"
          to="/doc/introduce"
        >文档</router-link>
      </li>
      <li>
        <router-link
          @click="openHomeMenu"
          class="nav-link"
          to="/"
        >主页</router-link>
      </li>
      <li><a
          class="nav-link"
          href="https://github.com/zl454"
          target="_blank"
        >Github</a></li>
    </ul>

    <svg
      @click="openHomeMenu"
      t="1600534030757"
      class="svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2869"
      width="1em"
      height="1em"
    >
      <path
        d="M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z"
        fill="#181818"
        p-id="2870"
      ></path>
    </svg>

    <svg
      @click="toggleMenu"
      t="1600533797098"
      class="toggleAside"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2610"
      width="1em"
      height="1em"
    >
      <path
        d="M768 832a64 64 0 1 1 0.032-128.032A64 64 0 0 1 768 832m-448-64a64 64 0 1 1-128.032-0.032A64 64 0 0 1 320 768m128-512a64 64 0 1 1 128.032 0.032A64 64 0 0 1 448 256m352 388.544V480h-256v-100.544c55.072-14.304 96-64 96-123.456 0-70.592-57.44-128-128-128-70.592 0-128 57.408-128 128 0 59.456 40.928 109.152 96 123.456V480H224V644.544c-55.072 14.304-96 64-96 123.456 0 70.592 57.408 128 128 128 70.56 0 128-57.408 128-128 0-59.456-40.928-109.152-96-123.456V544h448v100.544c-55.072 14.304-96 64-96 123.456 0 70.592 57.408 128 128 128 70.56 0 128-57.408 128-128 0-59.456-40.928-109.152-96-123.456"
        fill="#000000"
        p-id="2611"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, ref, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
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
        if (
          document
            .getElementsByClassName("svg")[0]
            .contains(e.target as HTMLElement)
        )
          return;
        flag = document
          .getElementsByClassName("menu")[0]
          .contains(e.target as HTMLElement);

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
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08);

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > img {
      margin: 12px 0;
      height: 36px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1.2em;

      > input {
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

      > .nav-link:hover {
        color: #3eaf7c;
      }

      > a {
        line-height: 2rem;
        color: #000;
      }
    }
  }

  > .svg {
    margin-right: 1rem;

    cursor: pointer;
    display: none;
  }

  > .toggleAside {
    position: absolute;
    cursor: pointer;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
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

      > li {
        padding: 0 1rem;
        line-height: 3em;

        input {
          width: 5rem;
        }
      }
    }

    > .moobile-menu {
      display: none;
    }

    > .svg {
      display: block;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
