<template>
<div class="kylin-tabs">
  <div class="kylin-tabs-nav" :class='{"kylin-tabs-center":center,"kylin-tabs-full-width":fullWidth}' :style='{"background":color}' ref="container">
    <div class="kylin-tabs-nav-item" :class='{selected:t===selected,"kylin-tabs-nav-item-full-width":fullWidth}' v-for="(t,index) in titles" :key="index" :ref="el=>{if (t===selected) selectedItem =el}" @click="select(t)">{{t}}</div>
    <div class="kylin-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="kylin-tabs-content">
    <component :is="current" :key="current.props.title" />
  </div>
</div>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  ref,
  watchEffect
} from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
    color: {
      type: String,
    },
    center: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null);
    const indicator = ref < HTMLDivElement > (null);
    const container = ref < HTMLDivElement > (null);
    onMounted(() => {
      watchEffect(
        () => {
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
        }, {
          flush: "post",
        }
      );
    });
    const defaults = context.slots.default();
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    defaults.forEach((tag) => {
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    return {
      titles,
      current,
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
$blue: #2196f3;
$white: #ffffff;
$color: #a4e0fb;
$border-color: #d9d9d9;
$selected: #dbffff;

.kylin-tabs {
  &-nav {
    position: relative;
    display: flex;
    background: #2196f3;
    color: $color;
    // border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 16px;
      text-align: center;
      // margin: 0 16px;
      cursor: pointer;

      // &:first-child {
      //   margin-left: 0;
      // }
      &-full-width {
        flex: 1;
      }

      &.selected {
        color: $selected;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: #ff4081;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-center {
    justify-content: center;
  }

  &-full-width {
    justify-content: space-around;
  }

  &-content {
    padding: 16px;
    background: $white;
    line-height: 1.2;
  }
}
</style>
