<template>
    <div>
        <div class="py-5 ms-5">
            <h3 class="ms-5"></h3>
                <div class="container d-flex flex-wrap gap-5 justify-content-start">
                    <nuxt-link 
                        tag="a" 
                        :to="{name: 'products-detail', params: {detail: book}}" 
                        class="card text-decoration-none shadow overflow-hidden p-2" style="width: 10rem;" 
                        v-for="(book, index) in booksData"
                        :key="index"
                    >
                        <img :src="book.image" alt="" height="220">
                        <h5 class="card-text text-truncate text-dark mt-1">{{ book.title }}</h5>
                        <p class="card-text text-truncate fs-6 text-secondary">{{ book.author }}</p>
                        <h5 class="card-title text-primary">Rp. {{ book.price }}</h5>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Buy Now"><i class="fa-solid fa-cart-shopping"></i></button>
                            <button type="button" class="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add To Wishlist"><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </nuxt-link>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        booksData(){
            return this.$store.getters.getBooksData
        }
    }
}
</script>
<style>
    
</style>