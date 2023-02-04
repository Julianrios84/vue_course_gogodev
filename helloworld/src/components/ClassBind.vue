<template>
  <!-- <p :class="{'danger': hasError}">
    El mensaje se ha enviado sactifactoriamente.
  </p> -->
  <p :style="{backgroundColor: '#ccc', color: color}">
    El mensaje se ha enviado sactifactoriamente.
  </p>
  <button @click="handleClick">Cambiar color</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// let hasError = true;
let color = ref('#fff');
const handleClick = () => color.value = '#ff0000';
</script>

<style scoped>
.danger {
  color: red;
}
</style>