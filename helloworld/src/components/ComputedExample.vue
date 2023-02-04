<template>
  <div>
    <label v-font-size>Subtotal</label>
    <input type="number" v-model="subtotal">
    <h3>Total impuestos: {{ totalVat }} ({{ vat }}%)</h3>
  </div>
</template>

<script lang="ts" setup>
import { computed, Ref, ref } from "vue";

const vat = 21;
let subtotal: Ref<number> = ref(0)
const totalVat = computed(() => (vat * subtotal.value) / 100)

</script>

<style scoped></style>
