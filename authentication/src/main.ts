import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLPtdQC1oLsSVr2eZ2sLWRY-Z94ZVOGYY",
  authDomain: "curso-vue-bcf48.firebaseapp.com",
  projectId: "curso-vue-bcf48",
  storageBucket: "curso-vue-bcf48.appspot.com",
  messagingSenderId: "543353186986",
  appId: "1:543353186986:web:1b7dd5d46ecbc079273ed3",
  measurementId: "G-T5C1P6CM56"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
