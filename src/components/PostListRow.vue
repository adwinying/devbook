<template>
  <li
    class="mb-3">
    <h3 class="text-xl font-bold mb-2">
      {{ post.title }}
    </h3>

    <p>{{ post.body }}</p>

    <hr>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Post from '../interfaces/Post';

export default defineComponent({
  name: 'PostListRow',

  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>
