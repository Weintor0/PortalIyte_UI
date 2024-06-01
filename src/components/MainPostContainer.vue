<template>
  <div class="post-container">
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

:deep(.v-btn__content) {
  font-weight: 500;
}
</style>
