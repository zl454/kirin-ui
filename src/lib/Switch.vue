<template>
<button class="kylin-switch" :class="[{'kylin-checked':checked},classes]" @click="toggle" :disabled="disabled"><span></span></button>
</template>

<script lang="ts">
import {
  computed,
  ref
} from "vue";
export default {
  props: {
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const {
      size,
      level
    } = props;
    const toggle = () => {
      // checked 开关选中状态事件
      context.emit("update:checked", !props.checked);
    };
    const classes = computed(() => {
      return {
        [`kylin-size-${size}`]: size,
        [`kylin-level-${level}`]: level,
      };
    });
    return {
      classes,
      toggle,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$grey: rgb(112, 112, 112);

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

  &[disabled] {
    cursor: not-allowed;
    background: grey;

    >span {
      pointer-events: none;
    }
  }
}
</style>
