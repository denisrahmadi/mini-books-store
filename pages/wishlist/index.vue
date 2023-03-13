<template>
  <keep-alive>
    <div>
      <div class="text-center mt-5 pt-3 pb-3">
        <h1>
          <span class="bg-white rounded p-5 fw-bold">Your Wishlist</span>
        </h1>
      </div>
      <div v-if="$store.getters.iswishlistBooksData" class="d-flex justify-content-center pb-5">
        <!-- <img src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1233.jpg?w=740&t=st=1678339107~exp=1678339707~hmac=9e8a60952086f982601fd36c78cd24bbf8f18c9053fb8fe02ef19ad27e940e0c" alt="empty wishlist" width="300">
                <h1><span class="bg-white px-5">is empty</span></h1> -->
        <lottie-player
          src="https://lottie.host/bfa61dcb-1867-4e4b-bcdc-bbc13821a404/K5Ak3v2sxJ.json"
          background="white"
          speed="1"
          style="width: 500px"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div v-if="!$store.getters.iswishlistBooksData">
        <WishList />
      </div>
    </div>
  </keep-alive>
</template>
<script>
import WishList from "../../components/Wishlist/WishList.vue";

export default {
  layout: "navfoot",
  components: { WishList },
};
</script>
<style></style>
