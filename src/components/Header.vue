<script setup>
import axios from 'axios';

</script>

<template>
    <header class="bg-azul-nava p-4 flex justify-between items-center  ">
        <a class="cursor-pointer flex items-center gap-5 ">
            <img src="/logo.jpg" alt="">
            <h1 class="font-bold text-3xl text-bege-l" >|</h1>
            <h1 class="text-3xl text-bege-l font-bold hover:scale-110 hover:transition-all transition-all">
                Bentri<span class="text-rosa-b">List</span>
            </h1>

        </a>
        <nav>
            <ul class="flex gap-5 ">
                <li class="text-xl font-bold text-bege-l hover:opacity-80 hover:scale-105 hover:transition-all transition-all ">
                    <RouterLink to="/">Mais Lidos</RouterLink>
                </li>
                <li class="text-xl font-bold text-bege-l hover:opacity-80 hover:scale-105 hover:transition-all transition-all ">
                    <RouterLink to="/">Sua Lista</RouterLink>
                </li>
                <li class="text-xl font-bold text-bege-l hover:opacity-80 hover:scale-105 hover:transition-all transition-all ">
                    <RouterLink to="/">Generos</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
img{
    width: 80px;
    border-radius:100%;
}
a {
    text-decoration: none;
}
</style>