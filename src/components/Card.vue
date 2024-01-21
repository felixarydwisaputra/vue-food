<template>
  <div class="card" style="width: 100%;">
    <img :src=" '../../public/assets/img-food/' + product.gambar" class="card-img-top" alt="...">
    <div class="card-body">
      <p v-if="rating < 5">{{ rating }}.{{ koma }} 
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-half ms-1 text-warning"></i>
      </p>
      <p v-else="rating > 5">{{ rating }}.0
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
        <i class="bi bi-star-fill text-warning ms-1"></i>
      </p>
      <h5 class="card-title">{{ product.nama }}</h5>
      <p>Rp {{ product.harga }}</p>
      <p class="card-text">Some quick example text to build</p>
      <RouterLink :to="'/foods/' + product.id " class="btn btn-warning w-50">Pesan</RouterLink>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      product: "",
      rating: 0,
    },
    data(){
      return {
        koma: Math.floor(Math.random() * 10)
      }
    }
  }
</script>

<style scoped>
  .card{
    overflow: hidden;
  }

  .card img{
    transition: .4s;
  }

  .card img:hover{
    transform: scale(1.05);
  }
</style>