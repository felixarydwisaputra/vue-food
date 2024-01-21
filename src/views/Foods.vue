<template>
  <div class="container my-5">
    
    
    <div class="row my-5 justify-content-center">
      <h1 class="text-center">All Menu</h1>
      <div class="row mt-3">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Mau makan apa hari ini?" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-warning" type="button" id="button-addon2">Cari</button>
        </div>
      </div>

      <div class="col-3 mt-4" v-for="(kategori, i) in categories" >
        <div class="card" style="width: 100%">
          <img :src="'../../public/assets/img-food/categories/' + (i+1) + '.jpg' " class="w-100" alt="">
          <p class="categories text-white fw-bold shadow-4">{{ kategori }}</p>
        </div>
      </div>
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
    opacity: .8;
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