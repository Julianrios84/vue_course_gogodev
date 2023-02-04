<template>
  <h1>
    Blog Details: {{ blogId }}
  </h1>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';

let blogId: Ref<string> = ref<string>('');

onMounted(() => {
  const route = useRoute()
  blogId.value = route.params.id as string;
}),
</script>

<style scoped>

</style>