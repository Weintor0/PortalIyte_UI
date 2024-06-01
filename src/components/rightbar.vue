<template>
    <div class="sidebar" v-if="showSidebars">
      <div class="top-post-of-week">
        <div class="rightbar-header">New Posts</div>
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
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' }, 
    { id: 4, title: 'Post 4' }, 
    { id: 5, title: 'Post 5' }, 
    { id: 6, title: 'Post 6' }, 
    { id: 7, title: 'Post 7' }, 
    { id: 8, title: 'Post 8' },  
  ])
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  
  .top-post-of-week {
    padding: 10px;
  }

  .rightbar-header {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2vw;
    margin-bottom: 20px;
    border-bottom: 2px solid #9a1220;
    font-weight: bold;
  }

  .content {
    font-size: 1vw;
  }

  ul {
    font-size: 1vw;
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
  }
  
  </style>
  