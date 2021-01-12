<template>
  <div class="p-3 w-3/4 flex-1">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainContent',
});
</script>
