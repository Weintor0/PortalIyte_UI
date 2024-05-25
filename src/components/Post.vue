<template>
  <v-card class="mx-auto border" variant="flat">
    <v-card-title>{{ header }}</v-card-title>
    <v-card-text class="py-2">
      {{ text }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <v-list-item-title>{{ postTopic }}</v-list-item-title>

        <v-list-item-subtitle>{{ postOwner }}</v-list-item-subtitle>

        <template v-slot:append>
          <div class="justify-self-end" style="margin-right: 5px">
            <v-icon class="me-1" icon="mdi-comment"></v-icon>
          </div>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{ postLiked }}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'Header'
    },
    text: {
      type: String,
      default: 'Text'
    },
    postTopic: {
      type: String,
      default: 'Topic'
    },
    postOwner: {
      type: String,
      default: 'Post Owner'
    },
    postLiked: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.v-card-actions {
  padding: 0;
}

.border {
  border: 2px solid #9a1220 !important;
}
</style>
