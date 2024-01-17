<template>
  <Hero/>

  <div class="rating">
    <div class="container">
      <h1>Favorite Menu</h1>
      <div class="row justify-content-center my-5">
        <div class="col-md-3 mt-4" v-for="item in fav">
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

  export default{
    components: {
      Hero,
      Card,
      Footer
    },
    data(){
      return{
        fav:[
          {id:1},
          {id:2},
          {id:3},
          {id:4},
          {id:5},
          {id:6},
        ]
      }
    }
  }
</script>