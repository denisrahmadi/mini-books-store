<template>
    <div>
      <div>
        <h1 class="text-center pt-5"><span class="bg-white px-5">Form Sign Up</span></h1>
        <form
          class="row g-3 needs-validation d-relative mx-auto w-50 bg-white"
          novalidate
          @submit.prevent="signUp"
        >
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput" class="form-label">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="denisrahmadi"
              v-model="username"
            />
            <label for="floatingInput" class="form-label">Username</label>
          </div>
          <!-- <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Denis"
              v-model="firstName"
            />
            <label for="floatingInput" class="form-label">First Name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Rahmadi"
              v-model="lastName"
            />
            <label for="floatingInput" class="form-label">Last Name</label>
          </div> -->
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="ex: Passwordaman123."
              v-model="password"
            />
            <label for="floatingInput" class="form-label">Password</label>
            <span v-if="password == '' && confirmPassword == ''"></span>
            <span v-else-if="password && confirmPassword  == ''" class="text-success"></span>
            <span v-else-if="password === confirmPassword" class="text-success">password match</span>
            <span v-else="password !== confirmPassword" class="text-danger">password doesn't match</span>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="ex: Passwordaman123."
              v-model="confirmPassword"
            />
            <label for="floatingInput" class="form-label">Confirm Password</label>
          </div>
          <div>
            <p>
            Sudah punya akun?
            <span>
              <nuxt-link to="/signin">Signin</nuxt-link>
            </span>
          </p>
          <button class="btn btn-success fw-bold w-100" type="submit">Submit</button>
          </div>  
        </form>
      </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password:"",
      confirmPassword: ""
    }
  },
  methods: {
    signUp(){
      this.$store.dispatch("authenticateUser", {
            isLogin: false,
            email: this.email,
            password: this.password,
            displayName: this.username,
      }).then(() => this.$router.push("/"))
    }
  },
  layout: 'plain'
}
</script>
<style scoped>
    .background{
        padding-bottom: 110px;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='900' preserveAspectRatio='none' viewBox='0 0 1440 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1183%26quot%3b)' fill='none'%3e%3crect width='1440' height='900' x='0' y='0' fill='rgba(237%2c 241%2c 214%2c 0.5)'%3e%3c/rect%3e%3cpath d='M450 205.15C436.87 205.15 422.45 209.21 422.45 225C422.45 315.57 437.81 417.86 450 417.86C462.13 417.86 471.09 317.54 471.09 225C471.09 211.19 461.19 205.15 450 205.15' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1471.15 0C1525.92 73.65 1545.36 124.93 1517.31 225C1484.79 341 1454.79 392.07 1350 432.14C1258.64 467.07 1224.59 368.6 1125 375C1085.62 377.53 1076.12 406.72 1072.06 450C1062.06 556.72 1078.31 563.77 1096.88 675C1104.78 722.29 1109.15 767.05 1125 767.05C1141.29 767.05 1131.6 713.81 1161.16 675C1244.1 566.1 1236.83 514.36 1350 471.63C1443.75 436.24 1508.02 458.21 1575 518.75C1620.52 559.9 1575 596.88 1575 675C1575 734.84 1589.67 738.67 1575 794.68C1560.21 851.17 1563.42 877.84 1516.07 900C1450.92 930.5 1433.03 900 1350 900C1237.5 900 1237.5 900 1125 900C1081.99 900 1079.99 910.25 1038.97 900C967.49 882.13 969.06 843.75 900 843.75C835.72 843.75 838.58 883.43 772.3 900C726.08 911.55 723.65 900 675 900C562.5 900 562.5 900 450 900C343.75 900 335.77 912.28 237.5 900C223.27 898.22 236.29 871.88 225 871.88C201.92 871.88 199.29 896.18 168.75 900C86.79 910.24 36.16 948.21 0 900C-48.21 835.71 0 787.5 0 675C0 562.5 0 562.5 0 450C0 337.5 0 337.5 0 225C0 112.5 -56.25 56.25 0 0C56.25 -56.25 112.5 0 225 0C337.5 0 337.5 0 450 0C562.5 0 562.5 0 675 0C787.5 0 787.5 0 900 0C1012.5 0 1012.5 0 1125 0C1237.5 0 1237.5 0 1350 0C1410.57 0 1442.26 -38.85 1471.15 0' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M450 122.43C382.18 122.43 371.7 166.24 307.65 225C259.2 269.45 268.45 278.75 225 328.85C170.88 391.25 129.92 377.06 112.5 450C88.59 550.14 172.69 578.84 142.35 675C116.44 757.14 42.4 806.6 0 806.6C-28.78 806.6 0 740.8 0 675C0 562.5 0 562.5 0 450C0 337.5 0 337.5 0 225C0 112.5 -56.25 56.25 0 0C56.25 -56.25 112.5 0 225 0C337.5 0 337.5 0 450 0C528.54 0 538.36 -22.44 607.08 0C650.86 14.29 642.15 35.75 675 73.47C740.12 148.25 743.06 146.18 803.02 225C855.56 294.06 849.92 298.25 900 369.23C929.29 410.75 943.67 403.43 961.76 450C1003.05 556.31 1037.2 577.38 1018.75 675C1006.32 740.78 969.55 746.44 900 776.79C797.68 821.44 766.31 853.49 675 825C603.19 802.59 605.86 757.7 573.75 675C533.06 570.2 533.12 563.09 529.41 450C525.74 338.09 582.91 323.7 558.98 225C543.2 159.91 507.85 122.43 450 122.43' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1131.62 225C1131.62 138.29 1260.35 24.32 1350 24.32C1417.14 24.32 1445.19 130.31 1445.19 225C1445.19 289.58 1409.43 342.86 1350 342.86C1252.65 342.86 1131.62 297.56 1131.62 225' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1261.61 675C1291.5 618.67 1295.61 579.81 1350 579.81C1452.3 579.81 1550.89 597.11 1575 675C1600.44 757.2 1530.37 818.74 1449.11 900C1417.87 931.24 1399.55 900 1350 900C1265.05 900 1198.45 946.71 1180.1 900C1154.25 834.21 1206.55 778.77 1261.61 675' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M225 146.25C184.27 172.68 196.58 187.17 164.42 225C84.08 319.48 47 410.87 0 410.87C-35.21 410.87 0 317.93 0 225C0 112.5 -56.25 56.25 0 0C56.25 -56.25 112.5 0 225 0C337.5 0 337.5 0 450 0C475.47 0 500.94 -8.75 500.94 0C500.94 11.1 478.42 24.65 450 39.71C340.45 97.77 327.06 80.03 225 146.25' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M646.88 225C652.19 202.9 660.5 188.27 675 188.27C690.07 188.27 694.58 203.97 706.03 225C765.83 334.83 753.94 342.48 817.5 450C850.93 506.55 868.79 496.1 900 553.13C930.36 608.6 940.63 619.69 940.63 675C940.63 698.04 924.53 709.82 900 709.82C831.09 709.82 821.49 703.72 753.75 675C708.99 656.02 700.55 655.01 675 614.42C629.74 542.51 618.26 534.9 612.13 450C604.2 340.19 620.75 333.77 646.88 225' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1297.06 225C1297.06 203.98 1328.27 176.35 1350 176.35C1366.28 176.35 1373.08 202.05 1373.08 225C1373.08 240.66 1364.41 253.57 1350 253.57C1326.4 253.57 1297.06 242.59 1297.06 225' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 540C6.96 540 27.55 611.94 27.55 675C27.55 692.17 8.21 700.47 0 700.47C-5.57 700.47 0 687.74 0 675C0 607.5 -6.82 540 0 540' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1294.9 900C1294.9 830.38 1327.87 720 1350 720C1371.49 720 1382.14 823.45 1382.14 900C1382.14 913.45 1366.07 900 1350 900C1322.45 900 1294.9 920.38 1294.9 900' stroke='rgba(64%2c 81%2c 59%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1183'%3e%3crect width='1440' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    }
</style>