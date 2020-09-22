<template>
<router-view />
</template>

<script lang="ts">
import {
  onMounted,
  provide,
  ref
} from "vue";
import {
  router
} from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible);
    const getMenuVisible = () => {
      const width = document.documentElement.clientWidth;
      menuVisible.value = width <= 500 ? false : true;
    };
    router.afterEach(() => {
      getMenuVisible();
    });
    onMounted(() => {
      window.onresize = () => {
        getMenuVisible();
      };
    });
  },
};
</script>
