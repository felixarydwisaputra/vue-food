<template>
  <div class="container my-5">
    <div class="row my-5 justify-content-center">
      <h1 class="text-center">All Menu</h1>
      <div class="col-3 mt-4" v-for="(kategori, i) in categories">
        <div class="card" style="width: 100%">
          <img :src="'https://picsum.photos/70' + i + '/301'  " class="w-100" alt="">
          <p class="categories text-white">{{ kategori }}</p>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-4 d-flex justify-content-center mt-4"  v-for="item in menu">
        <Card :product="item"/>
      </div>      
    </div>
  </div>
  
  <Footer/>
</template>


<script>
  import Card from '../components/Card.vue'
  import Footer from '../components/Footer.vue'

  export default{
    components: {
      Card,
      Footer,
    },
    data(){
      return{
        categories: ["Foods","Drinks","Desserts","Ice Cream"],
        menu:[
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

<style scoped>
  .container .card{
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .container .card img{
    transition: 1s;
    opacity: .7;
  }
  
  .container .card:hover img{
    opacity: .3;
    transform: scale(1.1);
  }

  .container .card .categories{
    font-size: 1.7rem;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    position: absolute;
    text-shadow: 1px 1px 4px rgba(0,0,0, .5);
    font-style: italic;
  }
</style>