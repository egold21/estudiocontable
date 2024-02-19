<template> 
    <div class="flex flex-col items-center container max-width mx-auto  leading-relaxed ">
        
        <div class=" w-screen relative
         imagen bg-cover h-[800px] sm:h-[800px] md:h-[700px] lg:h-[600px] xl:h-[500px]">
            <img class="opacity-75 relative h-[800px] sm:h-[800px] md:h-[700px] lg:h-[600px] xl:h-[500px] w-full bg-cover object-cover object-center" src="../../assets/imagenes/imagen6.jpg" alt=""> 
        </div>

        <div class="absolute flex flex-col container items-center sm:h-[800px] md:h-[700px] lg:h-[600px] xl:h-[350px]  w-full">
            
            <div class="px-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 container justify-items-center gap-3 pt-4 sm:h-[800px] md:h-[550px] lg:h-[400px] ">
                <div class="flex gap-2 items-center">
                    <img src="../icons/logo.png" alt="" class="h-14 w-14">
                    <h1 class="font-bold text-3xl text-white">EyM Contadores</h1>
                </div>

                <div class="flex flex-col text-white justify-start w-26">
                    <div class="flex gap-2">
                        <img src="../icons/diseno.png" alt="" class="h-7 w-7">
                        <h1 class="my-1 font-bold">LINK:</h1>
                    </div>
                    <RouterLink :to="{name:'home'}">                                                                         
                        <a class="pl-9 hover2" href="#">Inicio</a>
                    </RouterLink>
                    
                    <RouterLink :to="{name:'nosotros'}">
                        <a class="pl-9 hover2" href="#">Nosotros</a>
                    </RouterLink> 
                    
                    <RouterLink :to="{name:'servicios'}">
                        <a class="pl-9 hover2" href="#">Servicios</a> 
                    </RouterLink>
                    
                    <RouterLink :to="{name:'contacto'}">
                        <a class="pl-9 hover2" href="#">Contacto</a>
                    </RouterLink>

                    <RouterLink :to="{name:'blog'}">                   
                        <a class="pl-9 hover2" href="#">Foro</a>
                    </RouterLink> 
                </div>

                <div class="gap-1 text-white justify-items-start  w-52">
                    <div class="flex gap-2">
                        
                        <img src="../icons/mapa.png" alt="" class="h-7 w-7 ">
                        
                        <h1 class="my-1 font-bold">DIRECCIÓN</h1> 
                    </div>                                        
                    <h1 class="pl-9">Av. La Cultura nro. s/n</h1>                                         
                    <h1 class="pl-9">San Jerónimo - Cusco</h1>
                </div>

                <div class="gap-1 text-white justify-center  w-52"> 
                    <div class="flex gap-2">
                        <img src="../icons/email.png" alt="" class="h-7 w-7">
                        <h1 class="my-1 font-bold">CORREO:</h1>                   
                    </div>  
                    <h1 class="pl-9">eymcontadores@gmail.com</h1>                 
                    
                </div>

                <div class="gap-1 text-white justify-center  w-52">
                    <div class="flex gap-2">
                        <img src="../icons/smartphone.png" alt="" class="h-7 w-7">                    
                        <h1 class="my-1 font-bold">CELULAR:</h1>
                    </div>                                         
                    <h1 class="pl-9">959429392</h1>
                </div>

                <div class="text-white justify-start  w-52">
                    <div class="flex gap-2">
                        
                        <h1 class="my-1 font-bold">RED SOCIAL:</h1>
                    </div>                                                       
                    <a class="" href="https://www.facebook.com/profile.php?id=100092244332547&locale=es_LA">
                        <img src="../icons/facebook.png" alt="" class="h-10 w-10">
                    </a>
                </div>

            </div>            

            <div class="grid sm:grid-cols-1 md:grid-cols-2 justify-items-end  border-t-[2px] border-t-neutral-100">

                <div class=" text-white    px-12">
                    <p class="flex">EyM Contadores - Todos los derechos reservados - politicas de privacidad </p>    
                </div>

                <div class=" text-white  justify-center pr-12">
                    Diseño web: eGold design 
                </div>

            </div>           

        </div> 
    
    </div>

</template>

<script>
    export default{
        name:'Footer'
    }

</script>
