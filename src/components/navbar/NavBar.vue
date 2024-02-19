<template> 
    <div class="bg-indigo-800 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
       
        <div class="flex items-center cursor-pointer">
            <RouterLink :to="{name:'home'}">            
                <span class="text-green-500 text-xl mr-1 flex gap-2">
                    <img src="../../components/icons/logo.png" class="h-12 w-12 " alt="Logo">                  
                    <span class="self-center text-3xl font-bold  dark:text-white text-neutral-100">EyM Contadores</span>
                </span>
            </RouterLink>             
        </div> 


        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i> 
        </span>             
        
        
        <ul class="md:flex md:items-center md:px-0 px-10  md:pb-0 pb-4 mr-32 gap-1 md:static absolute bg-indigo-800  md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0': 'left-[-100%]']">
            <li class="hover3"> 
                <RouterLink
                    :to="{name:'home'}" class="hover4">Incio
                </RouterLink>                    
            </li>

            <li class="hover3"> 
                <RouterLink
                    :to="{name:'nosotros'}" class="hover4">Nosotros
                </RouterLink>       
            </li>


            <li class="hover3"> 
                <RouterLink
                    :to="{name:'servicios'}" class="hover4">Servicios
                </RouterLink>      
            </li>

            <li class="hover3"> 
                <RouterLink
                    :to="{name:'contacto'}" class="hover4">Contacto
                </RouterLink>      
            </li>

            <li class="hover3 "> 
                <RouterLink
                    :to="{name:'blog'}" class="hover4">Blog
                </RouterLink>      
            </li>

        </ul>

    </div>   

</template>

<script>
    import{ref} from 'vue'
    export default{
        name:'NavBar',
        setup(){
            let open=ref(false)
            function MenuOpen(){
                open.value=!open.value
            }
            return{open, MenuOpen}
        }
    } 
</script>

