<template>
  <div>
    <footer class="container py-5 border-top" style="max-width: 100%; background-color: #ffff;">
        <div class="row lg:flex justify-content flex-wrap">
            <div class="col-md-3 d-block text-center ms-3">
                <nuxt-link class="navbar-brand d-flex" to="/">
                    <img src="~/static/assets/gramedlite.svg" alt="" width="50px" />
                    <h1 class="brand text-dark text-uppercase">Gramedlite</h1>
                </nuxt-link>
                <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero architecto impedit dignissimos libero recusandae est incidunt alias rem sint?</p>
            </div>
            <div class="col col-md col-sm-2 mt-3 ps-5">
                <h5 class="fw-bold">About</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="link-dark text-decoration-none" href="#">Team</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Locations</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Privacy</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Terms</a></li>
                </ul>
            </div>
            <div class="col col-md col-sm-2 mt-3">
                <h5 class="fw-bold">Resources</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="link-dark text-decoration-none" href="#">Business</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Education</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Government</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Gaming</a></li>
                </ul>
            </div>
            <div class="col col-md col-sm-2 mt-3">
                <h5 class="fw-bold">Features</h5>
                <ul class="list-unstyled text-small text-decoration-none">
                    <li><a class="link-dark text-decoration-none" href="#">Cool stuff</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Random feature</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Team feature</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Stuff for developers</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Another one</a></li>
                    <li><a class="link-dark text-decoration-none" href="#">Last time</a></li>
                </ul>
            </div>
            <div class="col-md col-sm-2 mt-3 ms-3 ms-lg-3 pe-3">
                <form>
                    <!-- <input type="text" name="text" class="input" placeholder="Type your text"> -->
                    <label for="newsletter"><h5 class="fw-bold pb-2">Newsletter <i class="fa-solid fa-bell"></i></h5></label>
                    <div class="group-input">
                        <input type="email" class="input" id="Email" name="Email" placeholder="example@gmail.com" autocomplete="off">
                        <!-- <input class="button--submit" value="Subscribe" type="submit"> -->
                        <button class="button--submit">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
            <ul type="none" class="d-flex col-md col-sm-2 gap-3 ms-3 ms-lg-3 pt-3 fs-5">
                    <li>
                        <a href="#" class="hover__sosmed">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover__sosmed">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover__sosmed">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover__sosmed">
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                </ul>
        </div>
        <hr>
        <small class="d-block mx-auto text-center text-muted">&copy;GramedLite 2023 - All Right Reserved</small>
    </footer>
  </div>
</template>
<style scoped>
.group-input {
    display: flex;
    align-items: center;
    z-index: 2;
    width: 100px;
  }
  
  .input {
    min-height: 40px;
    max-width: 175px;
    padding: 0 1rem;
    color: #000;
    font-size: 15px;
    border: 1px solid #198754;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
  }
  
  .button--submit {
    min-height: 40px;
    padding: .5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #198754;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
  }
  
  .button--submit:hover {
    background-color: #000;
  }
  
  .input:focus, .input:focus-visible {
    border-color: #198754;
    outline: none;
  }
  
.hover__sosmed{
    color: black;
}
  .hover__sosmed:hover {
    color: #198754
  }

  .sosmed{
    z-index: 2;
    position: absolute;
    right: 185px;
  }
</style>
