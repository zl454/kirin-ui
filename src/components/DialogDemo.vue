<template>
<h1>Dialog 示例</h1>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
<div>
  下一节：<a href="#/doc/tabs">Tabs 组件</a>
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  font-size: 2em;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
}

p {
  margin: 0 0 16px;
}
</style>
