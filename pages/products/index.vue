<template>
    <div>
        <h1 class="text-center my-5">Our Products</h1>
        <BookList />
        <BookList />
        <BookList />
    </div>
</template>
<script>
import BookList from './../../components/Books/BookList.vue'
export default {
    components: { BookList }
}
</script>
<style>
    
</style>