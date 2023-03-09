<template>
  <div>
    <div class="container col-xxl-8 px-4 py-3 mb-5 bg-white">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="./../static/assets/banner.svg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="100"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold lh-1 mb-3">
            Get Your New Book With The Best Price
          </h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis nemo amet, autem aut placeat animi odio error alias quaerat
            dolorem laudantium, rerum aperiam, iusto pariatur quasi blanditiis.
            Odio, necessitatibus?
          </p>
          <div class="btn-group">
            <nuxt-link
              tag="button"
              to="/products"
              type="button"
              class="btn btn-success btn-lg px-5"
            >
              Get It Now
            </nuxt-link>
            <nuxt-link
              tag="button"
              to="/products"
              type="button"
              class="btn btn-outline-success btn-lg px-4 "
            >
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .background{
    background-color: #f6f8ea;
  }
  .marginleft{
    margin-left: -10px;
  }
</style>
