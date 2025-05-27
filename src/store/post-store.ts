import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { IPostDto } from "../types/post.type";
import { getPosts } from "../api/getPostApi";

interface PostStore {
  posts: IPostDto[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>()(
  devtools((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPosts: async () => {
      set({ loading: true, error: null });

      try {
        const posts = await getPosts();
        set({ posts, loading: false });
      } catch (err: any) {
        set({ error: err.message, loading: false });
      }
    },
  }))
);
