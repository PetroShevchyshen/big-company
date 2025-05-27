import { useEffect, type FC } from "react";
import { useUserStore } from "../../store/user-store";
import { Table } from "../../components";
import { userTableColumns } from "../../constants/table";

export const Users: FC = () => {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className="w-full h-full">
      {/* {users.map((user) => (
        <UserCard key={user.id} data={user} />
      ))} */}
      <Table data={users} columns={userTableColumns} />
    </div>
  );
};
