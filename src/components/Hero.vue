<template>
  <div class="container">
    <div class="row align-items-center" style="height: 85vh;">
      <div class="col-7">
        <h1 class="fw-bold">Temukan menu favorite-mu DiKulineran</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur sunt sapiente sit provident corporis, debitis nesciunt illum!</p>
        <RouterLink class="btn btn-md bg-warning text-white" to="/foods">Pesan Sekarang <i class="bi bi-arrow-right"></i></RouterLink>
      </div>
      <div class="col-5">
        <img src="../assets/img/food.png" class="w-100" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container .row .btn:hover i{
    transition: .4s ease-in-out;
    -webkit-transition: .4s ease-in-out;
    -moz-transition: .4s ease-in-out;
    -ms-transition: .4s ease-in-out;
    -o-transition: .4s ease-in-out;
  }

  .container .row .btn:hover i{
    margin-left: 10px;
  }
</style>