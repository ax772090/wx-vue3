<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps(['todo'])
defineEmits(['remove'])// 需要它，否则浏览器控制台会报警告
</script>
<template>
    <li>{{todo.title}}</li>
    <button @click="$emit('remove')">Remove</button>
</template>