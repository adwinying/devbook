<template>
  <div class="flex">
    <div class="w-8 mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014
          0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0
          004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd" />
      </svg>
    </div>

    <div class="flex-1 mb-3 text-sm">
      <h5 class="mb-1 font-bold leading-tight">
        {{ comment.name }}
      </h5>
      <p>
        {{ comment.body }}
      </p>
    </div>
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

  computed: {
    truncatedName(): string {
      return this.comment.name.slice(0, 15);
    },
  },
});
</script>
