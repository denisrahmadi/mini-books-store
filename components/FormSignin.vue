<template>
  <div>
    <main class="form-signin">
      <form>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <!-- <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div> -->
        <button class="w-100 btn btn-lg btn-success mt-4" type="submit">
          Sign in
        </button>
        <p class="mt-1">
          Belum punya akun?
          <nuxt-link
            tag="span"
            to="/signup"
            role="button"
            class="text-info"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Sign Up
          </nuxt-link>
        </p>
      </form>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
