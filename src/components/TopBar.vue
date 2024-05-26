<template>
  <div class="top-bar">
    <div class="logo" style="display: flex; max-width: 15em; min-width: 5em">
      <v-img
        style="cursor: pointer"
        @click="$router.push('/postcontainer')"
        src="/src/assets/portaliyte-high-resolution-logo-transparent.png"
      ></v-img>
    </div>
    <v-text-field
      v-if="showSearchAndIcons"
      class="search-bar"
      label="Search"
      variant="underlined"
      prepend-inner-icon="mdi-magnify"
      clearable
      hide-details="auto"
      v-model="searchText"
      @keyup.enter="handleEnter"
    ></v-text-field>
    <div v-if="showSearchAndIcons" class="buttons">
      <v-icon class="icon">mdi-plus-box</v-icon>
      <v-icon class="icon">mdi-cog</v-icon>
      <v-icon class="icon">mdi-bell-outline</v-icon>
      <v-icon class="icon">mdi-account</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchText: ''
    }
  },
  props: {
    showSearchAndIcons: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleEnter() {
      const searchParam = this.searchText
      this.searchText = ''
      this.$router.push({ name: 'Search', params: { query: searchParam } })
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
