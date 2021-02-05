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

export interface CreateCommentBody {
  postId: number;
  name: string;
  email: string;
  body: string;
}
export const createComment = async (body: CreateCommentBody): Promise<Comment> => {
  const url = `${apiEndpoint}/comments`;

  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  const comment = req.json();

  return comment;
};

export default null;
