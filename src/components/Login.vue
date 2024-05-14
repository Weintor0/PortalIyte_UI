<template>
  <div class="register-container">
    <div class="logo">logo</div>
    <div class="text-fields">
      <v-card class="register-form" max-width="25em" title="Login">
        <v-container>
          <v-text-field
            v-model="email"
            color="primary"
            label="IZTECH Mail Address"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="underlined"
          ></v-text-field>
        </v-container>

        <v-card-actions>
          <v-btn color="success" class="button">
            Login <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn color="success" class="button">
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
  background-color: darkblue;
}

.logo {
  text-align: center;
}

.register-form,
.button {
  margin: auto;
}
</style>
