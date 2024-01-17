import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import Store from '../views/Store.vue'


const routes = [

  {path: '/', component: Home},
  {path: '/foods', component: Foods},
  {path: '/store', component: Store},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router