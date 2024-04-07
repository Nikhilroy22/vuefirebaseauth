import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCirsKo_3a6y1tLWWKvxUoLW-aTqJLkE0",


  authDomain: "vue1-385bc.firebaseapp.com",


  projectId: "vue1-385bc",


  storageBucket: "vue1-385bc.appspot.com",


  messagingSenderId: "374724488895",


  appId: "1:374724488895:web:e9d8328fd6537aefaa200a"


};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
