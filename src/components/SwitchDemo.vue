<template>
  <div>
    <Switch v-model:checked="checkedBool" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const checkedBool = ref(false);
    return {
      checkedBool,
    };
  },
};
</script>
