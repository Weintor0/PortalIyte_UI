<template>
  <div class="body">
    <div class="top">
      <TopBar :isLogin="router.currentRoute.value.name == 'PostContainer'" />
    </div>

    <div class="bottom">
      <div class="left-container"></div>

      <div class="main-container">
        <RouterView
          @registerPage="goRegisterPage()"
          @succesfullyLogin="goSuccessfullyLoginPage()"
          @loginPage="goLoginPage()"
        ></RouterView>
      </div>

      <div class="right-container"></div>
    </div>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import TopBar from './components/TopBar.vue'

const router = useRouter()

function goSuccessfullyLoginPage() {
  router.push('/postcontainer')
}

function goLoginPage() {
  router.push('/')
}

function goRegisterPage() {
  router.push('/register')
}
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
