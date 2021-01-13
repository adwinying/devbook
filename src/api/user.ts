import { apiEndpoint } from '../consts/app';
import User from '../interfaces/User';

export const fetchUsers = async (): Promise<User[]> => {
  const req = await fetch(`${apiEndpoint}/users`);

  const users = await req.json();

  return users;
};

export default null;
