<template>
  <ul>
    <UserListRow
      v-for="user in users"
      :key="user.id"
      :user="user"
      :is-active="isUserActive(user)"
      @click="onUserClick" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import User from '../interfaces/User';
import UserListRow from './UserListRow.vue';

export default defineComponent({
  name: 'UserList',

  components: {
    UserListRow,
  },

  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true,
    },

    selectedUser: {
      type: Object as PropType<User|null>,
      required: true,
    },
  },

  emits: [
    'select',
  ],

  methods: {
    isUserActive(user: User) {
      if (this.selectedUser === null) return false;

      return user.id === this.selectedUser.id;
    },

    onUserClick(user: User) {
      this.$emit('select', user);
    },
  },
});
</script>
