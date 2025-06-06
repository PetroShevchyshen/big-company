import type { IUserDto } from "../types/user.type";

export const getUsers = async (): Promise<IUserDto[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};
