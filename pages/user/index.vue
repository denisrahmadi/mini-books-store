<template>
    <div>
        <BookList :booksData="bookList" />
        {{ $store.getters.getBooksData }}
    </div>
</template>
<script>
import BookList from '../../components/Books/BookList.vue';

export default {
    components: { BookList },
    computed: {
        bookList(){
            const userId = this.$store.getters.userId
            const booksData = this.$store.getters.getBooksData
            return booksData.filter((book) => book.userId === userId
            )
        }
    }
}
</script>
<style>
    
</style>