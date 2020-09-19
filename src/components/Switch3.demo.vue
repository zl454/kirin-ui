<demo>
  改变大小
</demo>
<template>
<div>
  <Switch v-model:value="bool" size="big" />
  <Switch v-model:value="bool" />
  <Switch v-model:value="bool" size="small" />
</div>
</template>

<script lang="ts">
import {
  ref
} from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
