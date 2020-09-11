<template>
<div class="kylin-tabs">
  <div class="kylin-tabs-nav" ref="container">
    <div class="kylin-tabs-nav-item" :class="{selected:t===selected}" v-for="(t,index) in titles" :key="index" :ref="el=>{if (t===selected) selectedItem =el}" @click="select(t)">{{t}}</div>
    <div class="kylin-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="kylin-tabs-content">
    <component class="kylin-tabs-content-item" :class="{selected:c.props.title===selected}" v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>

<script lang="ts">
import {
  onMounted,
  onUpdated,
  ref
} from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement[] > ([]);
    const indicator = ref < HTMLDivElement[] > (null);
    const container = ref < HTMLDivElement[] > (null);
    const x = () => {
      const {
        width
      } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const {
        left: left1
      } = container.value.getBoundingClientRect();
      const {
        left: left2
      } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);
    const defaults = context.slots.default();
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
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
      select,
      indicator,
      container,
      selectedItem,
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
    position: relative;
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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
