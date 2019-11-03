<template>
  <div class="container">
    <vs-row
      vs-align="center"
      vs-justify="center"
    >
      <vs-col
        vs-lg="4"
        vs-sm="6"
        vs-xs="10"
      >
        <vs-card
          style="margin: 20px;"
        >
          <div slot="header">
            <h3>
              User Login
            </h3>
          </div>
          <vs-row
            vs-align="center"
            vs-justify="center"
          >
            <vs-col vs-w="12">
              <vs-input
                :danger="error"
                danger-text="Check your username or email"
                label="Username"
                placeholder="Username or e-mail"
                v-model="username"
              />
            </vs-col>
            <vs-col vs-w="12">
              <vs-input
                :danger="error"
                label="Password"
                danger-text="Check your password"
                placeholder="Your password"
                v-model="password"
              />
            </vs-col>
          </vs-row>
          <div slot="footer">
            <vs-row vs-justify="flex-start">
              <vs-button
                color="success"
                type="filled"
                icon="account_circle"
                size="small"
                @click="userSignIn"
              >
                Sign-in
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data: () => ({
      username: '',
      password: '',
      error: false,
    }),
    methods: {
      userSignIn() {
        if (this.username && this.password) {
          window.sessionStorage.setItem('auth',
            window.btoa(JSON.stringify({
                username: this.username
              })
            )
          );
          this.error = false;
          this.$router.replace('/user');
        }
        this.error = true;
      },
    }
  };
</script>
<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .vs-input {
    margin: 5px;
  }
</style>
