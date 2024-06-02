<template>
  <div>
    <Post
      :header="post.header"
      :text="post.text"
      :postTopic="post.postTopic"
      :postOwner="post.postOwner"
      :postLiked="post.postLiked"
    />
    <div class="comments-section">
      <Comment v-for="(comment, index) in postComments" :key="index" :comment="comment" />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import Comment from './Comment.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

export default {
  components: {
    Post,
    Comment
  },
  data(){
    return {
      post: {
        header: 'header',
        text: 'text',
        postTopic: 'topic',
        postOwner: 'owner',
        postLiked: 3
      },
      postComments: [
        {
          commentOwner: 'User1',
          commentText: 'This is the first comment',
          likes: 2,
          replies: []
        },
        {
          commentOwner: 'User2',
          commentText: 'This is the second comment',
          likes: 1,
          replies: [
            {
              commentOwner: 'User3',
              commentText: 'This is a reply to the second comment',
              likes: 0,
              replies: []
            }
          ]
        }
      ]
    }
  },
  created(){
    console.log(this.$router.value.params.id)
  },
}


// const post = {
//   header: 'header',
//   text: 'text',
//   postTopic: 'topic',
//   postOwner: 'owner',
//   postLiked: 3
// }

// const postComments = ref([
//   {
//     commentOwner: 'User1',
//     commentText: 'This is the first comment',
//     likes: 2,
//     replies: []
//   },
//   {
//     commentOwner: 'User2',
//     commentText: 'This is the second comment',
//     likes: 1,
//     replies: [
//       {
//         commentOwner: 'User3',
//         commentText: 'This is a reply to the second comment',
//         likes: 0,
//         replies: []
//       }
//     ]
//   }
// ])
onMounted(() => {
  console.log(router.currentRoute.value.params.id)
})
</script>

<style scoped>
.comments-section {
  margin-top: 20px;
  padding-left: 10px;
}
</style>
