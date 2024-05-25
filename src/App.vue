<template>
  <div class="body">
    <div class="top">
      <TopBar :isLogin="loginState == 'succesfully-login'" />
    </div>

    <div class="bottom">
      <div class="left-container"></div>

      <div class="main-container">
        <div class="login-component" v-if="loginState == 'login-page'">
          <Login
            @registerPage="loginState = 'register-page'"
            @succesfullyLogin="(loginState = 'succesfully-login'), console.log(loginState)"
          />
        </div>

        <div class="register-component" v-if="loginState == 'register-page'">
          <Register @loginPage="loginState = 'login-page'" />
        </div>

        <div class="main-component" v-if="loginState == 'succesfully-login'">
          aaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>

      <div class="right-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import { ref } from 'vue'

const loginState = ref('login-page')
</script>

<style scoped>
.body {
  display: grid;
  grid-template-rows: 1fr 8fr;
  height: 100%;
}

.bottom {
  display: grid;
  grid-template-columns: 2fr 7fr 2fr;
}

.right-container,
.left-container,
.main-container {
  padding: 1em;
}
</style>
