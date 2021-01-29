<template>
  <div class="flex w-screen h-screen p-6 bg-gray-100">
    <Sidebar>
      <Header class="mb-8" />
      <UserList
        :users="users"
        :selected-user="selectedUser"
        @select="onUserSelect" />
    </Sidebar>

    <MainContent>
      MainContent
    </MainContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useUsers from './composables/useUsers';
import usePosts from './composables/usePosts';
import User from './interfaces/User';

import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import UserList from './components/UserList.vue';

export default defineComponent({
  name: 'App',

  components: {
    Sidebar,
    Header,
    MainContent,
    UserList,
  },

  setup() {
    const selectedUser = ref<User|null>(null);
    const { users } = useUsers();
    const { posts } = usePosts(selectedUser);

    const onUserSelect = (user: User) => {
      selectedUser.value = user;
    };

    return {
      users,
      posts,
      selectedUser,
      onUserSelect,
    };
  },
});
</script>
