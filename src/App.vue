<template>
  <div class="flex w-screen h-screen p-6 bg-gray-100">
    <Sidebar>
      <Header class="mb-8" />
    </Sidebar>

    <MainContent>
      <div
        v-for="user in users"
        :key="user.id">
        {{ user.name }}
      </div>
    </MainContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUsers from './composables/useUsers';

import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';

export default defineComponent({
  name: 'App',

  components: {
    Sidebar,
    Header,
    MainContent,
  },

  setup() {
    const { users } = useUsers();

    return {
      users,
    };
  },
});
</script>
