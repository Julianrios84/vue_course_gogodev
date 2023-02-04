<template>
  <h3>{{ counter }}</h3>
  <button @click="addCounter">Incrementar</button>
</template>

<!-- Si expesificamos el setup en el script no tenemos que definir el defineComponent, name, setup(), return -->
<script lang="ts" setup>
import { /*defineComponent,*/ ref, Ref } from 'vue';
// export default defineComponent({
  // name: 'CounterComposition',
  // setup() {
    // Variables
    let counter: Ref = ref(0)
    // Methods
    const addCounter = (): void => { counter.value++ }
    // Returns
    // return {  counter, addCounter }
  // }
// })
</script>
