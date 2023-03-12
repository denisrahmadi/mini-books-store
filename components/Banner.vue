<template>
  <div>
    <div class="container col-xxl-8 px-4 mb-5">
      <div
        class="row flex-lg-row-reverse align-items-center g-5 background"
      >
        <div class="col-10 col-sm-8 col-lg-6">
          <!-- <img
            src="./../static/assets/banner.svg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="100"
            loading="lazy"
          /> -->
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_ybiszbil.json"
            background="transparent"
            speed="1"
            style="width: 500px; height: 400px"
            loop
            autoplay
            lazy
          ></lottie-player>
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
          <!-- <div class="btn-group">
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
          </div> -->
          <nuxt-link
            tag="button"
            to="/products"
          >
            <span class="text-white text-uppercase">Get it now</span>
            <i class="fa-solid fa-arrow-right text-white"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-color: rgba(255, 255, 255);
}
.marginleft {
  margin-left: -10px;
}

button {
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 10px 40px;
  border-radius: 100px;
  background: #157347;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
}

button:hover {
  background: #020202ea;
  transform: scale(1.1);
}

button > i {
  width: 34px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

button:hover i {
  transform: translateX(5px);
}

button:active {
  transform: scale(0.95);
}
</style>
