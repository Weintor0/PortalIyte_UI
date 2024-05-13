<template>
  <div class="top-bar">
    <div class="logo">logo</div>
    <v-text-field
      class="search-bar"
      label="Search"
      variant="underlined"
      clearable
      prepend-inner-icon="mdi-delete"
      density="compact"
    ></v-text-field>
    <div class="buttons">buttons</div>
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
</style>
