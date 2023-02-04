<template>
  <div class="post-card">
    <h3>Titulo</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae eius ipsam mollitia perspiciatis veritatis officia. Facere ullam doloremque quo nemo et, molestias dicta quas in ad deleniti exercitationem labore.  </p>
    <PostButton/>
  </div>
</template>
<script lang="ts" setup>
import PostButton from './PostButton.vue';
</script>
<style scoped>
.post-card {
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>