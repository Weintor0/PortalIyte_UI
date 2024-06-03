<template>
    <div class="user-info">
      <div class="username">
        <v-icon class="account-icon">mdi-account-circle</v-icon>
        Username
      </div>
      <div class="user-stats">
        <div class="stat">
          <span class="info-label">Followers</span>
          <span class="info-value">502</span>
        </div>
        <div class="stat">
          <span class="info-label">Following</span>
          <span class="info-value">105</span>
        </div>
        <div class="stat">
          <span class="info-label">Posts</span>
          <span class="info-value">{{ posts.length }}</span>
        </div>
      </div>
      <div class="buttons" v-if="!isUser">
        <v-btn :class="{'user-button': !isFollowing, 'toggleOn': isFollowing}" size="small" variant="outlined" color="#9a1220" @click="follow">Follow</v-btn>
        <v-btn class="user-button" size="small" variant="outlined" color="#9a1220" @click="report">Report</v-btn>
      </div>
    </div>
    <div class="search-button-container">
    <div class="search-content">
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'posts'}"
            @click="setActiveButton('posts')"
        >Posts</v-btn>
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'comments'}"
            @click="setActiveButton('comments')"
        >Comments</v-btn>
        <v-btn 
            :class="{'search-button': true, 'active': activeButton === 'likes'}"
            @click="setActiveButton('likes')"
        >Likes</v-btn>
    </div>
  </div>
  <div v-if="activeButton === 'posts'" class="post-container">
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in posts" :key="index" cols="12">
          <Post
            @postDetails="$emit('post-details', post.id)"
            @otherProfile="navigateToOtherProfile()"
            :id="post.id"
            :userId="post.userId"
            :topicId="post.topicId"
            :header="post.header"
            :text="post.text"
            :postTopic="post.postTopic"
            :postOwner="post.postOwner"
            :postLiked="post.postLiked"
            :postCommentCount="post.commentCount"
            :image="post.image"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-if="activeButton === 'comments'" class="">
    <div v-for="(comment, index) in comments" @click="handleCommentClick(comment.post_id)">
      <Comment :key="index" :comment="comment"/>
    </div>
  </div>
  <div v-if="activeButton === 'likes'" class="post-container">
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in liked" :key="index" cols="12">
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
            :image="post.image"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-if="activeButton === 'saved'" class="post-container">
    <v-container>
      <v-row>
        <v-col v-for="(post, index) in saved" :key="index" cols="12">
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
            :image="post.image"
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
      Post,
      Comment
    },
    data() {
      return {
        activeButton: null,
        isUser: false,
        isFollowing: false,
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
      handleCommentClick(postId) {
        this.$router.push('/postdetails/' + postId);
      },
      navigateToOtherProfile() {
        this.$router.push('/other-profile')
      },
      follow() {
        this.isFollowing = !this.isFollowing;
      },
      message() {
        this.$router.push('/message-page')
      },
      report() {
        this.$router.push('/report')
      },
      setActiveButton(button) {
        this.activeButton = button;
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

  .toggleOn{
    background-color: rgba(154, 18, 32, 0.5);
    font-size: 0.5vw;
    margin-left: 10px;
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
  