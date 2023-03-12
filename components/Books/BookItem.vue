<template>
  <div>
    <div class="py-5 ms-5">
      <div class="container d-flex flex-wrap gap-5 justify-content-start">
        <div
          class="card text-decoration-none shadow overflow-hidden p-2"
          style="width: 10rem"
          v-for="(book, index) in booksData"
          :key="index"
        >
          <button 
            class="tombol__delete" 
            @click="deleteBook(book.id)"
            v-show="isUser"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img :src="book.image" alt="" height="220" />
          <nuxt-link
            tag="h5"
            :to="{ name: 'products-detail', params: { detail: book } }"
            class="card-text text-truncate text-dark mt-1"
          >
            {{ book.title }}
          </nuxt-link>
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
            <button
              v-show="isUser"
              class="btn btn-outline-info"
              @click="editBook(book.id)"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    booksData: {
      type: Array,
      default: null,
    },
    isUser: {
      type: Boolean,
      default: ''
    }
  },
  methods: {
    addNewWishlist(param) {
      // const booksData = this.$store.getters.getBooksData
      this.$store.commit("addWishlistBooksData", param);
      swal({
        title: "Berhasil",
        text: "ditambahkan ke wishlistmu!",
        icon: "success",
        buttons: {
          confirm: { text: "OK", className: "swal-button" },
        },
      });
    },
    deleteBook(param) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this book data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.$store.dispatch("deleteBooksData", param)
          swal("Nice! Your book data has been deleted", {
            icon: "success",
          });
        } 
      });
          // this.$store.dispatch("deleteBooksData", param);
        },
    editBook(param) {
      this.$router.push(`/products/${param}/edit`);
    },
  },
};
</script>
<style scoped>
h5 {
  cursor: pointer;
}

h5:hover {
  text-decoration: underline;
  color: blue !important;
}
.swal-button {
  padding: 7px 19px;
  border-radius: 2px;
  background-color: #4962b3;
  font-size: 12px;
  border: 1px solid #3e549a;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
.tombol__delete {
  position: absolute;
  font-size: larger;
  color: white;
  background-color: red;
  padding: 5px;
  right: 8px;
}
.tombol__delete:hover {
  background-color: grey;
}

.card {
    transition: all 0.5s;
  }
  .card:hover {
    transform: scale(1.1);
  }
</style>
