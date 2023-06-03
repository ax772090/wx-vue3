<script setup lang="ts">
import { ref,computed, watch } from 'vue'
const obj = {
    firstName: 'w',
    secondName: 'x'
}
const fullName = computed(()=> obj.firstName + obj.secondName)
setTimeout(() => {
    obj.firstName = 'wwww'
}, 1000);
console.log(fullName.value);// wx

</script>

<template>
    <h1>{{fullName}}</h1>
    <!-- <div>{{fullName}}</div> -->
</template>