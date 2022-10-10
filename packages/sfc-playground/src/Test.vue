<template>
    <div class="wrap">
        test
        <p>{{count}}</p>
    </div>
</template>
<script setup lang="ts">
import { ref ,reactive} from 'vue'
const count = ref(0)

</script>
<style scoped>
.wrap {
    color: pink;
}
</style>