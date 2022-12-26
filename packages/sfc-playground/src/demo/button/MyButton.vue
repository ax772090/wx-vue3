<script setup lang="ts">
import { useAttrs } from 'vue'
import BaseButton from './BaseButton.vue'

const attrs = useAttrs()
console.log('透传下来的：',attrs);

</script>
<template>
    <!-- 只针对单根节点才会透传，如果是多个根节点，就不会，因为它不知道要透传给哪个 -->
    <BaseButton />
</template>