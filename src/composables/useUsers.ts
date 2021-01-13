import { ref, onMounted, Ref } from 'vue';
import { fetchUsers } from '../api/user';
import User from '../interfaces/User';

interface UseUsers {
  users: Ref<User[]>;
}

export default function useUsers(): UseUsers {
  const users = ref<User[]>([]);

  onMounted(async () => {
    users.value = await fetchUsers();
  });

  return {
    users,
  };
}
