import { apiEndpoint } from '../consts/app';
import Comment from '../interfaces/Comment';

export interface FetchCommentsQuery {
  postId?: number;
}
export const fetchComments = async (query: FetchCommentsQuery = {}): Promise<Comment[]> => {
  const url = `${apiEndpoint}/comments`;
  const queryString = new URLSearchParams(query as Record<string, string>);

  const req = await fetch(`${url}?${queryString}`);

  const comments = await req.json();

  return comments;
};

export default null;
