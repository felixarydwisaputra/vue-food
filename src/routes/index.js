import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import Store from '../views/Store.vue'
import foodsDetail from '../views/foodsDetail.vue'
import Keranjang from '../views/Keranjang.vue'


const routes = [

  {path: '/', component: Home},
  {path: '/foods', component: Foods, alias: "/foods"},
  {path: '/foods/:id', component: foodsDetail},
  {path: '/keranjang', component: Keranjang},
  {path: '/store', component: Store},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router