<template>
<div class="kylin-tabs">
  <div class="kylin-tabs-nav">
    <div class="kylin-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
  </div>
  <div class="kylin-tabs-content">
    <component class="kylin-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    return {
      titles,
      defaults,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.kylin-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
