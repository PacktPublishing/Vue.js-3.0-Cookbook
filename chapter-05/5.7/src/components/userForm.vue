<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="6">
      <vs-input
        v-model="tmpForm.name"
        :disabled="disabled"
        label="Name"
        placeholder="User Name"
        class="inputMargin full-width"
      />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="6">
      <vs-input
        v-model="tmpForm.email"
        :disabled="disabled"
        label="Email"
        placeholder="User Email"
        class="inputMargin full-width"
      />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="6">
      <vs-input
        v-model="tmpForm.country"
        :disabled="disabled"
        label="Country"
        placeholder="User Country"
        class="inputMargin full-width"
      />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="6">
      <vs-input
        v-model="tmpForm.phone"
        :disabled="disabled"
        label="Phone"
        placeholder="User Phone"
        class="inputMargin full-width"
      />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="6">
      <vs-input
        v-model="tmpForm.birthday"
        :disabled="disabled"
        label="Birthday"
        placeholder="User Birthday"
        class="inputMargin full-width"
      />
    </vs-col>
  </vs-row>
</template>
<script>
  export default {
    name: 'UserForm',
    props: {
      value: {
        type: Object,
        required: false,
        default: () => {
        },
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    data: () => ({
      tmpForm: {},
    }),
    watch: {
      tmpForm: {
        handler(value) {
          this.$emit('input', value);
        },
        deep: true,
      },
      value: {
        handler(value) {
          this.tmpForm = value;
        },
        deep: true,
        immediate: true,
      }
    },
  }
</script>
<style>
  .inputMargin {
    margin: 15px;
  }
</style>
