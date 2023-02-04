<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input v-model="message" type="text" />
    <button @click="handleClick">Di Hola</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, Ref } from "vue";

const props = defineProps({
  title: String,
  content: String,
});

const emit = defineEmits(["sayHi"]);

let message: Ref<string> = ref("");
const handleClick = () => {
  emit("sayHi", message.value);
};

</script>

<style scoped>
.post {
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: antiquewhite;
  margin: 10px;
  padding: 10px;
}
</style>
