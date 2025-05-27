import type { IPostDto } from "../types/post.type";

export const getPosts = async (): Promise<IPostDto[]> => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};
