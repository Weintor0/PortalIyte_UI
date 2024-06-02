<template>
    <div class="topic-info">
      <div class="topicname">
        <v-icon class="topic-icon">mdi-account-circle</v-icon>
        {{ topicName }}
      </div>
    </div>
    <div class="post-container">
      <v-container>
        <v-row>
          <v-col v-for="(post, index) in posts" :key="index" cols="12">
            <Post
              @postDetails="$emit('post-details')"
              :header="post.header"
              :text="post.text"
              :postTopic="post.postTopic"
              :postOwner="post.postOwner"
              :postLiked="post.postLiked"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import Post from './Post.vue'
  
  export default {
    components: {
      Post
    },
    data() {
      return {
        istopic: false,
        topicName: '',
        posts: [
          {
            header: 'Biri sürekli denk diyo',
            text: 'bunu nasıl engelleriz',
            postTopic: 'Gündem',
            postOwner: 'kimsinsen',
            postLiked: 45
          }
        ]
      }
    },
    created() {
    if (this.posts.length > 0) {
      this.topicName = this.posts[0].postTopic;
        }
    },
  }
  </script>
  
  <style scoped>
  .post-container {
    background-color: #9a1220;
    border-radius: 10px;
  }
  
  .topics {
    padding: 16px;
    padding-bottom: 0px;
    display: flex;
    justify-content: space-between;
  }
  
  .topic-icon{
    font-size: 5vw;
  }
  
  .topicname{
    font-size: 1vw;
  }
  
  .topic-info {
    margin-bottom: 10px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #9a1220;
    padding: 10px;
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    background-color: rgba(128, 128, 128, 0.1);
  }
  
  .buttons {
    display: flex;
    align-items: center;
  }
  
  .topic-button {
    margin-left: 10px;
    font-size: 0.5vw;
  }
  
  :deep(.v-btn__content) {
    font-weight: 500;
  }
  
  :deep(.v-btn__content) {
    color: black;
  }
  </style>
  