<template>
  <div class="container">
    <h1>Firebase</h1>
    <div class="row">
      <div class="mb-3 col-md-12">
        <label for="staticEmail" class="form-label">Email</label>
          <input type="text"  class="form-control" id="staticEmail" v-model="email" >
      </div>
      <div class="mb-3 col-md-12">
        <label for="inputPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword" v-model="password">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="authUser">Confirm identity</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

let email = ref('');
let password = ref('')

const authUser = async () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("Exito!")
    })
    .catch((error) => {
      alert("Error: " + error.message)
    });
}

</script>

<style scoped>

</style>