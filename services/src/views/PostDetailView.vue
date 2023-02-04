<template>
  <h1>Post Detail</h1>
  <div class="post-container">
    <div class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <router-link :to="{ name: 'PostList' }" class="link">Volver atrás</router-link>
  </div>
</template>

<script setup lang="ts">
  import PostService from '@/services/PostServices';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const service = new PostService()
  const post = service.getPost()

  onMounted(async () => {
    const route = useRoute()
    let paramId = route.params.id;
    await service.fetchById(paramId);
  });
</script>

<style scoped lang="scss">
.post-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.post-card {
  padding: 25px;
  width: 750px;
  border-radius: 15px;
  border: 1ox solid #ccc;
}

.link {
  margin-top: 25px;
  color: $primaryColor;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
}
</style>