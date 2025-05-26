import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { IUserDto } from "../types/user.type";
import { getUsers } from "../api/getUsersApi";

interface UserStore {
  users: IUserDto[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    users: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
      set({ loading: true, error: null });

      try {
        const users = await getUsers();
        set({ users, loading: false });
      } catch (err: any) {
        set({ error: err.message, loading: false });
      }
    },
  }))
);
