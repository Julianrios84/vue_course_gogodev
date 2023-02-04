<template>
  <div>
    <h1>Hola Mundo</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
  console.log("Mounted")
}),
onUpdated(() => {
  console.log("Updated")
}),



</script>

<style scoped>

</style>