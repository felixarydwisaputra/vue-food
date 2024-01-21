<template class="position-relative">
  <div class="container ">
    <div class="row my-5">
      <div class="col-12">
        <h5>  
          <RouterLink to="/foods" class="back">Foods</RouterLink> / 
          <span class="fw-bold">Food Detail</span>
        </h5>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="img-food">
          <img :src="'../../public/assets/img-food/' + product.gambar" class="w-100" alt="">
        </div>
      </div>
      <div class="col-6 ps-5">
        <div class="desc-food">
          <h1 class="fw-bold">{{ product.nama }}</h1>
          <div class="rating">
            <p v-if="product.rating < 5">{{ product.rating }}.{{ koma }} 
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-half ms-1 text-warning"></i>
            </p>
            <p v-else="product.rating > 5">{{ product.rating }}.0
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
              <i class="bi bi-star-fill text-warning ms-1"></i>
            </p>
          </div>
          <h3>Harga : Rp {{product.harga}}</h3>
          <form action="" v-on:submit.prevent>
            <div class="row">
              <div class="col-12">
                <div class="my-3">
                  <label for="exampleInputEmail1" class="form-label">Jumlah Pesanan : </label>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" min="0" value="0" required v-model="pesanan.jumlah_pesanan">
                  <div id="emailHelp" class="form-text text-danger" v-show="isJumlah">Mohon isi jumlah pesanan terlebih dahulu</div>
                </div>
                <div class="my-3">
                  <label for="exampleInputEmail1" class="form-label">Keterangan : </label>
                  <div>
                    <textarea class="form-control" placeholder="Keterangan tambahan..." id="floatingTextarea2" style="height: 90px" v-model="pesanan.keterangan"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <button @click="pemesanan" class="btn btn-dark keranjang w-100"><i class="bi bi-bag-check me-3"></i>Keranjang</button>
                </div>
                <div class="col-6 text-end" v-show="isLoad">
                  <div class="lds-dual-ring"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="pop-box" v-show="isPesan">
    <div class="content">
      <div class="row justify-content-center align-items-start">
        <div class="col-5" style="margin-bottom: 13rem;">
          <img src="../assets/img/thanks.png" class="w-100" alt="">
        </div>
      </div>
      <div class="row justify-content-center align-items-start">
        <div class="col-12 text-center" style="margin-top: -10rem;">
          <h2>Terimakasih sudah memesan...</h2>
          <p>Mohon tunggu ya, pesanan anda sedang diproses dan akan diantar.</p>
          <div class="btn btn-warning mt-2" @click="kembali">Kembali</div>
        </div>
      </div>
    </div>
  </div>
  
  



  <Footer/>
</template>

<script>
  import axios from 'axios';
  import Footer from '../components/Footer.vue'
  import router from '@/routes'

  export default{
    components:{
      Footer
    },
    data(){
      return{
        product : "",
        koma: Math.floor(Math.random() * 10),
        pesanan: {
          "jumlah_pesanan" : 0,
        },
        isPesan : false,
        isJumlah : false,
        isLoad : false,
      }
    },
    methods:{
      kembali(){
        router.push('/foods')
      },
      pemesanan(){
        if(this.pesanan.jumlah_pesanan > 0){
          this.pesanan.product = this.product 
          axios.post('http://localhost:3000/keranjang', this.pesanan)
          .then(() => {
            this.isLoad = true,            
            setTimeout(() => {
              this.isLoad = false
              this.isPesan = true
            }, 2000);
          })
          .catch((err) => console.log(err))
        } else{
          this.isJumlah = true
        }
      }
    },
    created(){
      axios.get('http://localhost:3000/products?id='+this.$route.params.id)
      .then(res => {
        this.product = res.data[0]
      })
      .catch(err => console.log(err))
    }
  }

</script>

<style scoped>
  .container{
    height: 80vh;
  }

  .container .back{
    text-decoration: none;
    color: black;
  }
  .container .back:hover{
    text-decoration: underline;
  }
  .row .img-food{
    border-radius: 15px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .7);
    overflow: hidden;
  }

  .row .desc-food .btn.pesan{
    letter-spacing: 2px;
  }

  .pop-box{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.747);
  }

  .pop-box .content{
    background-color: white;
    border-radius: 15px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70rem;
    height: 40rem;
  }

  /* animasi loader */
  .lds-dual-ring {
    display: inline-block;
    width: 50px;
    height: 40px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid #000000;
    border-color: #030303 transparent #030303 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

