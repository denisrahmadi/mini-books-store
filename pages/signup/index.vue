<template>
  <div>
    <div class="d-flex">
      <div>
        <img
          src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          height="648"
          width="500"
        />
      </div>
      <div class="background">
        <form
          class="row g-3 needs-validation d-relative mx-auto w-50"
          novalidate
        >
          <h1 class="text-center text-dark fw-bold mt-5 mb-4">Form Sign Up</h1>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" class="form-label">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Denis"
            />
            <label for="floatingInput" class="form-label">First Name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Rahmadi"
            />
            <label for="floatingInput" class="form-label">Last Name</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="ex: Passwordaman123."
            />
            <label for="floatingInput" class="form-label">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="ex: Passwordaman123."
            />
            <label for="floatingInput" class="form-label">Confirm Password</label>
          </div>
          <p>
            Sudah punya akun?
            <span
              role="button"
              class="text-info"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Sign In
            </span>
          </p>

          <ModalSignin />
          <button class="btn btn-success fw-bold">S u b m i t</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "plain",
};
</script>
<style scoped>
.background {
  background-color: #edf1d6;
}
</style>
