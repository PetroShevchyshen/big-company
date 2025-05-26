import type { FC } from "react";
import type { IUserDto } from "../../types/user.type";

interface UserCardProp {
  data: IUserDto;
}

export const UserCard: FC<UserCardProp> = ({ data }) => {
  const { email, id, name, username } = data;
  return (
    <div className="bg-slate-800 p-2 rounded-lg ring-1 ring-slate-700 text-white hover:bg-slate-700 cursor-pointer">
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};
