<template>
  <v-card class="mx-auto border" variant="flat">
    <v-card-title style="cursor: pointer" @click="$emit('post-details', id)">{{ header }}</v-card-title>
    <img v-if="image" :src="image" alt="Post Image" style="max-width: 100%; height: auto;" />
    <v-card-text class="py-2">
      {{ text }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <v-list-item-title>{{ postTopic }}</v-list-item-title>

        <v-list-item-subtitle style="cursor: pointer" @click="$emit('other-profile')">{{ postOwner }}</v-list-item-subtitle>
        
        <template v-slot:append>
          <div class="justify-self-end" style="margin-right: 5px">
            <v-icon class="me-1" icon="mdi-comment"></v-icon>
            <span class="subheading me-2">{{ postCommentCount }}</span>
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
import { id } from 'vuetify/locale';

export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    userId: {
      type: Number,
      default: -1
    },
    topicId: {
      type: Number,
      default: -1
    },
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
    },
    postCommentCount: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
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
