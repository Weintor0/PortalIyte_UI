<template>
    <div class="search-button-container">
        <div class="search-content">
            <v-btn 
                :class="{'search-button': true, 'active': activeButton === 'posts'}"
                @click="setActiveButton('posts')"
            >Posts</v-btn>
            <v-btn 
                :class="{'search-button': true, 'active': activeButton === 'topics'}"
                @click="setActiveButton('topics')"
            >Topics</v-btn>
            <v-btn 
                :class="{'search-button': true, 'active': activeButton === 'users'}"
                @click="setActiveButton('users')"
            >Users</v-btn>
        </div>
    </div>
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
    name: "SearchButtons",
    components: {
        Post
    },
    data() {
        return {
            activeButton: null,
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
        setActiveButton(button) {
            this.activeButton = button;
        }
    }
}
</script>

<style>
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
    font-weight: bold;
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

.post-container {
  background-color: #9a1220;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

:deep(.v-btn__content) {
  font-weight: 500;
}
</style>
