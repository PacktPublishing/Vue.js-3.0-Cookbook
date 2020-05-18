<template>
  <main-layout>
    <hero-section/>
    <section class="section">
      <div class="container">
        <h1 class="title is-3">Personal Information</h1>
        <hr/>
        <b-field label="Name">
          <b-input
            v-model="name"
          />
        </b-field>
        <b-field
          label="Email"
        >
          <b-input
            v-model="email"
            type="email"
          />
        </b-field>
        <b-field grouped>
          <b-field
            expanded
            label="Phone"
          >
            <b-input
              v-model="phone"
              type="tel"
            />
          </b-field>
          <b-field
            expanded
            label="Cellphone"
          >
            <b-input
              v-model="cellphone"
              type="tel"
            />
          </b-field>
        </b-field>
        <h1 class="title is-3">Address</h1>
        <hr/>
        <b-field
          label="Address"
        >
          <b-input
            v-model="address"
          />
        </b-field>
        <b-field grouped>
          <b-field
            expanded
            label="Zipcode"
          >
            <b-input
              v-model="zipcode"
              type="tel"
            />
          </b-field>
          <b-field
            expanded
            label="Country"
          >
            <b-input
              v-model="country"
            />
          </b-field>
        </b-field>
        <h1 class="title is-3">User Information</h1>
        <hr/>
        <b-field grouped>
          <b-field
            expanded
            label="Username"
          >
            <b-input
              v-model="username"
            />
          </b-field>
          <b-field
            expanded
            label="Password"
          >
            <b-input
              v-model="password"
              type="password"
            />
          </b-field>
        </b-field>
        <b-field
          position="is-right"
          grouped
        >
          <div class="control">
            <button class="button is-danger is-light">Cancel</button>
          </div>
          <div class="control">
            <button class="button is-success">Submit</button>
          </div>
        </b-field>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from './layouts/main.vue';
import HeroSection from './components/heroSection.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    MainLayout,
  },
  data: () => ({
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    cellphone: '',
    address: '',
    zipcode: '',
    country: '',
  }),
};
</script>
