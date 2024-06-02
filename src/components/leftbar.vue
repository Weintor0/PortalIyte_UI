<template>
    <div class="sidebar" v-if="showSidebars">
      <div class="new-topics">
        <div class="leftbar-header">Topics</div>
          <div class="new-topics-list">
            <ul>
              <button class="topic-button" v-for="topic in newtopics" :key="topic.id" @click="handleTopicClick(topic)">{{ topic.title }}</button>
            </ul>
          </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = withDefaults(defineProps<{
    showSidebars?: boolean
  }>(), {
    showSidebars: false
  })

  
  const newtopics = ref([
    { id: 1, title: 'Topic 1' },
    { id: 2, title: 'Topic 2' },
    { id: 3, title: 'Topic 3' }, 
    { id: 4, title: 'Topic 4' }, 
    { id: 5, title: 'Topic 5' }, 
    { id: 6, title: 'Topic 6' }, 
    { id: 7, title: 'Topic 7' }, 
    { id: 8, title: 'Topic 8' },  
  ])

  const handleTopicClick = (topic) => {
    router.push('/topic-page')
  }
  
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  
  .new-topics{
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .leftbar-header {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2vw;
    margin-bottom: 20px;
    border-bottom: 2px solid #9a1220;
    font-weight: bold;
  }
  
  ul {
    display: flex;
    font-size: 1vw;
    list-style-type: none;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .topic-button{
    width: 100%;
    text-align: left;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
  }
  
  
  </style>
  