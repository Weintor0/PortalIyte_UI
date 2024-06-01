<template>
  <div class="register-container">
    <div class="text-fields">
      <v-card class="register-form" max-width="25em" title="Login" variant="outline">
        <v-container>
          <v-text-field
            v-model="email"
            color="#9A1220"
            label="IZTECH Mail Address"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="#9A1220"
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="underlined"
          ></v-text-field>
        </v-container>

        <v-card-actions>
          <v-btn class="button" @click="$emit('succesfully-login')">
            Login <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="button" @click="$emit('register-page')">
            Register <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  data: () => ({
    email: null,
    password: null
  })
}
</script>

<style scoped>
.register-container {
  height: 45vh;
  width: 25vw;
  margin: auto;
  padding: 2em;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
}

.register-form {
  width: 100%;
  padding: 2em;
  box-shadow: none;
}

.button {
  color: white;
  background-color: #9A1220;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border-radius: 5px;
}

.button:hover {
  background-color: #7F0E1A;
}

.v-text-field {
  margin-bottom: 1.5em;
}

:deep(.v-card-title) {
  font-size: 1.5vw;
  font-weight: bold;
}

</style>
