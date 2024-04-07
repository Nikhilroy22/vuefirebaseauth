<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <span v-if="isLoggedIn"
        >>
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue' // used for conditional rendering
  import { getAuth,onAuthStateChanged, signOut  } from 'firebase/auth'
  
  const isLoggedIn = ref(false)
  let auth;
  // runs after firebase is initialized
 onMounted(() => {
 auth = getAuth();
 onAuthStateChanged(auth, (user) => {
 if (user) {
 isLoggedIn.value = true;
 } else {
 isLoggedIn.value = false;
 }
 });
 });
 const handleSignOut = () => {
 signOut(auth).then(() => {
 });
 router.push('/feed') // 
 };
 
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
