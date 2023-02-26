<template>
  <div>
    <div class="background__color d-flex justify-content-center">
      <div
        id="carouselExampleControls"
        class="carousel slide w-100 "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="flex justify-content-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/178/517/original/vector-sale-discount-and-offer-marketing-banner-template-design.jpg"
                class="position-relative start-50 translate-middle-x w-75 h-50 rounded"
                alt=""
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="flex justify-content-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/175/882/original/vector-amazing-sale-banner-promotional-template-for-brand-advertisement.jpg"
                class="position-relative start-50 translate-middle-x w-75 h-50 rounded"
                alt=""
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="flex justify-content-center">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gHkCurMdu4go01LscFdVRwHaEQ%26pid%3DApi&f=1&ipt=79bb23c13a3018635d852754e280ba612ffaa2bccd7607d59c4d0afb62040150&ipo=images"
                class="position-relative start-50 translate-middle-x w-75 h-50 rounded"
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-secondary rounded-circle"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-secondary rounded-circle"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EDF1D6" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
  .background__color{
    background-color: #EDF1D6;
  }
</style>
