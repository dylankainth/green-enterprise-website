<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <nav class="navbar navbar-light d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-xl-0 me-xl-auto text-decoration-none"
          >
            <img src="~/assets/img/potted-plant.svg" class="logo" alt="gwandllyne the plant" />
            <span class="brandnamewhite">Green Enterprise</span>
          </a>

          <div class="d-xl-block d-none">
            <ul class="nav nav-pills py-5">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/participate" class="nav-link">Information</NuxtLink>
              </li>

              <li class="nav-item participate">
                <a href="https://forms.office.com/e/VfkB35WK4k" target="_blank" class="nav-link">Participate</a>
              </li>

            </ul>
          </div>
        </nav>

        <nav class="navbar navbar-dark d-flex flex-wrap justify-content-center d-block d-xl-none">
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">

            </button> -->

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"  aria-controls="offcanvasNavbar"> <span class="navbar-toggler-icon"></span> </button>
          </nav>

      </div>
    </header>

    <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >

      <div class="offcanvas-header">
      <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-header">


          <h2 class="offcanvas-title" id="offcanvasNavbarLabel">
            <a
            href="/"
            class="d-flex align-items-center mb-xl-0 me-xl-auto text-decoration-none"
          >
            <span class="brandnamegreen">Green Enterprise</span>
          </a>
          </h2>

        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li  class="nav-item-offcanvas" data-bs-dismiss="offcanvas">
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
              </li>
              <li  class="nav-item-offcanvas" data-bs-dismiss="offcanvas">
                <NuxtLink to="/participate" class="nav-link">Information</NuxtLink>
              </li>

              <li class="nav-item-offcanvas">
                <a href="https://forms.office.com/e/VfkB35WK4k" target="_blank" class="nav-link">Participate</a>
              </li>

          </ul>
        </div>
      </div>


    <div class="content">
      <Nuxt />
    </div>

    <footer
      class="d-flex flex-wrap justify-content-center align-items-center py-3 mt-4 border-top"
    >
     <center>

     <div class="pb-3 text-white text-center credittitle">
          Website brought to you by Dylan Kainth and Vlad Plyushchenko
        </div>

        <a href="https://css.harrowschool.io/" style="text-decoration:none">
          <div class="row mb-3">
            <div class="col-md-12">

              <div class="row">
                <div class="col-6 text-end">
                  <img src="~/assets/img/csslogowhite.png" class="my-auto" height="95rem" />
                </div>
                <div class="col-6 text-start credits text-white">
                  The <br />Computer<br />
                  Science<br />
                  Society
                </div>
              </div>
            </div>
          </div>
        </a>
        </center>

    </footer>
  </div>
</template>

<style>
.nav-item-offcanvas > .nav-link {
  font-size:3rem;
  color: #001a46 !important;
}

.nav-item-offcanvas .nuxt-link-exact-active {
  font-size:3rem;
  color: #4B9354 !important;
}

* {
  font-family: 'Manrope', sans-serif;
  overflow-x: hidden;
}

.nav-item {
  font-size: 1.2rem;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  letter-spacing: 0.1rem;
}
.nav-item .nuxt-link-exact-active {
  background-color: #eff0f2 !important;
  color: #001a46 !important;
}

.participate {
  background-color: #4B9354;
  color: #001a46 !important;
}

.nav-item:hover {
  background-color: #eff0f2 !important;
}

.nav-link:hover {
  font-weight:bold;
  color: #000000;
}

.nav-link {
  color: #eff0f2;
}

.brandnamewhite:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.brandnamegold:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.logo:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.brandnameblue {
  color: #001a46;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}
.brandnamewhite {
  color: #fff;
  font-size: 3.7rem;
  line-height:3.7rem;
  overflow:hidden;
  font-weight:bold;
}
.brandnamegreen {
  color: #4B9354;
  font-size: 3.7rem;
  line-height:3.7rem;
  overflow:hidden;
  font-weight:bold;
}
.brandnamegold {
  color: #cba33a;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}

.logo {
  width: 4rem;
  margin-right: 1rem;
  height: auto;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #4B9354;
}

nav {
  max-width: 1240px;
}

.container {
  max-width: 1240px;
}

header {
  background-color: #4B9354;
}

footer {
  background-color: #376D3D;
}

.content {
  /* margin-top: 160px; /* Change the value to the height of the navbar */
  flex-grow: 1;
}

.footer {
  margin-top: auto;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }
}
</style>
