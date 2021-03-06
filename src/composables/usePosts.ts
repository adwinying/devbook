import {
  computed,
  ComputedRef,
  ref,
  Ref,
  watch,
} from 'vue';
import User from '../interfaces/User';
import Post from '../interfaces/Post';
import { fetchPosts, FetchPostsQuery } from '../api/post';

interface UsePosts {
  posts: Ref<Post[]>;
  hasNoPosts: ComputedRef<boolean>;
}

export default function usePosts(user: Ref<User|null>): UsePosts {
  const posts = ref<Post[]>([]);

  watch(user, async () => {
    const query: FetchPostsQuery = { userId: user.value?.id };

    posts.value = await fetchPosts(query);
  });

  const hasNoPosts = computed(() => posts.value.length === 0);

  return {
    posts,
    hasNoPosts,
  };
}
