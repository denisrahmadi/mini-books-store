<template>
  <div>
        <div class="pb-4">
            <h1 class="text-center">Edit Form</h1>
            <form class="w-50 mx-auto py-5">
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Judul</label>
                    <input
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        :placeholder="$route.params.edit.title"
                        @change="changeData($event)"
                        name="title"
                        type="text"
                    >
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Penulis</label>
                    <input
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        type="text"
                        :placeholder="$route.params.edit.author"
                        @change="changeData($event)"
                        name="author"
                    >
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Harga</label>
                    <input
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        type="text"
                        :placeholder="$route.params.edit.price"
                        @change="changeData($event)"
                        name="price"
                    
                    >
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Image Link</label>
                    <input
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        type="text"
                        :placeholder="$route.params.edit.image"
                        @change="changeData($event)"
                        name="image"
                    >
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Desciption</label>
                    <textarea
                        class="form-control"
                        :placeholder="$route.params.edit.description"
                        @change="changeData($event)"
                        name="description"
                    >
                    </textarea>
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Synopsis</label>
                    <textarea
                        class="form-control"
                        :placeholder="$route.params.edit.synopsis"
                        @change="changeData($event)"
                        name="synopsis"
                    >
                    </textarea>
                    
                </div>
            </form>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      newBook: this.$route.params.edit
        ? { ...this.$route.params.edit }
        : {
            title: "",
            author: "",
            price: null,
            image: "",
            description: ``,
            synopsis: ``,
          },
    };
  },
  methods: {
    changeData(event) {},
  },
  layout: 'plain'
};
</script>
<style></style>
