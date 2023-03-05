<template>
  <div>
    <h1 class="text-center py-5">Our Products</h1>
    <BookList 
      :booksData="booksData" 
    />
  </div>
</template>
<script>
import BookList from "./../../components/Books/BookList.vue";
export default {
  components: { BookList },
  computed: {
        booksData() {
        return this.$store.getters.getBooksData;
        },
    },
};
</script>
<style></style>
