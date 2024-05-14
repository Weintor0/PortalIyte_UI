<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
</script>

<template>
  <div class="body">
    <div class="top">
      <TopBar isLogin="true" />
    </div>
    <div class="bottom">
      <div class="left">left</div>
      <div class="main"><Login /></div>
      <div class="right">right</div>
    </div>
  </div>
</template>

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

.top {
  background-color: aqua;
}
.left {
  background-color: azure;
}
.right {
  background-color: blueviolet;
}

.right,
.left,
.main {
  padding: 1em;
}
</style>
