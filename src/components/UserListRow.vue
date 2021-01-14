<template>
  <li
    class="flex mb-1 px-2 py-1
    items-center rounded cursor-pointer hover:bg-green-100 active:bg-green-400"
    :class="{ 'bg-green-300': isActive }"
    @click="onUserClick">
    <img
      class="rounded-full w-10 h-10 mr-2"
      :src="profileImgPath"
      :alt="user.name">
    <span>{{ user.username }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import User from '../interfaces/User';

export default defineComponent({
  name: 'UserListRow',

  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: false,
    },
  },

  emits: [
    'click',
  ],

  computed: {
    profileImgPath(): string {
      return `http://placekitten.com/200/200?image=${this.user.id}`;
    },
  },

  methods: {
    onUserClick() {
      this.$emit('click', this.user);
    },
  },
});
</script>
