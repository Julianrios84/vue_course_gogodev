<template>
  <h1>
    Blog
  </h1>
  <ul>
    <li>
      <router-link :to="{name: 'blogDetail', params: { id: 1} }">Blog #1</router-link>
    </li>
    <li>
      <router-link  :to="{name: 'blogDetail', params: { id: 2} }">Blog #2</router-link>
    </li>
    <li>
      <router-link  :to="{name: 'blogDetail', params: { id: 3} }">Blog #4</router-link>
    </li>
    <li>
      <router-link  :to="{name: 'blogDetail', params: { id: 4} }">Blog #5</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>