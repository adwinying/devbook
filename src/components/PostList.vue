<template>
  <div class="h-full overflow-y-scroll rounded-lg bg-white">
    <ul>
      <PostListRow
        v-for="post in posts"
        :key="post.id"
        :post="post" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Post from '../interfaces/Post';
import PostListRow from './PostListRow.vue';

export default defineComponent({
  name: 'PostList',

  components: {
    PostListRow,
  },

  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
});
</script>
