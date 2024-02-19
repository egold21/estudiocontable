<template>
  <div class=" h-full grid  image ">
    
    <NavBar class="fixed z-10 w-screen"></NavBar>  
    <RouterView class=""></RouterView>
    <Footer class=""></Footer>
  </div>
  
</template>


<script>
  import NavBar from '../src/components/navbar/NavBar.vue';
  import Footer from '../src/components/footer/Footer.vue';
  
  export default{
    name:'App',
    components:{
      NavBar,
      Footer,    

    }
  }

</script>

<style lang="css">
  .image{
    background-image: url(../src/assets/imagenes/fondo11.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

  }
</style>

