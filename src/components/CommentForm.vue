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
      <textarea
        v-model="commentBody"
        class="w-full p-1 mb-2 border rounded"
        rows="3"
        placeholder="New Comment..." />

      <div class="flex justify-end">
        <button
          class="flex items-center px-2 py-1 text-xs text-white bg-green-600 rounded"
          @click.prevent="onCommentSubmit">
          <svg
            class="inline w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0
              100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clip-rule="evenodd" />
          </svg>
          Add Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CommentForm',

  emits: ['comment'],

  setup(_, { emit }) {
    const commentBody = ref('');

    const resetComment = () => {
      commentBody.value = '';
    };

    const onCommentSubmit = () => {
      if (commentBody.value === '') {
        // eslint-disable-next-line no-alert
        alert('Please enter a comment.');
        return;
      }

      emit('comment', commentBody.value);
      resetComment();
    };

    return {
      commentBody,
      onCommentSubmit,
    };
  },
});
</script>
