<template>
    <div class="ml-8 sm:ml-0  grid  container mx-auto h-[1400px] sm:h-[1400px] lg:h-[1300px] sm:w-[1000px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] 3xl:w-[1700px] 4xl:w-[1800px]">
        <div class="relative sm:h-[1400px] lg:h-[1200px] ">
            <!-- <img class="sm:h-[1600px] lg:h-[950px] m-auto bg-cover bg-center sm:w-[1000px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] 3xl:w-[1700px] 4xl:w-[1800px]" src="../../assets/imagenes/fondo10.jpg" alt=""> -->
        </div> 

        <div class="absolute sm:h-[1400px] lg:h-[1100px]">
            <ServiciosRe></ServiciosRe>
        </div>

    </div>    

</template>

<script>
    import ServiciosRe from '@/components/comp-servicios/ServiciosRe.vue'

   export default{
    name: 'Servicios',
    components:{
        ServiciosRe
    }

   }

</script>