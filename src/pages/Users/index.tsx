import { useEffect, type FC } from "react";
import { useUserStore } from "../../store/user-store";
import { UserCard } from "../../components/UserCard";

export const Users: FC = () => {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className="w-full h-full grid gap-4 grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </div>
  );
};
