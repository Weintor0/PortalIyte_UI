<template>
  <v-card class="mx-auto border" variant="flat">
    <v-card-title class="post-header" style="cursor: pointer" @click="$emit('post-details', id)">{{ header }}</v-card-title>
    <img v-if="image" :src="image" alt="Post Image" style="max-width: 100%; height: auto;" />
    <v-card-text class="py-2">
      {{ text }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <v-list-item-title>{{ postTopic }}</v-list-item-title>

        <v-list-item-subtitle style="cursor: pointer" @click="handleOtherProfile">{{ postOwner }}</v-list-item-subtitle>
        
        <template v-slot:append>
          <div class="justify-self-end" style="margin-right: 5px" @click="handleComment">
            <v-icon class="me-1" icon="mdi-comment"></v-icon>
            <span class="subheading me-2">{{ postCommentCount }}</span>
          </div>
          <div class="justify-self-end" @click="handleLike">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{ likeCount }}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import { id, th } from 'vuetify/locale';
import VueCookies from 'vue-cookies'
import { useRouter } from 'vue-router'

export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    userId: {
      type: Number,
      default: -1
    },
    topicId: {
      type: Number,
      default: -1
    },
    header: {
      type: String,
      default: 'Header'
    },
    text: {
      type: String,
      default: 'Text'
    },
    postTopic: {
      type: String,
      default: 'Topic'
    },
    postOwner: {
      type: String,
      default: 'Post Owner'
    },
    postLiked: {
      type: Number,
      default: 0
    },
    postCommentCount: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      likeCount: this.postLiked,
      isLiked: false,
      router: useRouter()
    }
  },
  methods: {
    mounted(){
      console.log("adasd",this.postLiked)
    },
    async handleLike() {
      if (this.isLiked) {
        await fetch(`https://portaliyte-jq7n5xwowq-uc.a.run.app/api/post/unlike`, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            postId: this.id,
            userId: VueCookies.get('user')
          })
        })
        this.likeCount--;
        this.isLiked = false;
      } else {
        await fetch(`https://portaliyte-jq7n5xwowq-uc.a.run.app/api/post/like`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            postId: this.id,
            userId: VueCookies.get('user')
          })
        })
        this.likeCount++;
        this.isLiked = true;
      }
    },
    handleComment() {
      this.$emit('post-details', this.id)
    },
    handleOtherProfile() {
      console.log("adasd",this.userId)
      this.router.push(`/other-profile/${this.userId}`)
    }
  }
}
</script>

<style scoped>
.v-card-actions {
  padding: 0;
}

.border {
  border: 2px solid #9a1220 !important;
}

.post-header{
  font-size: 1.5vw;
}
</style>
