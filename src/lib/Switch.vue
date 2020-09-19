<template>
<button class="kylin-switch" :class="[{'kylin-value':value},classes]" @click="toggle" :disabled="disabled"><span></span></button>
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
    value: {
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
      context.emit("update:value", !props.value);
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
$grey: rgb(112, 112, 112);

.kylin-switch {
  border: none;
  background: gray;
  position: relative;

  >span {
    position: absolute;
    top: 2px;
    left: 2px;

    background: white;
    transition: left 250ms;
  }

  &.kylin-value {
    background: blue;
  }

  &:focus {
    outline: none;
  }

  @mixin switchSize($h) {
    $h2: $h - 4px;
    height: $h;
    width: $h * 2;
    border-radius: $h/2;

    >span {
      height: $h2;
      width: $h2;
      border-radius: $h2/2;
    }

    &.kylin-value>span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:active {
      >span {
        width: $h2 + 4px;
      }
    }

    &.kylin-value:active {
      >span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }

    &[disabled] {
      cursor: not-allowed;
      background: rgba(128, 128, 128, 0.3);

      &:active>span {
        left: 2px;
        width: $h2;
      }
    }

    &.kylin-size-big {
      $h: 44px;
    }
  }

  &.kylin-size-normal {
    @include switchSize(22px);
  }

  &.kylin-size-small {
    @include switchSize(16px);
  }

  &.kylin-size-big {
    @include switchSize(36px);
  }
}
</style>
