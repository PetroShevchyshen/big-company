import type { ColumnDef } from "@tanstack/react-table";
import type { IUserDto } from "../types/user.type";

export const userTableColumns: ColumnDef<IUserDto>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: true,
  },
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
  },
  {
    accessorKey: "username",
    header: "Username",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting: true,
  },
];
