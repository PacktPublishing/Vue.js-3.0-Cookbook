<template>
  <layout>
    <a-form-model
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <h1>
        User Registration
      </h1>
      <p>Main user registration form</p>
      <a-card title="Personal Information">
        <a-form-model-item label="Name">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="Email">
          <a-input
            v-model="form.email"
            type="email"
          />
        </a-form-model-item>
        <a-form-model-item label="Phone">
          <a-input v-model="form.phone" />
        </a-form-model-item>
        <a-form-model-item label="Cellphone">
          <a-input v-model="form.cellphone" />
        </a-form-model-item>
      </a-card>
      <a-card title="Address" :style="{ marginTop: '16px' }">
        <a-form-model-item label="Address">
          <a-input v-model="form.address" />
        </a-form-model-item>
        <a-form-model-item label="Zipcode">
          <a-input v-model="form.zipcode" />
        </a-form-model-item>
        <a-form-model-item label="Country">
          <a-input v-model="form.country" />
        </a-form-model-item>
      </a-card>
      <a-card title="User Information" :style="{ marginTop: '16px' }">
        <a-form-model-item label="Username">
          <a-input v-model="form.username" />
        </a-form-model-item>
        <a-form-model-item label="Password">
          <a-input-password
            v-model="form.password"
            visibility-toggle
            type="password"
          />
        </a-form-model-item>
      </a-card>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary">
          Create
        </a-button>
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </layout>
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  name: 'app',
  components: {
    Layout,
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        valid: true,
        name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        cellphone: '',
        address: '',
        zipcode: '',
        country: '',
      },
    };
  },
};
</script>
