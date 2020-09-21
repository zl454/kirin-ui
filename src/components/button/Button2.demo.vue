<demo>
不同的大小
</demo>
<template>
<div>
  <div>
    <Button size="big">big</Button>
    <Button>normal</Button>
    <Button size="small">small</Button>
  </div>
  <div>
    <Button theme="link" size="big">big</Button>
    <Button theme="link">normal</Button>
    <Button theme="link" size="small">small</Button>
  </div>
  <div>
    <Button theme="text" size="big">big</Button>
    <Button theme="text">normal</Button>
    <Button theme="text" size="small">small</Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
