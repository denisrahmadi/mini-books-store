<template>
  <keep-alive>
    <div>
      <div class="wrapper">
        <!-- <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=1060&t=st=1678287677~exp=1678288277~hmac=2df5ebf9ab8739a0cffa8b562452d5a2f6bfe21f945f7f0587d96f262d7c536e" alt="error 404" width="500">
           -->
        <div class="d-block text-center">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_yzBQmubL2J.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
          <nuxt-link 
            tag="button" 
            to="/"
            class=""
          >
           Back To Home 
          </nuxt-link>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M1161.27 225.29L1204.17 225.29L1204.17 268.19L1161.27 268.19z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1410.26 220.32L1452.03 220.32L1452.03 262.09L1410.26 262.09z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M488.81 455.95a22.92 22.92 0 1 0 30.86-33.89z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M445.97 183.06 a22.96 22.96 0 1 0 45.92 0 a22.96 22.96 0 1 0 -45.92 0z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M672.79 230.5L682.28 230.5L682.28 239.99L672.79 239.99z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1038.07 193.68L1085.52 193.68L1085.52 241.13L1038.07 241.13z' fill='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M932.92 270.98a53.6 53.6 0 1 0 106.8-9.24z' fill='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M957.56 131.85a21.68 21.68 0 1 0-19.65-38.65z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M404.38 378.83L421.65 378.83L421.65 415.66L404.38 415.66z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M747.88 7.61a40.92 40.92 0 1 0 50.58 64.34z' stroke='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M1021.22 164.9 a48.5 48.5 0 1 0 97 0 a48.5 48.5 0 1 0 -97 0z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M404.29 273.15L410.76 273.15L410.76 279.62L404.29 279.62z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M747.9 448.17 a31.63 31.63 0 1 0 63.26 0 a31.63 31.63 0 1 0 -63.26 0z' stroke='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M990.39 310.24L1034.87 310.24L1034.87 350.79L990.39 350.79z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M219.74 484.77 a28.37 28.37 0 1 0 56.74 0 a28.37 28.37 0 1 0 -56.74 0z' stroke='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M215.15 535.68L222.7 535.68L222.7 573.76L215.15 573.76z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M467.38 501.82L513.4 501.82L513.4 530.19L467.38 530.19z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M21.61 183.38L54.56 183.38L54.56 216.33L21.61 216.33z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1345.03 367.5 a41.83 41.83 0 1 0 83.66 0 a41.83 41.83 0 1 0 -83.66 0z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1102.68 1.96a0.71 0.71 0 1 0-1.24 0.69z' fill='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M1081.59 408.55L1137.16 408.55L1137.16 464.12L1081.59 464.12z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1148.39 58.69a23.28 23.28 0 1 0 44.85 12.5z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1102.17 301.41L1133.64 301.41L1133.64 332.88L1102.17 332.88z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M351.18 149.18a31.14 31.14 0 1 0 49.1-38.31z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1059.32 500.24L1094.63 500.24L1094.63 535.55L1059.32 535.55z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M1187.48 77.09a39.98 39.98 0 1 0 0.39 79.96z' fill='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M432.28 449.28a32.68 32.68 0 1 0-27.23 59.41z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M0.66 187.08a3.66 3.66 0 1 0 0.62-7.3z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M87.94 246.03 a39.57 39.57 0 1 0 79.14 0 a39.57 39.57 0 1 0 -79.14 0z' fill='rgba(25%2c 135%2c 84%2c 1)'%3e%3c/path%3e%3cpath d='M1098.48-1.27a33.39 33.39 0 1 0-45.16 49.19z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M732.17 184.89a49.95 49.95 0 1 0-92.65-37.38z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M125.49 131.84 a39.46 39.46 0 1 0 78.92 0 a39.46 39.46 0 1 0 -78.92 0z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M537.83 93.99a54.14 54.14 0 1 0-98.65-44.64z' stroke='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}

button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
</style>
