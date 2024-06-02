<template>
  <div class="add-header">Create Post</div>
  <form @submit.prevent="submitPost">
    <div>
      <label for="topic" class="input-header">Topic</label>
      <input type="text" id="topic" v-model="post.topic" />
    </div>
    <div>
      <label for="title" class="input-header">Title</label>
      <input type="text" id="title" v-model="post.title" />
    </div>
    <div>
      <label for="text" class="input-header">Text</label>
      <textarea id="text" v-model="post.text"></textarea>
    </div>
    <div class="bottom-container">
      <div class="add-images">
        <label>Add images</label>
        <v-icon class="add-icon" @click="addImage">mdi-plus-circle</v-icon>
      </div>
      <v-btn class="button" type="submit">Post</v-btn>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        topic: '',
        title: '',
        text: ''
      }
    }
  },
  methods: {
    addImage() {
      console.log('Image added', this.post)
    },
    submitPost() {
      console.log('Post submitted:', this.post)
    }
  }
}
</script>

<style scoped>
.add-header {
  text-align: start;
  margin-bottom: 20px;
  font-size: 1.5vw;
  font-weight: bold;
}

.input-header {
  font-size: 1vw;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type='text'],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  height: 100px;
}

.bottom-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.add-images {
  width: 20%;
  display: flex;
  font-size: 1vw;
  flex-direction: column;
}

.add-images button {
  width: 30px;
  height: 30px;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.button {
  color: white;
  background-color: #9a1220;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border-radius: 5px;
}

.add-icon {
  font-size: 2vw;
}
</style>
