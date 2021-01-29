import { apiEndpoint } from '../consts/app';
import Post from '../interfaces/Post';

export interface FetchPostsQuery {
  userId?: number;
}
export const fetchPosts = async (query: FetchPostsQuery = {}): Promise<Post[]> => {
  const url = `${apiEndpoint}/posts`;
  const queryString = new URLSearchParams(query as Record<string, string>);

  const req = await fetch(`${url}?${queryString}`);

  const posts = await req.json();

  return posts;
};

export default null;
