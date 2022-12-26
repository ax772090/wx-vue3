<script setup lang="ts">
import { inject } from 'vue';

const mes = inject('message')
</script>
<template>
    <p>
        Message to grand child: {{ mes }}
    </p>
</template>