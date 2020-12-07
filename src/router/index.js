import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')
const ShopCar = () => import('views/shopcar/ShopCar.vue')

const routes = [
  {
  	path: '',
  	redirect: '/home'
  },
  {
  	path: '/home',
  	component: Home
  },
  {
  	path: '/category',
  	component: Category
  },
  {
  	path: '/profile',
  	component: Profile
  },
  {
  	path: '/shopcar',
  	component: ShopCar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
