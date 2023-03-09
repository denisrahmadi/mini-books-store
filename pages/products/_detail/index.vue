<template>
  <div>
    <div class="ms-5 me-5 py-5 d-flex gap-5 sm:flex-wrap">
      <div class="bg-white p-3">
        <img :src="$route.params.detail.image" style="width: 10rem" :alt="$route.params.detail.title" />
      </div>
      <div>
        <div class="pb-3">
          <h1 class="text-capitalize"><span class="bg-white">{{ $route.params.detail.title }}</span></h1>
          <h5 class="text-danger"><span class="bg-white">Rp. {{ $route.params.detail.price }}</span></h5>
        </div>
        <h5><span class="bg-white">Deskripsi</span></h5>
        <p class="pb-3 bg-white rounded">{{ $route.params.detail.description }}</p>
        <h5><span class="bg-white">{{ sinopsis }}</span></h5>
        <p class="pb-3 bg-white rounded">{{ detailSinopsis }}</p>
        <div class="bg-white">
          <h5>Detail</h5>
          <!-- <table class="px-5">
            <tr>
              <th class="pe-5">Jumlah Halaman</th>
              <th class="pe-5">Penerbit</th>
            </tr>
            <tr>
              <td>{{ $route.params.detail.detail.pages }}</td>
              <td>{{ $route.params.detail.detail.publisher }}</td>
            </tr>
            <tr>
              <th class="pe-5">Tanggal Terbit</th>
              <th class="pe-5">Berat</th>
            </tr>
            <tr>
              <td>{{ $route.params.detail.detail.publish }}</td>
              <td>{{ $route.params.detail.detail.weight }} KG</td>
            </tr>
            <tr>
              <th class="pe-5">ISBN</th>
              <th class="pe-5">Lebar</th>
            </tr>
            <tr>
              <td>{{ $route.params.detail.detail.ISBN }}</td>
              <td>{{ $route.params.detail.detail.width }} cm</td>
            </tr>
            <tr>
              <th class="pe-5">Bahasa</th>
              <th class="pe-5">Panjang</th>
            </tr>
            <tr>
              <td>{{ $route.params.detail.detail.language }}</td>
              <td>{{ $route.params.detail.detail.length }}</td>
            </tr>
            <tr>
              <th class="pe-5">Kategori</th>
              <th class="pe-5">Cover</th>
            </tr>
            <tr>
              <td>{{ $route.params.detail.detail.category }}</td>
              <td>{{ $route.params.detail.detail.cover }}</td>
            </tr>
          </table> -->
        </div>
      </div>
    </div>
    <!-- {{ $route.params.detail }} -->
  </div>
</template>
<script>
export default {
  layout: "plain",
  data() {
    return {
      // $route.params.detail: $route.params.detail
    }
  },
  computed: {
    sinopsis() {
      return this.$route.params.detail.synopsis !== "" ? "Sinopsis" : "";
    },
    detailSinopsis() {
      return "" ? "-" : this.$route.params.detail.synopsis;
    },
  },
  // asyncData({ store, params }) {
  //   const $route.params.detail = store.getters.detailBooksData(params.detail);
  //   return { $route.params.detail };
  // },
};
</script>
<style></style>
