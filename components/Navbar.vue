<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-background">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">
          <img src="~/static/assets/gramedlite.png" alt="">
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto hover-menu-item">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#">Checkout</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#">Wishlist</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="#">Profile</nuxt-link>
            </li>
            <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> -->
          </ul>
          <!-- <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> 
           -->
           <div>
                  <button 
                    type="button" 
                    class="btn btn-success rounded" 
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Sign In
                  </button>
                  <!-- <nuxt-link tag="button" to="#">Sign Out</nuxt-link> -->
                  <nuxt-link tag="button" to="/signup" class="btn btn-outline-light rounded">Sign Up</nuxt-link>
            </div>

        </div>
      </div>
    </nav>
          <!-- Modal signin -->
          <ModalSignin />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
  .navbar-background{
    background-color: #40513B;
  }
  .hover-menu-item>li:hover {
    text-decoration: underline aliceblue ;
    text-underline-offset: 8px; 
  }
</style>
