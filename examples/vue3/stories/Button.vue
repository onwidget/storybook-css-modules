<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import { reactive, computed, useCssModule } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    const $style = useCssModule();
    return {
      classes: computed(() => ({
        [$style.button]: true,
        [$style.primary]: props.primary,
        [$style.secondary]: !props.primary,
        [$style[props.size] || $style['medium']]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

<style module>
  .button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .primary {
    color: white;
    background-color: #1ea7fd;
  }
  .secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .large {
    font-size: 16px;
    padding: 12px 24px;
  }
</style>
