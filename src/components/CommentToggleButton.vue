<template>
  <a
    href="#"
    class="text-green-500 hover:underline"
    @click.prevent="onButtonClick">
    <svg
      class="inline w-4 mb-1 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2
          2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0
          100 2h3a1 1 0 100-2H6z"
        clip-rule="evenodd" />
    </svg>
    {{ buttonText }}
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentToggleButton',

  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['toggle'],

  setup(props, { emit }) {
    const onButtonClick = () => {
      emit('toggle');
    };

    const buttonText = computed(() => (props.isActive
      ? 'Hide Comments'
      : 'Show Comments'
    ));

    return {
      buttonText,
      onButtonClick,
    };
  },
});
</script>
