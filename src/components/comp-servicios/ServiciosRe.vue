<template>
    <div class="ms-5 grid grid-cols-1 shadow-2xl  h-[1300px] ">
        <div class="mt-8 h-[150px]  ">
            <h1 class="my-1 flex container titulo italic justify-center hover:text-gray-400 ">Servicios</h1>
            <h1 class="subtitulo no-underline  hover:text-gray-400 text-white  py-5 ">Te ayudamos a crecer</h1>
        </div>

        <div class=" pb-4 grid justify-items-stretch gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:h-[1250px] lg:h-[850px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] 3xl:w-[1700px] 4xl:w-[1800px] ">           
            <ServiciosCard v-for="cards in cards" 
                v-bind:key="cards.titulo1" 
                v-bind:titulo1="cards.titulo1"
                v-bind:imagen="cards.imagen"
                v-bind:titulo2="cards.titulo2" 
                v-bind:descripcion="cards.descripcion" class="" w-full h full>
            </ServiciosCard>          
                      
        </div>
    </div>
  
</template>
  
<script>
    import ServiciosCard from '../base/ServiciosCard.vue'
   
    export default{
    name: 'ServiciosRe',
    components:{
        ServiciosCard
    },
    data(){
        return{
            cards:[
                {                    
                    titulo1:"CONTABLE",
                    titulo2:"CONTABLE",
                    imagen:"img1.jpg",                    
                    descripcion:"Analizamos la situación económica de tu negocio y te ayudamos a optimizar su gestión, supervisando y controlando la contabilidad de tu empresa en todo momento para que puedas tomar las mejores decisiones, enmarcadas dentro del marco de la legislación vigente, NIIF." 
                },    
                {   
                    titulo1:"TRIBUTARIO",
                    titulo2:"TRIBUTARIO",
                    imagen:"img6.jpg",                      
                    descripcion:"Nos enfocamos en elaborar el planeamiento tributario,liquidaciones de los tributos, recuperacion de tributos, devoluciones de saldo a favor, regularizaciones, afrontamos las fiscalizaciones de la Sunat, asesoria tributaria, entre otros."
                },

                {   
                    titulo1:"LABORAL",
                    titulo2:"LABORAL",
                    imagen:"img3.jpg",                     
                    descripcion:"Nos encargamos de gestionar la planilla de salarios de acuerdo a la legislación vigente y los cambios que en ella repercuten."
                },

                {   
                    titulo1:"OTROS",
                    titulo2:"OTROS",
                    imagen:"img5.jpg",                                        
                    descripcion:"Ofrecemos una amplia gama de servicios para ayudar a su negocio a cumplir con las regulaciones y maximizar su eficiencia, nos respalda nuestra amplia experiencia en empresas de diverso rubro como la comercial, minera, pesquera, servicios, comercio internacional, etc."
                }
            ]

        }
    }    
    
   }
  
</script>