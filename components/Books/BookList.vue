<template>
  <div>
    <BookItem :booksData="booksData" :isUser="isUser" />
  </div>
</template>
<script>
import BookItem from "./BookItem.vue";
export default {
  props: {
    booksData: {
      type: Array,
      default: "",
    },
    isUser: {
      type: Boolean,
      default: false,
    },
  },
  components: { BookItem },
};
</script>
<style></style>
