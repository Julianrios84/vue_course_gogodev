<template>
  <h2 v-if="age < 18">Eres menor de edad</h2>
  <h2 v-else>Eres mayor de edad</h2>
</template>
<script lang="ts" setup>
  let age = 10;
</script>
<style scoped>
  
</style>