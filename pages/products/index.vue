<template>
  <div>
    <div class="d-flex justify-content-center pt-5 fw-bold fs-1">
      <p class="bg-white rounded px-5">Our Products</p>
    </div>
    <BookList 
      :booksData="booksData"
      :isUser="isUser"
    />
  </div>
</template>
<script>
import BookList from "./../../components/Books/BookList.vue";
export default {
  layout: 'navfoot',
  data() {
    return {
      isUser: false
    }
  },
  components: { BookList },
  computed: {
        booksData() {
        return this.$store.getters.getBooksData;
        },
    },
};
</script>
<style></style>
