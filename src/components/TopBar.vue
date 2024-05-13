<template>
  <div class="top-bar">
    <div class="logo">logo</div>
    <v-text-field
      class="search-bar"
      label="Search"
      variant="underlined"
      prepend-inner-icon="mdi-magnify"
      clearable
    ></v-text-field>
    <div class="buttons">
      <v-icon>mdi-plus-box</v-icon>
      <v-icon>mdi-cog</v-icon>
      <v-icon>mdi-bell-outline</v-icon>
      <v-icon>mdi-account</v-icon>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  display: grid;
  grid-template-columns: repeat(4, auto);
  place-content: center;
  justify-content: space-around;
}
</style>
