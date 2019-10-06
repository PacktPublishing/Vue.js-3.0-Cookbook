<template functional>
  <button
    tabindex="0"
    class="button"
    :class="{
      round: props.isRound,
      isFlat: props.isFlat,
    }"
    :style="{
      background: props.backgroundColor,
      color: props.textColor
    }"
    v-on="listeners"
  >
    <div
      tabindex="-1"
      class="button_focus_helper"
    />
    <slot />
  </button>
</template>

<script>
import isColor from 'is-color';

export default {
  name: 'MaterialButton',
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: '#fff',
      validator: v => typeof v === 'string' && isColor(v),
    },
    textColor: {
      type: String,
      required: false,
      default: '#000',
      validator: v => typeof v === 'string' && isColor(v),
    },
    isRound: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFlat: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
  .button {
    user-select: none;
    position: relative;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    vertical-align: middle;
    cursor: pointer;
    padding: 4px 16px;
    font-size: 14px;
    line-height: 1.718em;
    text-decoration: none;
    color: inherit;
    background: transparent;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    min-height: 2.572em;
    font-weight: 500;
    text-transform: uppercase;
  }
  .button:not(.isFlat){
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  .button:not(.isFlat):focus:before,
  .button:not(.isFlat):active:before,
  .button:not(.isFlat):hover:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .button:not(.isFlat):focus:before,
  .button:not(.isFlat):active:before,
  .button:not(.isFlat):hover:before {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 5px 8px rgba(0, 0, 0, 0.14),
    0 1px 14px rgba(0, 0, 0, 0.12);
  }

  .button_focus_helper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-radius: inherit;
    outline: 0;
    opacity: 0;
    transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .button_focus_helper:after, .button_focus_helper:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: inherit;
    transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .button_focus_helper:before {
    background: #000;
  }

  .button_focus_helper:after {
    background: #fff;
  }

  .button:focus .button_focus_helper:before,
  .button:hover .button_focus_helper:before {
    opacity: .1;
  }

  .button:focus .button_focus_helper:after,
  .button:hover .button_focus_helper:after {
    opacity: .6;
  }

  .button:focus .button_focus_helper,
  .button:hover .button_focus_helper {
    opacity: 0.2;
  }

  .round {
    border-radius: 50%;
  }
</style>
