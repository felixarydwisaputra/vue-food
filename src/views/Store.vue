<template>
  <div class="container mb-5 mt-4">
    <div class="row justify-content-center mb-2">
      <h1 class="text-center">Store</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam libero minus voluptates? Obcaecati hic architecto repellendus, deserunt cum sint?</p>
    </div>
    
    <div class="row align-items-center flex-column">
      <div class="col-10 mt-4" v-for="item in store">
        <div class="card" style="width: 100%; height: 70%; overflow: hidden;">
          <img :src="'https://picsum.photos/70' + item.id + '/201'" class="w-100" alt="">
          <p class="categories text-white">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>

  <Footer/>

</template>

<script>
  import Footer from '../components/Footer.vue'

  export default{
    components:{
      Footer,
    },
    data(){
      return{
        store:[
          {id:1, name: "MCDonald"},
          {id:2, name: "KFC"},
          {id:3, name: "JagoFood"},
        ]
      }
    }
  }
</script>

<style scoped>
  p{
    width: 50rem;
    text-align: center;
    margin: auto;
  }
  
  .container .card{
    position: relative;
    cursor: pointer;
    overflow: hidden;
    font-weight: bold;
  }

  .container .card img{
    transition: 1s;
    opacity: .9;
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