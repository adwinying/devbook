import {
  ref,
  onMounted,
  Ref,
  computed,
  ComputedRef,
} from 'vue';
import { fetchUsers } from '../api/user';
import User from '../interfaces/User';

interface UseUsers {
  users: Ref<User[]>;
  selectedUser: Ref<User|null>;
  isUserNotSelected: ComputedRef<boolean>;
  onUserSelect(user: User): void;
}

export default function useUsers(): UseUsers {
  const users = ref<User[]>([]);
  const selectedUser = ref<User|null>(null);

  onMounted(async () => {
    users.value = await fetchUsers();
  });

  const isUserNotSelected = computed(() => selectedUser.value === null);

  const onUserSelect = (user: User) => {
    selectedUser.value = user;
  };

  return {
    users,
    selectedUser,
    isUserNotSelected,
    onUserSelect,
  };
}
