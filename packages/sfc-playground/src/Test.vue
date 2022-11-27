
<script setup lang="ts">
// import { ref, reactive, onBeforeMount, onMounted } from 'vue'
import { useMouse } from './hooks/mouse'
const { x, y } = useMouse()

</script>
<template>
    {{x}},{{y}}
</template>