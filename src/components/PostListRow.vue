<template>
  <li
    class="px-3 py-4 border-b last:border-0">
    <h3 class="text-lg font-bold leading-tight mb-2">
      {{ post.title }}
    </h3>

    <p class="mb-2">
      {{ post.body }}
    </p>

    <div class="text-right">
      <comment-toggle-button
        :is-active="shouldShowComments"
        @toggle="onCommentsToggle" />
    </div>

    <comment-list
      v-if="shouldShowComments"
      :post="post" />
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
} from 'vue';
import Post from '../interfaces/Post';
import CommentList from './CommentList.vue';
import CommentToggleButton from './CommentToggleButton.vue';

export default defineComponent({
  name: 'PostListRow',

  components: {
    CommentToggleButton,
    CommentList,
  },

  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },

  setup() {
    const shouldShowComments = ref(false);
    const onCommentsToggle = () => {
      shouldShowComments.value = !shouldShowComments.value;
    };

    return {
      shouldShowComments,
      onCommentsToggle,
    };
  },
});
</script>
