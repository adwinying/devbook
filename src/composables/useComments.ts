import { ref, Ref, watch } from 'vue';
import Post from '../interfaces/Post';
import Comment from '../interfaces/Comment';
import { fetchComments, FetchCommentsQuery } from '../api/comment';

interface UseComments {
  comments: Ref<Comment[]>;
}

export default function useComments(post: Ref<Post|null>): UseComments {
  const comments = ref<Comment[]>([]);

  watch(post, async () => {
    const query: FetchCommentsQuery = { postId: post.value?.id };

    comments.value = await fetchComments(query);
  });

  return {
    comments,
  };
}
