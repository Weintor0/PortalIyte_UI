<template>
    <div class="sidebar" v-if="showSidebars">
      <div class="new-posts">
        <div class="leftbar-header">New Posts</div>
          <div class="new-posts-list">
            <ul>
              <li v-for="post in newPosts" :key="post.id">{{ post.title }}</li>
            </ul>
        </div>
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

  
  const newPosts = ref([
    { id: 1, title: 'Biri sürekli denk diyo' },
    { id: 2, title: 'beşiktaş' }  
  ])
  
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    border: 1px solid;
    border-radius: 10px;
  }
  
  .new-posts{
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .leftbar-header {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2vw;
    margin-bottom: 10px;
    border-bottom: 1px solid;
    font-weight: bold;
  }
  
  ul {
    font-size: 1vw;
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
  }
  </style>
  