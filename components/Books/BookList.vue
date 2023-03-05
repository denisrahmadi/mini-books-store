<template>
    <div>
        <BookItem 
            :booksData="booksData"
             
        />
    </div>
</template>
<script>
import BookItem from './BookItem.vue'
export default {
    props: ['booksData'],
    components: { BookItem }
}
</script>
<style>
    
</style>