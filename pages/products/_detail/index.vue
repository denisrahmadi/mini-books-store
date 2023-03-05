<template>
  <div>
    <div class="m-5 d-flex gap-5 sm:flex-wrap">
      <div>
        <img :src="book.image" style="width: 10rem" :alt="book.title" />
      </div>
      <div>
        <div class="pb-3">
          <h1 class="text-capitalize">{{ book.title }}</h1>
          <h5 class="text-danger">Rp. {{ book.price }}</h5>
        </div>
        <h5>Deskripsi</h5>
        <p class="pb-3">{{ book.description }}</p>
        <h5>{{ sinopsis }}</h5>
        <p class="pb-3">{{ detailSinopsis }}</p>
        <div>
          <h5>Detail</h5>
          <table class="px-5">
            <tr>
              <th class="pe-5">Jumlah Halaman</th>
              <th class="pe-5">Penerbit</th>
            </tr>
            <tr>
              <td>{{ book.detail.pages }}</td>
              <td>{{ book.detail.publisher }}</td>
            </tr>
            <tr>
              <th class="pe-5">Tanggal Terbit</th>
              <th class="pe-5">Berat</th>
            </tr>
            <tr>
              <td>{{ book.detail.publish }}</td>
              <td>{{ book.detail.weight }} KG</td>
            </tr>
            <tr>
              <th class="pe-5">ISBN</th>
              <th class="pe-5">Lebar</th>
            </tr>
            <tr>
              <td>{{ book.detail.ISBN }}</td>
              <td>{{ book.detail.width }} cm</td>
            </tr>
            <tr>
              <th class="pe-5">Bahasa</th>
              <th class="pe-5">Panjang</th>
            </tr>
            <tr>
              <td>{{ book.detail.language }}</td>
              <td>{{ book.detail.length }}</td>
            </tr>
            <tr>
              <th class="pe-5">Kategori</th>
              <th class="pe-5">Cover</th>
            </tr>
            <tr>
              <td>{{ book.detail.category }}</td>
              <td>{{ book.detail.cover }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- {{ $route.params.detail }} -->
  </div>
</template>
<script>
export default {
  layout: "plain",
  computed: {
    sinopsis() {
      return this.book.synopsis !== "" ? "Sinopsis" : "";
    },
    detailSinopsis() {
      return "" ? "-" : this.book.synopsis;
    },
  },
  asyncData({ store, params }) {
    const book = store.getters.detailBooksData(params.detail);
    return { book };
  },
};
</script>
<style></style>
