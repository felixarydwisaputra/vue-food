<template>
  <Hero/>

  <div class="rating">
    <div class="container">
      <h1>Favorite Menu</h1>
      <div class="row justify-content-center my-5">
        <div class="col-md-3 mt-4" v-for="item in products">
          <Card :product="item"/>
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

  export default{
    components: {
      Hero,
      Card,
      Footer
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