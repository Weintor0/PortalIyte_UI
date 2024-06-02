<template>
  <div class="user-info">
    <div class="username">
      <v-icon class="account-icon" @click="handleAccount">mdi-account-circle</v-icon>
      {{ username }}
    </div>
    <div class="user-stats">
      <div class="stat">
        <span class="info-label">Followers</span>
        <span class="info-value">{{ followers }}</span>
      </div>
      <div class="stat">
        <span class="info-label">Following</span>
        <span class="info-value">{{ following }}</span>
      </div>
      <div class="stat">
        <span class="info-label">Posts</span>
        <span class="info-value">{{ posts.length }}</span>
      </div>
    </div>
  </div>
  <div class="search-button-container">
    <div class="search-content">
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'posts'}"
            @click="setActiveButton('posts')"
        >Posts</v-btn>
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'topics'}"
            @click="setActiveButton('topics')"
        >Comments</v-btn>
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'users'}"
            @click="setActiveButton('users')"
        >Likes</v-btn>
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'saved'}"
            @click="setActiveButton('saved')"
        >Saved</v-btn>
    </div>
  </div>
  <div v-if="activeButton === 'posts'" class="post-container">
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts" :key="index" cols="12">
          <Post
            @postDetails="$emit('post-details')"
            :id="post.id"
            :userId="post.userId"
            :topicId="post.topicId"
            :header="post.header"
            :text="post.text"
            :postTopic="post.postTopic"
            :postOwner="post.postOwner"
            :postLiked="post.postLiked"
            :postCommentCount="post.commentCount"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: "SearchButtons",
  components: {
    Post
  },
  data() {
    return {
      activeButton: null,
      isUser: false,
      username: "",
      followers: 0,
      following: 0,
      // posts: [
      //   {
      //     header: 'Biri sürekli denk diyo',
      //     text: 'bunu nasıl engelleriz',
      //     postTopic: 'Gündem',
      //     postOwner: 'kimsinsen',
      //     postLiked: 45
      //   },
      //   {
      //     header: 'beşiktaş',
      //     text: 'gene şampiyon',
      //     postTopic: 'spor',
      //     postOwner: 'ENBÜYÜKKARTAL',
      //     postLiked: 12372901731
      //   }
      // ]
      posts: [],
    }
  },
  async created(){
    const user = await this.getUserDetails('https://portal-iyte-be.onrender.com/api/user/' + 4);
    this.username = user.username;
    this.followers = user.followerCount;
    this.following = user.followingCount;
    const posts = await this.getPostsOfUser('https://portal-iyte-be.onrender.com/api/post/user/' + 4);
    posts.forEach(post => {
      this.posts.push({
        id: post.postId,
        userId: post.user.userId,
        topicId: post.topic.topicId,
        header: post.title,
        text: post.content,
        postTopic: post.topic.name,
        postOwner: post.user.username,
        postLiked: post.likeCount,
        postCommentCount: post.commentCount
      });
    })
  },
  methods: {
    handleAccount() {
      this.$router.push('/account-settings');
    },
    setActiveButton(button) {
        this.activeButton = button;
    },
    async getUserDetails(fetchDestination){
      let returnedUser;
      await fetch(fetchDestination, {
        method: 'GET',
        redirect: 'follow',
      })
        .then(response => {
          if (!response.ok) {
            // const errorMessages = await response.text();
            // alert(errorMessages);
            throw new Error(response.text());
          }
          return response.json();
        })
        .then(data => {
          console.log('User fetched successfully:', data);
          returnedUser = data;
        })
        .catch(error => {
          console.error('An error occurred during fetching user:', error);
        });
      return returnedUser;
    },
    async getPostsOfUser(fetchDestination) {
      let returnedPosts;
      await fetch(fetchDestination, {
        method: 'GET',
        redirect: 'follow',
      })
        .then(response => {
          if (!response.ok) {
            // const errorMessages = await response.text();
            // alert(errorMessages);
            throw new Error(response.text());
          }
          return response.json();
        })
        .then(data => {
          console.log('Posts fetched successfully:', data);
          returnedPosts = data;
        })
        .catch(error => {
          console.error('An error occurred during fetching posts:', error);
        });
      return returnedPosts;
    },
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

.account-icon{
  font-size: 5vw;
}

.username{
  font-size: 1vw;
  width: 40%;
}

.user-info {
  margin-bottom: 10px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  background-color: rgba(128, 128, 128, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #9a1220;
}

.buttons {
  display: flex;
  align-items: center;
}

.user-button {
  margin-left: 10px;
  font-size: 0.5vw;
}

.user-stats{
  display: flex;
  align-items: center;
}

.stat{
  display: flex;
  flex-direction: column-reverse;
  margin-right: 15px; 
}

.info-value{
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
}

.search-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
}

.search-content {
    display: flex;
    width: 50%;
    justify-content: space-between;
    gap: 20px; 
}

.search-button {
    display: flex;
    flex: 1;
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px; 
    font-size: 1vw;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}   

.search-button:hover {
    transform: scale(1.05); 
}

.search-button:active {
    transform: scale(1); 
}

.active {
    background-color: rgba(154, 18, 32, 0.8);
}
</style>
