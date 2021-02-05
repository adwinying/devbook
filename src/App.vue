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
import { computed, defineComponent, ref } from 'vue';
import useUsers from './composables/useUsers';
import usePosts from './composables/usePosts';
import User from './interfaces/User';

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
    const selectedUser = ref<User|null>(null);
    const { users } = useUsers();
    const { posts, hasNoPosts } = usePosts(selectedUser);

    const isUserNotSelected = computed(() => selectedUser.value === null);

    const onUserSelect = (user: User) => {
      selectedUser.value = user;
    };

    return {
      users,
      posts,
      isUserNotSelected,
      hasNoPosts,
      selectedUser,
      onUserSelect,
    };
  },
});
</script>
