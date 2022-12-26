<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
    modelValue: String,
    // 自定义修饰符
    modelModifiers: {
        default: () => ({})
    }
})
const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
    let value = (e.target as HTMLInputElement).value
    if (props.modelModifiers?.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}
</script>
<template>
    <input type="text" :value="modelValue" @input="emitValue">
</template>