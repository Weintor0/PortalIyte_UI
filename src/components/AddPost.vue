<template>
  <div class="container">
    <div class="add-header">Create Post</div>
    <form @submit.prevent="submitPost">
      <div>
        <label for="issue" class="input-header">Topic</label>
        <select id="issue" v-model="post.topic">
          <option value="spam">Spam</option>
          <option value="harassment">Harassment</option>
          <option value="misinformation">Misinformation</option>
          <option value="other">Other</option>
        </select>
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
        <button type="submit">Post</button>
      </div>
    </form>
  </div>
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
.container {
  height: 70%;
  width: 70%;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: rgba(128, 128, 128, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

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
  background: #fff;
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

select {
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1vw;
  background-color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select:focus {
  outline: none;
  border-color: #aaa;
}

select option {
  padding: 10px;
}
</style>
