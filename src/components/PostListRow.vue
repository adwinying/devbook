<template>
  <li
    class="px-3 py-4 border-b last:border-0">
    <h3 class="text-lg font-bold leading-tight mb-2">
      {{ post.title }}
    </h3>

    <p>{{ post.body }}</p>
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
