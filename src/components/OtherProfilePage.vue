<template>
    <div class="user-info">
      <div class="username">
        <v-icon class="account-icon">mdi-account-circle</v-icon>
        Username
      </div>
      <div class="buttons" v-if="!isUser">
        <v-btn class="user-button" size="small" variant="outlined" color="#9a1220">Follow</v-btn>
        <v-btn class="user-button" size="small" variant="outlined" color="#9a1220">Message</v-btn>
        <v-btn class="user-button" size="small" variant="outlined" color="#9a1220">Report</v-btn>
      </div>
    </div>
    <div class="post-container">
      <div class="topics">
        <v-btn>Posts</v-btn>
        <v-btn>Comments</v-btn>
        <v-btn>Liked</v-btn>
      </div>
      <v-container>
        <v-row>
          <v-col v-for="(post, index) in posts" :key="index" cols="12">
            <Post
              @postDetails="$emit('post-details')"
              @otherProfile="navigateToOtherProfile"
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
        isUser: false,
        posts: [
          {
            header: 'Biri sürekli denk diyo',
            text: 'bunu nasıl engelleriz',
            postTopic: 'Gündem',
            postOwner: 'kimsinsen',
            postLiked: 45
          },
          {
            header: 'beşiktaş',
            text: 'gene şampiyon',
            postTopic: 'spor',
            postOwner: 'ENBÜYÜKKARTAL',
            postLiked: 12372901731
          }
        ]
      }
    },
    methods: {
      navigateToOtherProfile() {
        this.$router.push('/other-profile')
      }
    }
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
    justify-content: space-evenly;
  }
  
  .account-icon{
    font-size: 5vw;
  }
  
  .username{
    font-size: 1vw;
  }
  
  .user-info {
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
  
  .user-button {
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
  