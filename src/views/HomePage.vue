<template>
    <div class="flex flex-col">      
        <Banner></Banner>      
        <InicioPage></InicioPage>      
        <NosotrosPage></NosotrosPage>     
        <ServiciosPage></ServiciosPage>     
        <ContactoPage></ContactoPage>      
    </div>
  
</template>
  
<script>
   import Banner from '@/components/home/Banner.vue'
   import InicioPage from '@/views/contenidomenu/InicioPage.vue'
   import NosotrosPage from '@/views/contenidomenu/NosotrosPage.vue'
   import ServiciosPage from '@/views/contenidomenu/ServiciosPage.vue'
   import ContactoPage from '@/views/contenidomenu/ContactoPage.vue'   

    export default{
    name: 'HomePage',
    
    components:{
      Banner,
      InicioPage,
      NosotrosPage,
      ServiciosPage,
      ContactoPage,   
      
    }
   }
  
</script>