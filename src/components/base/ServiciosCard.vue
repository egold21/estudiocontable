<template>       
    <div class="contenedor border-[2px] border-gray-400 textoparrafo h-[250px] sm:h-[250px] lg:h-[300px] xl:h-[350px]    w-[320px]  sm:w-[320px] lg:w-[400px] xl:w-[550px]">

        <h1 class="">{{props.titulo1}}</h1>            
        <img class="h-[250px] sm:h-[250px] lg:h-[300px] xl:h-[350px]      w-[320px] sm:w-[320px] lg:w-[400px] xl:w-[550px]" v-bind:src="imagen"/>
        <div class="content">                      
            <h2 class="">{{props.titulo2}}</h2>
            <P class="">{{props.descripcion}}</P>
        </div> 

            
    </div>  

</template>

<script>

export default{
    name:'ServiciosCard',
    props:{
        titulo1:{type:String},
        imagen:{type:String},
        titulo2:{type:String, required:false},
        descripcion:{type:String, required:true}
    },

    data(props){
        return {props}
    }
   
}
</script>

<style lang="css" scoped>
    .contenedor{
        margin: 1px auto;
        position: relative;
        overflow: hidden;
        
    }
    .contenedor img{
        
        
        transition: all .5s;
        
        
    }
    .contenedor:hover img{
        transform: scale(1.15);
        opacity:0.7;
        
        
    }
    .contenedor .content{
        background: grba(0,0,0,.7);
        position: absolute;
        top: -100%;
        left: 0;
        text-align: justify;
        height: 100%;
        color: #fff;
        box-sizing: border-box;
    }

    .content h2{
        text-align: center;
        font-size: 25px;
        border-bottom: 1px solid;
        border-color: #ad9cdf;
        padding: 0 10px 20px 10px;
        margin-top: 6%;
        text-shadow: 1px 1px 2px black;
    }
    .contenedor p{
        padding: 0px 10px 10px 10px; 
        border-bottom: 1px solid;
        border-color: #ad9cdf;
        text-shadow: 1px 1px 2px black;       
    }

    .contenedor:hover .content{
        top: 0;
        
    }
    .contenedor h1{
        text-align: center;
        font-size: 25px;
        position:absolute;       
        width: 100%;       
        color: white;
         
        text-shadow: 1px 1px 2px black;
        margin-top: 27%; 
        font-weight:bold      
    }
    .contenedor:hover .h1{
        overflow: hidden;        
    }

</style>