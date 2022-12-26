<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
    <input :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
</template>
