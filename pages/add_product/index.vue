<template>
  <div>
    <h1 class="text-center text-dark fw-bold mt-5 mb-4">Add New Product</h1>
    <form class="row g-3 needs-validation d-relative mx-auto w-50 d-flex" novalidate>
      <section>
        <div class="form-floating">
        <input
          v-model="newProductItem.title"
          type="text"
          class="form-control shadow-lg"
          id="floatingInput"
          placeholder="The Subtle Art Of Giving A F*ck"
        />
        <label for="floatingInput" class="form-label">Judul</label>
      </div>
      <div class="form-floating">
        <input
          v-model="newProductItem.author"
          type="text"
          class="form-control shadow-lg"
          id="floatingInput"
          placeholder="Mark Manson"
        />
        <label for="floatingInput" class="form-label">Penulis</label>
      </div>
      <div class="form-floating">
        <input
          v-model="newProductItem.price"
          type="number"
          class="form-control shadow-lg"
          id="floatingInput"
          placeholder="58000"
        />
        <label for="floatingInput" class="form-label">Harga</label>
      </div>
      <div class="form-floating">
        <input
          v-model="newProductItem.image"
          type="text"
          class="form-control shadow-lg"
          id="floatingInput"
          placeholder="https://cdn.gramedia.com/uploads/items/subtleart.jpg"
        />
        <label for="floatingInput" class="form-label">Image Link</label>
      </div>
      <div class="form-floating">
        <textarea
          v-model="newProductItem.description"
          class="form-control shadow-lg"
          placeholder="Buku Sebuah Seni untuk Bersikap Bodo Amat mengajarkan ..."
          id="floatingTextarea"
        ></textarea>
        <label for="floatingInput" class="form-label">Deskripsi</label>
      </div>
      <div class="form-floating">
        <textarea
          v-model="newProductItem.synopsis"
          class="form-control shadow-lg"
          placeholder="Mark Manson adalah satu dari sedikit pengarang ..."
          id="floatingTextarea"
        ></textarea>
        <label for="floatingInput" class="form-label">Sinopsis</label>
      </div>
      </section>
      <button class="btn btn-outline-success fw-bold" @click.prevent="addNewBooksData">S u b m i t</button>
    </form>
    {{ newProductItem }}
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      newProductItem: {
        title: "",
        author: "",
        price: null,
        image: "",
        detail: {
          ISBN: null,
          language: "",
          pages: null,
          publisher: "",
          weight: null,
          width: null,
          length: null,
          category: "",
          cover: "",
        },
        description: ``,
        synopsis: ``,
      },
    };
  },
  layout: "plain",
  methods: {
    addNewBooksData(){
       this.$store.dispatch("addNewBooksData", this.newProductItem)
       this.$router.push('/products')        
    }
  },
};
</script>
<style></style>
