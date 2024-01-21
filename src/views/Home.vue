<template>
  <Hero/>

  <div class="rating">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <h1>Favorite Menu</h1>
        </div>
        <div class="col-6 text-end">
          <RouterLink class="mt-5 text-warning fw-bold" to="/foods">Lihat Selengkapnya</RouterLink>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-md-3 mt-4" v-for="item in products">
          <Card :product="item" :rating="item.rating"/>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import Card from '../components/Card.vue'
  import Footer from '../components/Footer.vue'
  import axios from 'axios'
import { RouterLink } from 'vue-router'

  export default{
    components: {
    Hero,
    Card,
    Footer,
    RouterLink
},
    data(){
      return{
        products:[]
      }
    },
    methods:{
      getBestData(){
        axios.get('http://localhost:3000/best-products')
        .then(res => this.products = res.data)
        .catch(err => console.log(err))
      }
    },
    created(){
      this.getBestData()
    },
  }
</script>

<style scoped>
  .rating a{
    text-decoration: none;
  }
</style>