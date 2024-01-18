<template>
  <div class="container my-5">
    <div class="row my-5 justify-content-center">
      <h1 class="text-center">All Menu</h1>
      <RouterLink class="col-3 mt-4" v-for="(kategori, i) in categories" :to=" '/foods/' + kategori">
        <div class="card" style="width: 100%">
          <img :src="'https://picsum.photos/70' + i + '/301'  " class="w-100" alt="">
          <p class="categories text-white">{{ kategori }}</p>
        </div>
      </RouterLink>
    </div>

    <div class="row justify-content-center">
      <div class="col-4 d-flex justify-content-center mt-4"  v-for="item in allProducts">
        <Card :product="item" :rating="item.rating"/>
      </div>      
    </div>
  </div>
  
  <Footer/>
</template>


<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Card from '../components/Card.vue'
  import Footer from '../components/Footer.vue'
  import axios from 'axios'
  
  export default{
    components: {
    Card,
    Footer,
    RouterLink,
    RouterView
},
    data(){
      return{
        categories: ["makanan","minuman","dessert","ice cream"],
        allProducts: [],
        productkate: [],
      }
    },
    methods:{
      getAllData(){
        axios.get('http://localhost:3000/products')
        .then(res => this.allProducts = res.data)
        .catch(err => console.log(err))
      },
      kategori(kate){
        this.allProducts.filter(item => {
          if(item.kategori == kate){
            this.productkate = item
          }
          
        })
      }
    },
    created(){
      this.getAllData()
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