<script setup>
import axios from "axios";
import { onMounted, ref } from 'vue';
import MangaCard from './MangaCard.vue'
const guardaManga = ref({data:[]})
const guardaTopManga = ref({data:[]})


const scrollLeft = (idCarrossel) =>{
    const carrossel = document.getElementById(idCarrossel);
            carrossel.scrollBy({

                left: - (document.querySelector('.imagemDoCarrossel').clientWidth + 20) , // tamanho da imagem mais o padding
                behavior: 'smooth'
            });
}
const scrollRight = (idCarrossel) =>{
    const carrossel = document.getElementById(idCarrossel);
            carrossel.scrollBy({
                left: document.querySelector('.imagemDoCarrossel').clientWidth + 20, // tamanho da imagem mais o padding
                behavior: 'smooth'
            });
}
async function getTopMangas() {
    try {
        const topManga = await axios.get("https://api.jikan.moe/v4/top/manga")

        guardaTopManga.value = topManga.data;
        console.log(guardaTopManga.value)
    } catch (e) {
        alert("deu erro ai tiu")
    }

}
async function getManga() {

    try {
        const anime = await axios.get("https://api.jikan.moe/v4/manga")

        guardaManga.value = anime.data;
    } catch (e) {
        alert("deu erro ai tiu")
    }


}
onMounted(async () => {
    await getManga();
    await getTopMangas();
});

</script>

<template>
    <main class="px-5 py-4">
        <div>
            <h1 class="text-xl text-azul-nava  font-bold">Melhores Mangás</h1>
            <div class="flex items-center">
                <div v-on:click="()=>{scrollLeft('carrossel-top')}" class="w-30 cursor-pointer">
                    <div class="seta-esquerda">
                        <i class="bi bi-caret-left text-3xl "></i>
                        <i class="bi bi-caret-left-fill text-3xl text-rosa-b"></i>
                    </div>

                </div>

                <div id="carrossel-top" class="flex gap-5 carrosel-top ">
                
                <MangaCard v-bind:key="index"
                v-if="guardaTopManga.data.length > 0"  
                v-for="(item, index) of guardaTopManga.data" :manga="item"></MangaCard>
                
                <div v-else> Sem dados para exibir</div>

               
                </div>
                <div v-on:click="()=>{scrollRight('carrossel-top')}">
                    <div class="seta-direita">
                        <i class="bi bi-caret-right text-3xl"></i>
                        <i class="bi bi-caret-right-fill text-3xl text-rosa-b"></i>
                    </div>

                </div>
            </div>


        </div>
        <div class="flex flex-col" >
            <MangaCard v-bind:key="index"
            v-if="guardaManga.data.length > 0"  
            v-for="(item, index) of guardaManga.data" :manga="item"></MangaCard>
        </div>

    </main>

</template>

<style scoped>
.carrosel-top{
    overflow: scroll;
    scrollbar-width: none; /* Para Firefox */
}

.seta-esquerda :last-child{
    display: none;
}
.seta-esquerda:hover :last-child {
    display: block;
}
.seta-esquerda :first-child{
    display: block;
}
.seta-esquerda:hover :first-child {
    display: none;
}

.seta-direita :last-child{
    display: none;
}
.seta-direita:hover :last-child {
    display: block;
}
.seta-direita :first-child{
    display: block;
}
.seta-direita:hover :first-child {
    display: none;
}
</style>