<template>
    <div class="flex flex-col items-center container max-width mx-auto md:mt-0 mt-[308px] ">
        <div class="w-screen h-[500px]">
            <img class="relative h-full w-full object-cover object-center" src="../../assets/imagenes/fondo12.jpg" alt="">
        </div>
        <div class="absolute justify-center lg:pt-[10%] md:pt-[25%] sm:pt-[30%]">
            <h1 class="titulo text-center hover:text-gray-500 hover:scale-125 duration-500">ESTUDIO CONTABLE</h1>
            <br>
            <h1 class="subtitulo text-center hover:text-gray-400 hover:scale-125 duration-500" >Estamos para ayudarlo-Contáctanos</h1>
            
            <div class="grid md:grid-cols-2 sm:text-lg font-bold gap-6 text-gray-400 lg:text-2xl tracking-widest lg:pt-[20%] md:pt-[18%] sm:pt-[20%]" >

                <div class="flex">
                    <img src="../icons/watsapp.png" alt="" class="h-8 w-8">
                    <h1>959429392 / 99625096</h1>
                </div>
                
                <div class="flex">
                    <img src="../icons/email2.png" alt="" class="h-8 w-8">
                    <h1>eymcontadores@gmail.com</h1>
                </div>
                
            </div>
        </div>        
        
        
    </div>

</template>

<script>
    export default{
        name:'Banner'
    }
</script>

<style lang="css" scoped>
</style>