<template>
  <div class="flex w-screen h-screen p-6 bg-gray-100">
    <Sidebar>
      <Header class="mb-8" />
    </Sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',

  components: {
    Sidebar,
    Header,
  },
});
</script>
