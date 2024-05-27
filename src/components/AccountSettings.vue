<template>
    <div class="container">
      <div class="picture">
        <v-icon class="account-icon">mdi-account-circle</v-icon>
        <v-btn class="change-image">Change Profile Picture</v-btn>
      </div> 
      <form @submit.prevent="submitPost">
        <div>   
          <label for="topic" class="input-header">Username</label>
          <input type="text" id="topic" v-model="post.topic" />
        </div>
        <div>
          <label for="title" class="input-header">E-mail</label>
          <input type="text" id="title" v-model="post.title" />
        </div>
        <div>
          <label for="text" class="input-header">Description</label>
          <textarea id="text" v-model="post.text"></textarea>
        </div>
        <div class="bottom-container">
            <button type="submit">Save</button>
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
      };
    },
    methods: {
      addImage() {
        console.log('Image added', this.post);
      },
      submitPost() {
        console.log('Post submitted:', this.post);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    height: 70%;
    width: 70%;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    border: 1px solid;
  }
  
  .add-header{
    text-align: start;
    margin-bottom: 20px;
    font-size: 1.5vw;
    font-weight: bold;
  }

  .input-header{
    font-size: 1vw;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
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

  .bottom-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
  
  button[type="submit"] {
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 20%;
    height: 50%;
    text-align: center;
    background-color: #D9D9D9;
    font-size: 1vw;
  }

  .account-icon{
    font-size: 5vw;
    margin-bottom: 10px;
  }

  .picture{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }

  </style>
  