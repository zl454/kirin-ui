<template>
<div class="topnav">
  <router-link to="/" class="logo"><img src="../images/logo-name.png" alt=""></router-link>
  <ul class="menu" :class="menuBool?'moobile-menu':''">
    <li class="search"><input type="search" @keyup="getSearchList">
      <ul class="search-list">
        <li v-for="(item,index) in searchList" :key="index">
          <router-link :to="{path:item.path}" @click="hiddenList">{{item.name}}</router-link>
        </li>
      </ul>
    </li>
    <li>
      <router-link @click="openHomeMenu" class="nav-link" to="/doc/introduce">文档</router-link>
    </li>
    <li>
      <router-link @click="openHomeMenu" class="nav-link" to="/">主页</router-link>
    </li>
    <li><a class="nav-link" href="https://github.com/zl454" target="_blank">Github</a></li>
  </ul>

  <svg @click="toggleMenu" class="toggleAside" t="1602512593814" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3869" width="1em" height="1em">
    <path d="M134.095238 256C147.560466 256 158.476191 246.448741 158.476191 234.666667 158.476191 222.884592 147.560466 213.333333 134.095238 213.333333L36.571428 213.333333C23.1062 213.333333 12.190476 222.884592 12.190476 234.666667 12.190476 246.448741 23.1062 256 36.571428 256L134.095238 256Z" p-id="3870" fill="#707070"></path>
    <path d="M134.095238 533.333333C147.560466 533.333333 158.476191 523.782074 158.476191 512 158.476191 500.217926 147.560466 490.666667 134.095238 490.666667L36.571428 490.666667C23.1062 490.666667 12.190476 500.217926 12.190476 512 12.190476 523.782074 23.1062 533.333333 36.571428 533.333333L134.095238 533.333333Z" p-id="3871" fill="#707070"></path>
    <path d="M134.095238 810.666667C147.560466 810.666667 158.476191 801.115407 158.476191 789.333333 158.476191 777.55126 147.560466 768 134.095238 768L36.571428 768C23.1062 768 12.190476 777.55126 12.190476 789.333333 12.190476 801.115407 23.1062 810.666667 36.571428 810.666667L134.095238 810.666667Z" p-id="3872" fill="#707070"></path>
    <path d="M987.428572 256C1000.893801 256 1011.809523 246.448741 1011.809523 234.666667 1011.809523 222.884592 1000.893801 213.333333 987.428572 213.333333L280.380951 213.333333C266.915725 213.333333 256 222.884592 256 234.666667 256 246.448741 266.915725 256 280.380951 256L987.428572 256Z" p-id="3873" fill="#707070"></path>
    <path d="M993.52381 533.333333C1006.989037 533.333333 1017.904762 523.782074 1017.904762 512 1017.904762 500.217926 1006.989037 490.666667 993.52381 490.666667L286.47619 490.666667C273.010963 490.666667 262.095238 500.217926 262.095238 512 262.095238 523.782074 273.010963 533.333333 286.47619 533.333333L993.52381 533.333333Z" p-id="3874" fill="#707070"></path>
    <path d="M996.571428 810.666667C1010.036657 810.666667 1020.952382 801.115407 1020.952382 789.333333 1020.952382 777.55126 1010.036657 768 996.571428 768L289.52381 768C276.058581 768 265.142857 777.55126 265.142857 789.333333 265.142857 801.115407 276.058581 810.666667 289.52381 810.666667L996.571428 810.666667Z" p-id="3875" fill="#707070"></path>
  </svg>

  <svg @click="openHomeMenu" class="svg" t="1602512422335" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3675" width="1em" height="1em">
    <path d="M814.420577 649.150377h-161.17293a29.610593 29.610593 0 0 1-29.589259-29.589259v-161.172931c0-16.319959 13.2693-29.589259 29.589259-29.589259h161.17293c16.319959 0 29.589259 13.2693 29.58926 29.589259v161.172931c0 16.298626-13.2693 29.589259-29.58926 29.589259z m-145.578302-45.183887h129.983675v-129.983675h-129.983675v129.983675zM814.420577 903.464408h-161.17293a29.610593 29.610593 0 0 1-29.589259-29.589259v-161.172931c0-16.319959 13.2693-29.589259 29.589259-29.589259h161.17293c16.319959 0 29.589259 13.2693 29.58926 29.589259v161.172931c0 16.319959-13.2693 29.589259-29.58926 29.589259z m-145.578302-45.183887h129.983675v-129.983675h-129.983675v129.983675zM560.618545 903.464408h-161.17293a29.610593 29.610593 0 0 1-29.58926-29.589259v-161.172931c0-16.319959 13.2693-29.589259 29.58926-29.589259h161.17293c16.319959 0 29.589259 13.2693 29.589259 29.589259v161.172931c0 16.319959-13.2693 29.589259-29.589259 29.589259z m-145.578303-45.183887h129.983675v-129.983675h-129.983675v129.983675z" p-id="3676" fill="#707070"></path>
    <path d="M948.03091 323.135192v-0.234666h-0.319999L519.530648 5.589319a27.946597 27.946597 0 0 0-33.514583 0L1.686609 378.196388l34.069248 44.138556 43.007893-32.938584v558.057271A76.458476 76.458476 0 0 0 155.862224 1023.99744h715.624877a76.565142 76.565142 0 0 0 76.543809-76.543809l-0.085333-454.548197a27.925264 27.925264 0 1 0-55.850527 0v115.903711c0 0.319999 0.085333 0.597332 0.085333 0.917331v337.727155a20.693282 20.693282 0 0 1-21.226614 20.117283H155.862224a20.671948 20.671948 0 0 1-21.226614-20.117283V346.644467L502.784023 64.810505l361.983095 265.791335v-0.405332l100.501082 73.386483v0.810665l25.215937 18.517287 31.850587-44.693222-74.303814-55.082529z" p-id="3677" fill="#707070"></path>
  </svg>

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
    //初始搜索列表
    const lists = [{
        name: "Switch",
        path: "/doc/switch",
      },
      {
        name: "button",
        path: "/doc/button",
      },
      {
        name: "dialog",
        path: "/doc/dialog",
      },
      {
        name: "tabs",
        path: "/doc/tabs",
      },
    ];
    const searchList = ref([]);
    //显示列表
    const showList = () => {
      const el = document.querySelector(".search-list") as HTMLElement;
      el.style.display = "block";
      document.addEventListener("click", (e) => {
        if (
          (document.querySelector(".search") as HTMLElement).contains(
            e.target as HTMLElement
          )
        )
          return;
        el.style.display = "none";
      });
    };
    //隐藏列表
    const hiddenList = (e) => {
      (document.querySelector(".search-list") as HTMLElement).style.display =
        "none";
    };
    //获取搜索列表
    const getSearchList = (e) => {
      if (!e.target.value) return (searchList.value = []);
      searchList.value = lists.filter((item, index) => {
        if (~item.name.toLowerCase().indexOf(e.target.value.toLowerCase())) {
          return item;
        }
      });
      showList();
    };
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
      searchList,
      showList,
      hiddenList,
      lists,
      getSearchList,
      menuBool,
      openHomeMenu,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  height: 60px;
  background: white;
  display: flex;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaecef;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08);

  >.logo {
    margin-right: auto;

    >img {
      display: block;
      margin: 18px 0;
      height: 24px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 0.5em;
      position: relative;

      >.search-list {
        display: none;
        width: 15rem;
        max-height: 30rem;
        overflow: auto;
        position: absolute;
        right: 0;
        padding: 1rem 0;
        background: #ffffff;
        z-index: 11;
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
          0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

        >li {
          &:hover {
            background: yellow;
          }

          >a {
            display: inline-block;
            width: 100%;
            padding: 1rem 1.5rem;
            line-height: 1.5;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.87);
          }
        }
      }

      >input {
        cursor: text;
        width: 9rem;
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
        background: #fff url("../images/search.svg") 0.6rem 0.5rem no-repeat;
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

    cursor: pointer;
    display: none;
  }

  >.toggleAside {
    position: absolute;
    cursor: pointer;
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
