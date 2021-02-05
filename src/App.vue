<template>
  <div class="flex w-screen h-screen p-6 bg-gray-200">
    <Sidebar>
      <Header class="mb-8" />
      <UserList
        :users="users"
        :selected-user="selectedUser"
        @select="onUserSelect" />
    </Sidebar>

    <MainContent>
      <div v-if="isUserNotSelected">
        <h3 class="py-5 text-xl font-bold text-center">
          Select a user to view posts.
        </h3>
      </div>

      <div v-else-if="hasNoPosts">
        <h3 class="py-5 text-xl font-bold text-center">
          User has no posts.
        </h3>
      </div>

      <PostList
        v-else
        :posts="posts" />
    </MainContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUsers from './composables/useUsers';
import usePosts from './composables/usePosts';

import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import UserList from './components/UserList.vue';
import PostList from './components/PostList.vue';

export default defineComponent({
  name: 'App',

  components: {
    Sidebar,
    Header,
    MainContent,
    UserList,
    PostList,
  },

  setup() {
    const {
      users,
      selectedUser,
      isUserNotSelected,
      onUserSelect,
    } = useUsers();

    const {
      posts,
      hasNoPosts,
    } = usePosts(selectedUser);

    return {
      users,
      selectedUser,
      isUserNotSelected,
      onUserSelect,

      posts,
      hasNoPosts,
    };
  },
});
</script>
