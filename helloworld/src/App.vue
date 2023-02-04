<template>
  <!-- <h1>Listado de posts:</h1>
  <PostContainer />
  <hr>
  <h1>Counter Option API</h1>
  <CounterOption />
  <hr>
  <h1>Counter Composition API</h1>
  <CounterComposition />
  <hr>
  <h1>Example Selective</h1>
  <ExampleSelective />
  <hr>
  <h1>Example For</h1>
  <ExampleFor />
  <hr>
  <h1>Example Bind</h1>
  <ClassBind />
  <hr>
  <h1>Model From</h1>
  <ModelForm />
  <h1>Post List</h1>
  <PostList /> -->
  <h1>Computed Example</h1>
  <ComputedExample />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComputedExample from './components/ComputedExample.vue';
// import PostList from './components/PostList.vue';
// import PostContainer from './components/PostContainer.vue';
// import CounterOption from './components/CounterOption.vue';
// import CounterComposition from './components/CounterComposition.vue';
// import ExampleSelective from './components/ExampleSelective.vue';
// import ExampleFor from './components/ExampleFor.vue';
// import ClassBind from './components/ClassBind.vue';
// import ModelForm from './components/ModelForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    ComputedExample
}
});
</script>

<style>

</style>
