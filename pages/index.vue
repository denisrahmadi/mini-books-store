<template>
  <div>
    <Banner />
    <!-- <Carousel /> -->
    <ProductDisplay />
    <CallCenter />

  </div>
</template>

<script>
export default {
  middleware: "check-auth",
  layout: "navfoot",
  name: "IndexPage",
};
</script>

<style scoped>
</style>
