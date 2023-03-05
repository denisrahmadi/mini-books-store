<template>
  <div>
    <div class="py-5 ms-5">
      <div class="container d-flex flex-wrap gap-5 justify-content-start">
        <nuxt-link
          tag="a"
          :to="{ name: 'products-detail', params: { detail: book.userId } }"
          class="card text-decoration-none shadow overflow-hidden p-2"
          style="width: 10rem"
          v-for="(book, index) in booksData"
          :key="index"
        >
          <img :src="book.image" alt="" height="220" />
          <h5 class="card-text text-truncate text-dark mt-1">
            {{ book.title }}
          </h5>
          <p class="card-text text-truncate fs-6 text-secondary">
            {{ book.author }}
          </p>
          <h5 class="card-title text-primary">Rp. {{ book.price }}</h5>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              class="btn btn-outline-success"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Buy Now"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Add To Wishlist"
              @click.prevent="addNewWishlist(book)"
            >
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['booksData'],
    methods: {
        addNewWishlist(param){
            // const booksData = this.$store.getters.getBooksData
            this.$store.commit('addWishlistBooksData', param)
            swal({
                  title: "Berhasil",
                  text: "ditambahkan ke wishlistmu!",
                  icon: "success",
                  buttons: {
                    confirm: { text: "OK", className: "swal-button" }
                  }
                });
            
        }
    },
};
</script>
<style scoped>
.swal-button {
  padding: 7px 19px;
  border-radius: 2px;
  background-color: #4962B3;
  font-size: 12px;
  border: 1px solid #3e549a;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
</style>
