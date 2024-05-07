<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="top">TOP</div>
  <div class="bottom">
    <div class="left">left</div>
    <div class="main">main</div>
    <div class="right">right</div>
  </div>
</template>

<style scoped>
.top {
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
}

.bottom {
  display: flex;
}

.left,
.right,
.main {
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left,
.right {
  min-width: 15%;
}

.main {
  min-width: 70%;
  background-color: orange;
}
</style>
