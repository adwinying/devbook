import {
  computed,
  ComputedRef,
  onMounted,
  ref,
} from 'vue';
import Post from '../interfaces/Post';
import Comment from '../interfaces/Comment';
import { fetchComments, FetchCommentsQuery } from '../api/comment';

interface UseComments {
  comments: ComputedRef<Comment[]>;
}

export default function useComments(post: Post): UseComments {
  const numOfCommentsToShow = 3;
  const comments = ref<Comment[]>([]);

  onMounted(async () => {
    const query: FetchCommentsQuery = { postId: post.id };

    comments.value = await fetchComments(query);
  });

  const displayedComments = computed(() => comments.value
    .slice(0, numOfCommentsToShow));

  return {
    comments: displayedComments,
  };
}
