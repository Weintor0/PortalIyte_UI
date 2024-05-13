<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <div class="body">
    <div class="top">
      <TopBar />
    </div>
    <div class="bottom">
      <div class="left">left</div>
      <div class="main">main</div>
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
</style>
