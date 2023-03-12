<template>
  <div>
    <div class="container px-5 py-5 background">
      <h1 class="text-center text-uppercase fw-bold pb-3">
        <span class="bg-white px-5 py-3">
          Testimonial
        </span>
      </h1>
      <div 
        class="row justify-content-center flex-wrap "
      >
        <div 
          class="card p-5 col-md-4"
          v-for="(testi, index) in testiData"
          :key="index"
        >
          <div class="card-text">
            <p>"{{ testi.testimonial }}"</p>
          </div>
            <div class="lh-1">
              <div class="card-title text-dark">
                <h5>{{ testi.name }}</h5>
              </div>
              <div class="card-subtitle text-muted">
                <small>{{ testi.job }}</small>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      testiData: [
        {
          name: "Maman Racing",
          age: 27,
          job: 'Football Player',
          testimonial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur illo laboriosam libero possimus obcaecati eius perspiciatis cumque architecto, consectetur ex ducimus voluptatem in saepe soluta fugit nulla autem'
        },
        {
          name: "Rudi Karbu",
          age: 25,
          job: 'Musician',
          testimonial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur illo laboriosam libero possimus obcaecati eius perspiciatis cumque architecto, consectetur ex ducimus voluptatem in saepe soluta fugit nulla autem'
        },
        {
          name: "Ujang Spakbor",
          age: 54,
          job: 'Philosophy',
          testimonial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur illo laboriosam libero possimus obcaecati eius perspiciatis cumque architecto, consectetur ex ducimus voluptatem in saepe soluta fugit nulla autem'
        },
      ],
    };
  },
};
</script>
<style scoped>
  .background{
    background-color: rgba(255, 255, 255, 0.55);
  }

</style>
