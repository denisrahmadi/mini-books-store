<template>
  <div>
    <div class="container p-5 w-50 background">
      <h1 class="text-uppercase fw-bold text-center mb-5">profile</h1>
      <div
        class="text-center"
        v-for="(data, index) in userProfile"
        :key="index"
      >
        <img
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="profile picture"
          style="width: 300px; height: 300px; border-radius: 150px"
        />
        <p class="fw-bold fs-3 text-center">{{ data.name }}</p>
      </div>
      <div
        class="d-flex justify-content-center"
        v-for="(data, index) in userProfile"
        :key="index"
      >
        <table>
          <tbody>
            <tr>
              <th>Email</th>
              <td>:</td>
              <td>{{ data.email }}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>:</td>
              <td>{{ data.phone }}</td>
            </tr>
            <tr>
              <th>Alamat</th>
              <td>:</td>
              <td rowspan="2">{{ data.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn btn-transparent fs-4">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  layout: "navfoot",
  data() {
    return {
      userProfile: [
        {
          name: "Steve Jobs",
          email: "jobssteve@gmail.com",
          phone: "082211373658",
          address: "Jl. Rasuna Said Panunggangan Utara, Pinang, Kota Tangerang",
        },
      ],
    };
  },
};
</script>
<style scoped>
td:nth-child(2) {
  padding: 0px 30px;
}

.background {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}

button {
  transition: 0.8s;
  color: #1eb9ff;
}
button:hover {
  transform: scale(1.1);
  transition: 0.8s;
  background-color: #1eb9ff;
  color: white;
}
</style>
