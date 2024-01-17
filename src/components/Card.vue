<template>
  <div class="card" style="width: 100%;">
    <img :src="'https://picsum.photos/70'+ product.id + '/400'" class="card-img-top" alt="...">
    <div class="card-body">
      <p>4.7 
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-half ms-1 text-warning"></i>
      </p>
      <h5 class="card-title">Nama Menu</h5>
      <p>Rp 10.000</p>
      <p class="card-text">Some quick example text to build</p>
      <a href="#" class="btn btn-warning">Pesan</a>
      <a href="#" class="btn btn-outline-dark ms-2">Keranjang</a>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      product: [],
    }
  }
</script>