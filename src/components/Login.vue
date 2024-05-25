<template>
  <div class="register-container">
    <div class="logo">
      <v-img src="/src/assets/iyte-logo-eng.png"></v-img>
    </div>
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
export default {
  data: () => ({
    email: null,
    password: null
  })
}
</script>

<style scoped>
.register-container {
  max-width: 30em;
  margin: auto;
}

.logo {
  text-align: center;
}

.register-form,
.button {
  margin: auto;
}

.button {
  color: rgb(154, 18, 32);
}
</style>
