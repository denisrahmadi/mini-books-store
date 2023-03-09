<template>
  <div>
    <h1 class="text-center pt-3"><span class="bg-white px-5 py-1">Your Add Product</span></h1>
    <div class="d-flex justify-content-center pt-5" v-if="bookList == false">
        <img :src="image" alt="" width="400">
    </div>
    <div v-if="bookList">
        <BookList :booksData="bookList" :isUser="isUser" />
    </div>
  </div>
</template>
<script>
import BookList from "../../components/Books/BookList.vue";

export default {
  layout: "navfoot",
  data() {
    return {
      isUser: true,
      userId: this.$store.getters.userId,
      booksData: this.$store.getters.getBooksData,
      image: "https://img.freepik.com/free-vector/shrug-concept-illustration_114360-8893.jpg?w=740&t=st=1678353139~exp=1678353739~hmac=6c02f64daafe01e051ac790550eac5dc430810fe716056fd7a53a7f3c41e3620"
    };
  },
  middleware: ["check-auth", "auth"],
  components: { BookList },
  computed: {
    bookList() {
      const userId = this.$store.getters.userId;
      const booksData = this.$store.getters.getBooksData;
      return booksData.filter((book) => book.userId === userId);
    },
  },
};
</script>
<style></style>
