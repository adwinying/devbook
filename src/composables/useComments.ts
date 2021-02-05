import {
  computed,
  ComputedRef,
  onMounted,
  ref,
} from 'vue';
import Post from '../interfaces/Post';
import Comment from '../interfaces/Comment';
import {
  createComment,
  CreateCommentBody,
  fetchComments,
  FetchCommentsQuery,
} from '../api/comment';

interface UseComments {
  comments: ComputedRef<Comment[]>;
  addComment(post: Post, commentBody: string): void;
}

export default function useComments(post: Post): UseComments {
  const numOfCommentsToShow = 3;
  const comments = ref<Comment[]>([]);
  const newComment = ref<Comment|null>(null);

  onMounted(async () => {
    const query: FetchCommentsQuery = { postId: post.id };

    comments.value = await fetchComments(query);
  });

  const displayedComments = computed((): Comment[] => {
    const filteredComments = comments.value.slice(0, numOfCommentsToShow);

    if (newComment.value === null) return filteredComments;

    return [...filteredComments, newComment.value];
  });

  const addComment = async (targetPost: Post, commentBody: string) => {
    const body: CreateCommentBody = {
      postId: targetPost.id,
      name: 'Anonymous',
      email: 'anonymous@example.org',
      body: commentBody,
    };

    newComment.value = await createComment(body);
  };

  return {
    comments: displayedComments,
    addComment,
  };
}
