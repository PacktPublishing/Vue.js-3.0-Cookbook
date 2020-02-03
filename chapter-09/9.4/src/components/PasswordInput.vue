<template>
  <q-input
    :value="value"
    :type="isPwd ? 'password' : 'text'"
    :rules="[
                val => val.length >= 8 || 'Your password need to have 8 or more characters',
                val => val !== null && val !== '' || 'Please type your password',
              ]"
    :hint=" value.length < 8 ? 'Your password has a minimum of 8 characters' : ''"
    :label="label"
    outlined
    lazy-rules
    @blur="$emit('blur', $event)"
    @keydown="$emit('keydown', $event)"
    @keypress="$emit('keypress', $event)"
    @keyup="$emit('keyup', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    @invalid="$emit('invalid', $event)"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>
<script>
export default {
  name: 'PasswordInput',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
    label: {
      type: String,
      default: 'Your password',
      required: false,
    },
  },
  data: () => ({
    isPwd: true,
  }),
};
</script>
