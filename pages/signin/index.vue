<template>
    <div>
      <main class="form-signin w-50 mx-auto">
        <h1 class="text-center mb-5">Form Signin</h1>
        <form @submit.prevent="signIn">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mt-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Password</label>
          </div>
  
          <button class="w-100 btn btn-lg btn-success mt-4" type="submit">
            Sign in
          </button>
          <p class="mt-1">
            Dont have any account?
              <span><nuxt-link to="/signup">signup</nuxt-link></span>
          </p>
        </form>
      </main>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        email: "",
        password:"",
      }
    },
    methods: {
      signIn(){
        this.$store.dispatch("authenticateUser", {
              isLogin: true,
              email: this.email,
              password: this.password,
        }).then(() => {
          this.$router.push("/")
        })
      }
    },
    layout: 'plain'
  };
  </script>
  <style></style>