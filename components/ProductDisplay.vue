<template>
  <div>
    <div class="p-5">
      <h3 class="text-center mb-5 fs-1">
        <span class="bg-white px-5 py-1 rounded-pill text-uppercase fw-bold"
        >
          Best Seller
        </span>
      </h3>
      <div
        class="container mx-auto background"
      >
        <div 

          class="row gap-5 justify-content-center"
        >
          <div class="card col-md-3 col-lg "           v-for="(book, index) in bestSellerBooks" 
          :key="index">
            <div class="card-image">
              <img
              :src="book.image"
              alt=""
              style="width: 100%; height: 240px; border-radius: 5px;"
            />
            </div>
            <div class="heading text-truncate">
              <span class="">{{ book.title }}</span>
            </div>
            <div class="author">
              By <span class="name">{{ book.author }}</span>
            </div>
            <h5 class="card-title text-dark ms-1">Rp. {{ book.price }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bestSellerBooks: [
        {
          title: 'Sapiens: A Brief of History',
          author: 'Yuval Noah Harari',
          image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388620656i/55030.jpg',
          price: 100000
        },
        {
          title: 'Cosmos',
          author: 'Carl Sagan',
          image: 'https://cdn.gramedia.com/uploads/items/591701404_sapiens.jpg',
          price: 150000
        },
        {
          title: 'Why People?',
          author: 'Richard Feynmann',
          image: 'https://cdn.gramedia.com/uploads/items/why_people-richard_feynman_204882549.jpg',
          price: 50000
        },
        {
          title: 'Atomic Habit',
          author: 'James Clear',
          image: 'https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit__w150_hauto.jpg',
          price: 120000
        },
      ]
    }
  },
}
</script>
<style scoped>
.background {
  background-color: rgba(255, 255, 255, 0.55);
}

/* .card {
  transition: all 0.5s;
}
.card:hover {
  transform: scale(1.1);
} */
.card {
  width: 190px;
  height: 100%;
  background: white;
  padding: 0.4em;
  border-radius: 6px;
  transition: all .5s;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 10px 1px #198754;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 100%;
  border-radius: 6px 6px 0 0;
  transition: .5s;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 700;
  font-size: large;
  color: rgb(88, 87, 87);
  padding: 5px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-bottom: 10px;
  padding-left: 5px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
</style>
