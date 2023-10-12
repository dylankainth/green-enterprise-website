<template>
<div> 

<div class="imagecontainer">
  <img src="~/assets/img/jon-flobrant-v1eV6HUdcIE-unsplash.jpg" class="backimage" style="width:100%;">
  <div class="centeredtext">
    <div class="py-5 my-5">
    <h1 class="display-5 fw-bold overflow-hidden">Our Mission</h1>
    <div class="col-lg-12 mx-auto">
      <p class="lead mb-4 fs-2">Encourage younger generations to tackle real-world problems by considering the preservation of our planet at the forefront of their solutions.</p>
    </div>
  </div>
  </div>
</div>


<div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-5 fw-bold overflow-hidden text-white">The Competiton</h1>
        <p class="col-lg-10 fs-2 text-white">Teams of up to six people create a one-minute video and pitch deck on an original idea around the theme:</p>
        <p class="col-lg-10 fs-2 text-warning">Reduce, Reuse, Recycle.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr class="my-4">
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>
.imagecontainer {
  position: relative;
  text-align: center;
  color: white;
  height:40vh;
  background-size: cover;
  overflow-y: hidden;
  background-position-y: -1rem;
}

.backimage{
  -webkit-filter: brightness(0.7);
  filter: brightness(0.7);
  background-position: 0% -20%;
}
/* Centered text */
.centeredtext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
}
</style>