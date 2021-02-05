<template>
  <div class="mt-2 mx-1">
    <comment-list-row
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import useComments from '../composables/useComments';
import Post from '../interfaces/Post';
import CommentListRow from './CommentListRow.vue';

export default defineComponent({
  name: 'CommentList',

  components: {
    CommentListRow,
  },

  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },

  setup(props) {
    const { comments } = useComments(props.post);

    return {
      comments,
    };
  },
});
</script>
