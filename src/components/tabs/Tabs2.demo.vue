<demo>
  居中显示
</demo>
<template>
<Tabs v-model:selected="title" center>
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
  <Tab title="导航3">内容3</Tab>
  <Tab title="导航4">内容4</Tab>
</Tabs>
</template>

<script>
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const title = ref("导航1");
    return {
      title,
    };
  },
};
</script>
