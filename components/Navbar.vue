<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark border shadow border-bottom"
    >
      <div class="container-fluid">
        <nuxt-link class="navbar-brand d-flex" to="/">
          <img src="~/static/assets/gramedlite.svg" alt="" width="50px" />
          <h1 class="brand text-dark fw-bold">GRAMEDLITE</h1>
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-dark"
            ><i class="fa-solid fa-bars"></i
          ></span>
        </button>
        <div class="container">
          <div
            class="d-flex justify-content-end collapse navbar-collapse test"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 hover-menu-item bg-white">
              <!-- <li>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> 
            </li> -->
              <li class="nav-item">
                <nuxt-link class="nav-link text-dark" tag="a" to="/products"
                  >Products</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link text-dark"
                  tag="a"
                  v-if="$store.getters.isAuthenticated"
                  to="/checkout"
                  >Checkout</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link text-dark"
                  tag="a"
                  v-if="$store.getters.isAuthenticated"
                  to="/wishlist"
                  >Wishlist</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link text-dark"
                  tag="a"
                  v-if="$store.getters.isAuthenticated"
                  to="#"
                >
                  Profile
                </nuxt-link>
              </li>
              <li class="nav-item dropdown" v-if="$store.getters.isAuthenticated">
                  <a class="fw-bold text-decoration-none text-dark nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Admin
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <nuxt-link
                        tag="a"
                        to="/add_product"
                        class="nav-link text-dark dropdown-item"
                        v-if="$store.getters.isAuthenticated"
                      >
                        Add Product
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        tag="a" 
                        to="/user"
                        class="nav-link dropdown-item text-dark dropdown-item" 
                        v-if="$store.getters.isAuthenticated"
                      >
                        {{ $store.state.userData.username }}
                      </nuxt-link>
                    </li>
                  </ul>
              </li>
              <li class="nav-item">
                <nuxt-link
                  tag="a"
                  to="/signin"
                  class="btn btn-success fw-bold px-3"
                  v-if="!$store.getters.isAuthenticated"
                >
                  Login
                </nuxt-link>
                <a
                  class="btn btn-danger rounded fw-bold px-3"
                  v-if="$store.getters.isAuthenticated"
                  @click="signout"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    signout() {
      this.$store.dispatch("signout");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.test {
  margin-left: 400px;
}
/* .navbar-nav{
  position: absolute;
  z-index: 2;
  right: 10px
} */
.navbar-background {
  background-color: #f7fff3;
}
.hover-menu-item > li:hover {
  text-decoration: underline rgb(0, 0, 0);
  text-underline-offset: 8px;
}
.nav-link {
  font-weight: 600;
}
</style>
