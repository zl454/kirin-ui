<demo>
  改变大小
</demo>
<template>
大：
<Switch v-model:value="bool" size="big" />
默认：
<Switch v-model:value="bool" />
小：
<Switch v-model:value="bool" size="small" />
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
