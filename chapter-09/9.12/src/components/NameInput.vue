<template>
  <q-input
    :value="value"
    :rules="[ val => (val && val.length > 0
              || 'Please type a valid Name')]"
    outlined
    label="Your Name"
    lazy-rules
    @blur="$emit('blur', $event)"
    @keydown="$emit('keydown', $event)"
    @keypress="$emit('keypress', $event)"
    @keyup="$emit('keyup', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    @invalid="$emit('invalid', $event)"
  />
</template>
<script>
export default {
  name: 'NameInput',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
