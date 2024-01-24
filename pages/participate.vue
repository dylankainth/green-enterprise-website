<template>
<div>

<div class="imagecontainer d-none d-lg-block">
  <img src="~/assets/img/scott-webb-e6VmcXF8llA-unsplash.jpg" class="backimage" style="width:100%; object-fit: cover;">
  <div class="centeredtext">
    <div class="py-5 my-5">
    <h1 class="display-5 fw-bold overflow-hidden">Information</h1>
    <div class="col-lg-12 mx-auto">
      <p class="lead mb-4 fs-2">Watch our tutorials to gain skills to aid your participation in the competition</p>
    </div>
  </div>
  </div>
</div>

<div class="d-lg-none pt-5 text-white">
<center>
  <h1 class="display-5 fw-bold overflow-hidden">Our Mission</h1>
      <div class="col-lg-12 mx-auto">
        <p class="lead mb-4 fs-2">Encourage younger generations to tackle real-world problems by considering the preservation of our planet at the forefront of their solutions.</p>
      </div>
      </center>
</div>




<div class="container my-5" v-for="(tutorial, index) in this.$store.state.tutorials">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="display-1 fw-bold overflow-hidden">{{index+1}}</h1>
    <h1 class="text-body-emphasis overflow-hidden">{{ tutorial.title }}</h1>
    <p class="col-lg-8 mx-auto fs-5 text-muted" v-html="tutorial.shortstrapline">
    </p>
    <div class="d-inline-flex gap-2">
      <NuxtLink :to="'/tutorials/' + (index+1)" class="button d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
        View Theme
      </NuxtLink>
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

.text-specialgreen {
  color:  #4B9354
}
</style>
