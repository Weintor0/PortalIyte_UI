<template>
  <div class="post-container">
    <div class="topics">
      <v-btn>Topic 1</v-btn>
      <v-btn>Topic 2</v-btn>
      <v-btn>Topic 3</v-btn>
      <v-btn>Topic 4</v-btn>
    </div>
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts" :key="index" cols="12">
          <Post
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
      posts: [
        {
          header: 'Biri sürekli denk diyo',
          text: 'bunu nasıl engelleriz',
          postTopic: 'Gündem',
          postOwner: 'skicijojuk2006',
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
  justify-content: space-between;
}

:deep(.v-btn__content) {
  font-weight: 500;
}
</style>
