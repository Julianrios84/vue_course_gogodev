<template>
  <ul>
    <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
  </ul>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';

interface ICountry {
  code: string;
  name: string;
}

let countries: Ref<Array<ICountry>> = ref([
  {
    code: 'es',
    name: 'Spain'
  },
  {
    code: 'fr',
    name: 'France'
  },
  {
    code: 'en',
    name: 'UK'
  },
  {
    code: 'it',
    name: 'Italy'
  },
  {
    code: 'pt',
    name: 'Portugal'
  }
])

// let countries: Ref<Array<string>> = ref([
//   'Spain', 'France', 'UK', 'Italy', 'Portugal'
// ])

</script>
<style scoped>
  
</style>

