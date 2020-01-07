<template>
  <label>
    <span class="value">You Typed: {{ value }}</span>
    <input
      :value="value"
      type="text"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  name: 'InputTextForm',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
