<demo>
  常规用法
</demo>
<template>
<Switch v-model:value="open" />
<Switch v-model:value="close" />
</template>

<script lang="ts">
import {
  ref
} from "vue";
import Switch from "../../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const close = ref(false);
    const open = ref(true);
    return {
      close,
      open,
    };
  },
};
</script>
