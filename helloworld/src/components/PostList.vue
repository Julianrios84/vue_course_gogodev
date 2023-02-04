<template>
  <div class="container">
    <PostDetail v-for="(elem, index) in info" :key="index" :title="elem.title" :content="elem.content" @sayHi="showAlert" />
  </div>
</template>

<script setup lang="ts">
import PostDetail from './PostDetail.vue';

interface IPost {
  title: string,
  content: string
}

let info: Array<IPost> = [{
  title: 'Title #1',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda iste ipsum pariatur reprehenderit cum, libero nobis consequatur alias consequuntur numquam laborum dolorum omnis ipsa nesciunt non animi accusamus doloribus.'
},{
  title: 'Title #2',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda iste ipsum pariatur reprehenderit cum, libero nobis consequatur alias consequuntur numquam laborum dolorum omnis ipsa nesciunt non animi accusamus doloribus.'
},{
  title: 'Title #3',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda iste ipsum pariatur reprehenderit cum, libero nobis consequatur alias consequuntur numquam laborum dolorum omnis ipsa nesciunt non animi accusamus doloribus.'
},{
  title: 'Title #4',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda iste ipsum pariatur reprehenderit cum, libero nobis consequatur alias consequuntur numquam laborum dolorum omnis ipsa nesciunt non animi accusamus doloribus.'
},{
  title: 'Title #5',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda iste ipsum pariatur reprehenderit cum, libero nobis consequatur alias consequuntur numquam laborum dolorum omnis ipsa nesciunt non animi accusamus doloribus.'
}];

function showAlert(msg: string) {
  alert(msg)
}

</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>