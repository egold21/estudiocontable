import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import InicioPage from '@/views/contenidomenu/InicioPage.vue'
import NosotrosPage from '@/views/contenidomenu/NosotrosPage.vue'
import ServiciosPage from '@/views/contenidomenu/ServiciosPage.vue'
import ContactoPage from '@/views/contenidomenu/ContactoPage.vue'
import BlogPage from '../views/contenidomenu/BlogPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        
    {
      path:'/',
      name: 'home',
      component: HomePage,            
    },

    {
      path:'/inicio',
      name: 'inicio',
      component: InicioPage      
    },
    {
      path:'/nosotros',
      name: 'nosotros',
      component: NosotrosPage      
    },

    {
      path:'/servicios',
      name: 'servicios',
      component:ServiciosPage      
    },

    {
      path:'/contacto',
      name: 'contacto',
      component:ContactoPage      
    },
    {
      path:'/blog',
      name: 'blog',
      component:BlogPage    
    },
    
  ]
})
export default router
