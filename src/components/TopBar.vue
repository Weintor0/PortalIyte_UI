<template>
  <div class="top-bar">
    <div class="logo" style="display: flex; max-width: 15em; min-width: 5em">
      <v-img src="/src/assets/portaliyte-high-resolution-logo-transparent.png"></v-img>
    </div>
    <v-text-field
      v-if="isLogin"
      class="search-bar"
      label="Search"
      variant="underlined"
      prepend-inner-icon="mdi-magnify"
      clearable
      hide-details="auto"
    ></v-text-field>
    <div v-if="isLogin" class="buttons">
      <v-icon class="icon">mdi-plus-box</v-icon>
      <v-icon class="icon">mdi-cog</v-icon>
      <v-icon class="icon">mdi-bell-outline</v-icon>
      <v-icon class="icon">mdi-account</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.top-bar {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100%;
  padding: 0.5rem 1.5rem;
}

.logo,
.search-bar,
.buttons {
  margin-left: 3em;
  margin-right: 3em;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: end;
}

.icon {
  margin-left: 1em;
}
</style>
