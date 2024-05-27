<template>
    <div class="sidebar" v-if="showSidebars">
      <div class="top-post-of-week">
        <div class="rightbar-header">Top Post of the Week</div>
        <div class="content">{{ topPost.title }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const props = withDefaults(defineProps<{
    showSidebars?: boolean
  }>(), {
    showSidebars: false
  })
  
  const topPost = ref({
    title: 'beşiktaş'
  })
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    border: 1px solid;
    border-radius: 10px;
  }
  
  .top-post-of-week {
    padding: 10px;
  }

  .rightbar-header {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2vw;
    margin-bottom: 10px;
    border-bottom: 1px solid;
    font-weight: bold;
  }

  .content {
    font-size: 1vw;
  }
  
  </style>
  