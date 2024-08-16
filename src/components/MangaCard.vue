<script setup>
    const prop = defineProps(['manga']);
    console.log(prop.manga)
</script>

<template>
    <div>
        <div class="container-img">
            <img class="imagemDoCarrossel" :src="prop.manga.images.jpg.image_url" alt=""> 
        </div>

       <p class="text-xl">{{ prop.manga.title }}</p>
    </div>
</template>

<style scoped>
    .container-img{
       
        min-width: 250px;
        max-width: 250px;
        min-height: 300px;
        max-height: 300px;
        overflow: hidden;
    }
    img{
    object-fit: cover;
    width:100%;
    height: 100%; /* Ajuste a altura para 100% do contêiner */
}
</style>