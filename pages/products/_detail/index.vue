<template>
  <div>
    <div class="m-5 d-flex gap-5 sm:flex-wrap">
      <div>
        <img
          :src="$route.params.detail.image"
          style="width: 10rem;"
          :alt="$route.params.detail.title"
        />
      </div>
      <div>
        <div class="pb-3">
          <h1 class="text-capitalize">{{ $route.params.detail.title }}</h1>
          <h5 class="text-danger">Rp.{{ $route.params.detail.price }}</h5>
        </div>
        <h5>Deskripsi</h5>
        <p>{{ $route.params.detail.description }}</p>
        <h5>{{ sinopsis }}</h5>
        <p>{{ detailSinopsis }}</p>
        <div>
          <h5>Detail</h5>
          <table class="px-5">
            <tr>
              <th class="pe-5">Jumlah Halaman</th>
              <th class="pe-5">Penerbit</th>
            </tr>
            <tr>
              <td>{{ $route.params.detail.detail.pages }}</td>
              <td>{{$route.params.detail.detail.publisher}}</td>
            </tr>
            <tr>
              <th class="pe-5">Tanggal Terbit</th>
              <th class="pe-5">Berat</th>
            </tr>
            <tr>
              <td>{{$route.params.detail.detail.publish}}</td>
              <td>{{$route.params.detail.detail.weight}} KG</td>
            </tr>
            <tr>
              <th class="pe-5">ISBN</th>
              <th class="pe-5">Lebar</th>
            </tr>
            <tr>
              <td>{{$route.params.detail.detail.ISBN}}</td>
              <td>{{$route.params.detail.detail.width}} cm</td>
            </tr>
            <tr>
              <th class="pe-5">Bahasa</th>
              <th class="pe-5">Panjang</th>
            </tr>
            <tr>
              <td>{{$route.params.detail.detail.language}}</td>
              <td>{{$route.params.detail.detail.length}}</td>
            </tr>
            <tr>
              <th class="pe-5">Kategori</th>
              <th class="pe-5">Cover</th>
            </tr>
            <tr>
              <td>{{$route.params.detail.detail.category}}</td>
              <td>{{$route.params.detail.detail.cover}}</td>
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
    layout: 'plain',
    computed: {
        sinopsis(){
            return this.$route.params.detail.synopsis !== '' ? 'Sinopsis' : ''
        },
        detailSinopsis(){
            return "" ? '-' : this.$route.params.detail.synopsis
        }
    }
};
</script>
<style></style>
