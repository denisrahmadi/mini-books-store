<template>
  <keep-alive>

    <div class="container ">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom pt-3"
      >
        <nuxt-link class="navbar-brand d-flex" to="/">
          <img src="~/static/assets/gramedlite.svg" alt="" width="50px" />
          <h1 class="brand text-dark fw-bold text-uppercase">Gramedlite</h1>
        </nuxt-link>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ms-lg-5">
          <li>
            <nuxt-link class="nav-link text-dark" tag="a" to="/products">
              Products
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="nav-link text-dark"
              tag="a"
              to="/checkout"
            >
              Checkout
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="nav-link text-dark"
              tag="a"
              to="/wishlist"
            >
              Wishlist
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="nav-link text-dark"
              tag="a"
              v-if="$store.getters.isAuthenticated"
              to="/profile"
            >
              Profile
           </nuxt-link>
          </li>
          <li                  
            class="nav-item dropdown"
            v-if="$store.getters.isAuthenticated"
          >
            <a
              class="fw-bold text-decoration-none text-dark nav-link dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
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
        </ul>

        <div class="col-md-3 text-end">
          <nuxt-link
            tag="a"
            to="/signin"
            class="btn__login"
            v-if="!$store.getters.isAuthenticated"
          >
            Login
          </nuxt-link>
          <a
            class="btn__logout"
            v-if="$store.getters.isAuthenticated"
            @click="signout"
          >
            Logout
          </a>
        </div>
      </header>
    </div>
  </keep-alive>
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
.border__bottom{
  border-bottom: 15px yellow !important 
}
.test {
  margin-left: 400px;
}
.nav-link{
  transition: .5s;
}
.nav-link:hover {
  /* text-decoration: underline #157347 2px;
  text-underline-offset: 8px; */
  transform: translateY(-10px);
  transition: .5s;
  background-color: #1573477b;
  border-radius: 5px;
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
.nuxt-link-active {
  color: red;
}

/* ------------------------------------------------- */

.btn__logout{
 display: inline-block;
 padding: 0.4rem 1.3rem;
 font-size: 16px;
 font-weight: 700;
 color: red;
 border: 3px solid rgb(252, 70, 100);
 border-radius: 10px;
 cursor: pointer;
 position: relative;
 background-color: transparent;
 text-decoration: none;
 overflow: hidden;
 z-index: 1;
 font-family: inherit;
}

.btn__logout::before {
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background-color: rgb(252, 70, 100);
 transform: translateX(-100%);
 transition: all .3s;
 z-index: -1;
}

.btn__logout:hover::before {
 transform: translateX(0);
}
.btn__logout:hover{
  color: white;
}

.btn__login{
 display: inline-block;
 padding: 0.4rem 1.3rem;
 font-size: 16px;
 font-weight: 700;
 color: #157347;
 border: 3px solid #157347;
 border-radius: 10px;
 cursor: pointer;
 position: relative;
 background-color: transparent;
 text-decoration: none;
 overflow: hidden;
 z-index: 1;
 font-family: inherit;
}

.btn__login::before {
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background-color: #157347;
 transform: translateX(-100%);
 transition: all .3s;
 z-index: -1;
}

.btn__login:hover::before {
 transform: translateX(0);
}

.btn__login:hover {
  color: white;
}
</style>
