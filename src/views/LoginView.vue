<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const error = ref(null);
  const router = useRouter();
  
  const login = () => {
    if (username.value === 'user' && password.value === 'password') {
      localStorage.setItem('isAuthenticated', true);
      router.push('/about');
    } else {
      error.value = 'Invalid username or password';
    }
  };
  </script>
  