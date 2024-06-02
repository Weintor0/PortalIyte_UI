<template>
  <div class="add-header">Create Post</div>
  <form @submit.prevent="submitPost">
    <div>
      <label for="topic" class="input-header">Topic</label>
      <v-select v-model="post.topic" color="#9A1220" variant="underlined"></v-select>
    </div>
    <div>
      <label for="title" class="input-header">Title</label>
      <v-text-field v-model="post.title" color="#9A1220" variant="underlined"></v-text-field>
    </div>
    <div>
      <label for="text" class="input-header">Text</label>
      <v-textarea
        class="textarea"
        v-model="post.text"
        color="#9A1220"
        variant="underlined"
      ></v-textarea>
    </div>
    <div class="bottom-container">
      <!--
      <div class="add-images">
        <label>Add images</label>
        <v-icon class="add-icon" @click="addImage">mdi-plus-circle</v-icon>
      </div>-->
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

button[type='submit'] {
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
  height: 50%;
  text-align: center;
  background-color: #d9d9d9;
  font-size: 1vw;
}

.add-icon {
  font-size: 2vw;
}
</style>
