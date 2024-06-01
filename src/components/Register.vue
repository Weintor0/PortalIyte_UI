<template>
  <div class="register-container">
    <div class="logo">
      <v-img src="/src/assets/iyte-logo-eng.png"></v-img>
    </div>
    <div class="text-fields">
      <v-card class="register-form" max-width="25em" title="Register" variant="flat">
        <v-container>
          <v-text-field
            v-model="Username"
            color="#9A1220"
            label="Username"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="#9A1220"
            label="IZTECH Mail Address"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="phone"
            color="#9A1220"
            label="Phone Number"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password1"
            color="#9A1220"
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            color="#9A1220"
            label="Password Again"
            placeholder="Enter your password again"
            type="password"
            variant="underlined"
          ></v-text-field>

          <v-checkbox
            v-model="terms"
            color="#9A1220"
            label="I agree to site terms and conditions"
          ></v-checkbox>
        </v-container>

        <v-card-actions>
          <v-btn @click="$emit('login-page')" class="button">
            Complete Registration
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-btn @click="$emit('login-page')" class="button">
            Login
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Username: null,
    email: null,
    password1: null,
    password2: null,
    terms: false
  })
}
</script>

<style scoped>
.register-container {
  height: 65vh;
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


:deep(.v-card-title) {
  font-size: 1.5vw;
  font-weight: bold;
}
</style>
