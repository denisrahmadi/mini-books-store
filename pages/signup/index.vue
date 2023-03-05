<template>
    <div>
      <h1 class="text-center mt-5">Form Sign Up</h1>
        <form
          class="row g-3 needs-validation d-relative mx-auto w-50 mb-5"
          novalidate
          @submit.prevent="signUp"
        >
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput" class="form-label">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="denisrahmadi"
              v-model="username"
            />
            <label for="floatingInput" class="form-label">Username</label>
          </div>
          <!-- <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Denis"
              v-model="firstName"
            />
            <label for="floatingInput" class="form-label">First Name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Rahmadi"
              v-model="lastName"
            />
            <label for="floatingInput" class="form-label">Last Name</label>
          </div> -->
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="ex: Passwordaman123."
              v-model="password"
            />
            <label for="floatingInput" class="form-label">Password</label>
            <span v-if="password == '' && confirmPassword == ''"></span>
            <span v-else-if="password && confirmPassword  == ''" class="text-success"></span>
            <span v-else-if="password === confirmPassword" class="text-success">password match</span>
            <span v-else="password !== confirmPassword" class="text-danger">password doesn't match</span>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="ex: Passwordaman123."
              v-model="confirmPassword"
            />
            <label for="floatingInput" class="form-label">Confirm Password</label>
          </div>
          <div>
            <p>
            Sudah punya akun?
            <span>
              <nuxt-link to="/signin">Signin</nuxt-link>
            </span>
          </p>
          <button class="btn btn-success fw-bold w-100" type="submit">Submit</button>
          </div>  
        </form>
    </div>
</template>
<script>
export default {
    data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password:"",
      confirmPassword: ""
    }
  },
  methods: {
    signUp(){
      this.$store.dispatch("authenticateUser", {
            isLogin: false,
            email: this.email,
            password: this.password,
            displayName: this.username,
      }).then(() => this.$router.push("/"))
    }
  },
  layout: 'plain'
}
</script>
<style>
    
</style>