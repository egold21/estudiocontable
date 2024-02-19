<template>
    <div class="flex flex-col items-center mx-auto border-2 border-gray-400 w-[350px] sm:w-[500px] rounded-2xl mb-12 shadow-2xl mt-[120px] ">
        <div class=" w-full imagen bg-cover h-[600px] sm:h-[600px] ">
            <!-- <img class="relative h-full w-full object-cover object-center" src="../../assets/imagenes/imagen20.jpg" alt=""> -->
        </div>
        
            <div class="flex flex-col place-items-center absolute container pt-6 h-[600px]  ">

                <h1 class="inline mb-2    font-poppins text-white text-3xl text-star">¿TIENES DUDAS?</h1>
                <h1 class="inline mb-4   font-poppins text-white text-3xl text-star">CONTACTANOS</h1>

                <form class="flex flex-col place-items-center absolute container pt-28 h-[600px] sm:h[600px]  " ref="form" @submit.prevent="sendEmail">

                    <label class="text-white  w-[300px] sm:w-[400px]">Nombre o razon social:</label>                        
                    <input class=" my-2 h-8 w-[300px] sm:w-[400px] pl-4 rounded-xl" type="text" name="name" placeholder="Ingrese nombre o razon social">

                    <label class="text-white w-[300px] sm:w-[400px]">Telefono:</label>                        
                    <input class=" my-2 h-8 w-[300px] sm:w-[400px] pl-4 rounded-xl" type="text" name="telefono" placeholder="Ingrese número de telefono">
                    
                    <label class="text-white w-[300px] sm:w-[400px]">Email:</label>                        
                    <input class=" my-2 h-8 w-[300px] sm:w-[400px] pl-4 rounded-xl" type="email"  name="email" placeholder="Ingrese email">
                    
                    <label class="text-white w-[300px] sm:w-[400px]">Mensaje:</label> 
                    <textarea class="my-2 h-28 w-[300px] sm:w-[400px] p-4 rounded-xl" placeholder="Ingrese el mensaje" name="mensaje" id="" cols="30" rows="10"></textarea>       
                    
                    <!-- <button type="submit" class="border-2 my-4 rounded-lg bg-blue-600 text-white hover:bg-blue-800 font-bold py-2 px-10">Enviar</button> -->


                    <input type="submit" class="border-2 my-4 rounded-lg bg-blue-600 text-white hover:bg-blue-800  py-2 px-4 sm:py-2"  value="ENVIAR MENSAJE" >

                    <input type="hidden" name="_next" value="http://localhost:5173/">
                    <input type="hidden" name="_capcha" value="false">
                    
                </form>


            </div>      
        
    </div>
  
</template>

<script>
    import emailjs from '@emailjs/browser';

    export default{
        name:'Contacto',
        data(){
            return{
                name:'',
                telefono:'',
                email:'',
                mensaje:''
            }
        },

        methods:{
            sendEmail(e){
                try{
                    emailjs.sendForm('service_dd3xx5c', 'template_48ugq0i', e.target, 'OP1EQ8_b-uKqvp3DQ', {
                    name: this.name,
                    telefono:this.telefono,
                    email: this.email,
                    mensage: this.mensaje
                    })
                }catch(err){
                    if (err instanceof ReferenceError) {
                    alert( "JSON Error: " + err.message );
                    } else {
                    throw err; // rethrow
                    }
                }
                //Reset form field
                this.name = ''
                this.telefono=''
                this.email = ''
                this.mensaje = ''
            }
        }        
    }
    
</script>



 