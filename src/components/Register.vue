<template>
  <div class="register-container">
    <div class="logo">logo</div>
    <div class="text-fields">
      <v-card class="register-form" max-width="25em" title="User Registration">
        <v-container>
          <v-text-field
            v-model="Username"
            color="primary"
            label="Username"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="primary"
            label="IZTECH Mail Address"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password1"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            color="primary"
            label="Password Again"
            placeholder="Enter your password again"
            type="password"
            variant="underlined"
          ></v-text-field>

          <v-checkbox
            v-model="terms"
            color="secondary"
            label="I agree to site terms and conditions"
          ></v-checkbox>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="success">
            Complete Registration

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
  max-width: 30em;
  margin: auto;
  background-color: darkblue;
}

.logo {
  text-align: center;
}

.register-form {
  margin: auto;
}
</style>
