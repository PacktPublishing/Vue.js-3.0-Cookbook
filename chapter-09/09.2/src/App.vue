<template>
  <layout>
    <v-container
      fluid
    >
      <h1>User Registration</h1>
      <v-subheader>Main user registration form</v-subheader>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-container
          fluid
        >
          <v-row>
            <v-col
              cols="12"
            >
              <v-card
                outlined
                flat
                class="mx-auto"
              >
                <v-card-title>
                  Personal Information
                </v-card-title>
                <v-divider/>
                <v-container
                  fluid
                >
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        required
                      />
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        type="email"
                        label="E-mail"
                        required
                      />
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="phone"
                        label="Phone"
                      />
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="cellphone"
                        label="Cellphone"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col
              cols="12"
            >
              <v-card
                outlined
                flat
                class="mx-auto"
              >
                <v-card-title>
                  Address
                </v-card-title>
                <v-divider/>
                <v-container
                  fluid
                >
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="address"
                        label="Address"
                      />
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="zipcode"
                        label="Zipcode"
                      />
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="country"
                        label="Country"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col
              cols="12"
            >
              <v-card
                outlined
                flat
                class="mx-auto"
              >
                <v-card-title>
                  User Information
                </v-card-title>
                <v-divider/>
                <v-container
                  fluid
                >
                  <v-row>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="username"
                        label="Username"
                      />
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              class="text-right"
            >
              <v-btn
                color="error"
                class="mr-4"
                @click="cancel"
              >
                Cancel
              </v-btn>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="register"
              >
                Register
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </layout>
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  name: 'App',

  components: {
    Layout,
  },

  data: () => ({
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
  }),
  computed: {
    nameRules() {
      return [
        (v) => !!v || 'Name is required',
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || 'Password is required',
      ];
    },
    emailRules() {
      return [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ];
    },
  },

  methods: {
    register() {
      this.$refs.form.validate();
    },
    cancel() {
      this.$refs.form.reset();
    },
  },
};
</script>
