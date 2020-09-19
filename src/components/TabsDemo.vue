<template>
<div>
  <h1>Tabs 实例</h1>
  <Demo :component="Tabs1Demo" />
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
    };
  },
};
</script>
