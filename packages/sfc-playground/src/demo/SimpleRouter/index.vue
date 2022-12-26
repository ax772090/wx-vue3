<script setup lang="ts">
import { computed, ref } from 'vue';
import About from './About.vue'
import Home from './Home.vue'
import NotFound from './404.vue'

const map = {
    '/':Home,
    '/about':About
}

const curViewPath = ref('#/')
window.addEventListener('hashchange',()=>{
    curViewPath.value = window.location.hash
})
const curView = computed(()=>{
    return map[curViewPath.value.slice(1)] || NotFound
})
</script>
<template>
    <a href="#/">Home</a>|
    <a href="#/about">About</a>|
    <a href="#/other">404</a>
    <component :is="curView"></component>
</template>