<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps(['show'])
defineEmits(['close'])
</script>
<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">default header</slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">default body</slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">default footer
                            <button @click="$emit('close')">Ok</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style scoped lang="scss">
.modal-mask{
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.modal-wrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-container{
        width: 300px;
        padding: 10px;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all .3s ease;
        background-color: #fff;
        .modal-header{
            font-size: 20px;
        }
        .modal-body{
            margin: 20px 0;
        }
        .modal-footer{
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>