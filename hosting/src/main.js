import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


// const firebaseConfig = {
//     apiKey: "AIzaSyCDsYqlmzMxcT1RasTU4Qt0nHdPGuZ6eCw",
//     authDomain: "geschichte-interactive-poster.firebaseapp.com",
//     databaseURL: "https://geschichte-interactive-poster-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "geschichte-interactive-poster",
//     storageBucket: "geschichte-interactive-poster.appspot.com",
//     messagingSenderId: "872529669655",
//     appId: "1:872529669655:web:a09ed96b59b807faa33652"
//   };