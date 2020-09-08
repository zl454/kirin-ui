<template>
<button class="kylin-switch" :class="{'kylin-checked':checked}" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import {
  ref
} from "vue";
export default {
  props: {
    checked: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      // checked 开关选中状态事件
      context.emit("update:checked", !props.checked);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.kylin-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;

  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms;
  }

  &.kylin-checked {
    background: blue;

    >span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    >span {
      width: $h2 + 4px;
    }
  }

  &.kylin-checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
