<template>
  <div>
    {{ comment.id }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Comment from '../interfaces/Comment';

export default defineComponent({
  name: 'CommentListRow',

  props: {
    comment: {
      type: Object as PropType<Comment>,
      required: true,
    },
  },
});
</script>
