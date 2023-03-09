<template>
  <div>
    <BooksForm
        :books="booksData"
    ></BooksForm>
  </div>
</template>
<script>
import BooksForm from "../../../components/admin/BooksForm.vue";

export default {
  middleware: ["check-auth", "auth", "check-user"],
  components: { BooksForm },
  asyncData({ store, params }) {
    const book = store.getters.detailBooksData(params.detail);
    const booksData = { ...book, id: params.detail };
    return { booksData };
  },
};
</script>
<style></style>
