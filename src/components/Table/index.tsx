import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
  type ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-700 text-sm text-left dark:text-white">
        <thead className="dark:bg-slate-800 bg-slate-300 dark:text-slate-300 uppercase text-xs">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-2 cursor-pointer select-none hover:bg-slate-700 transition"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-slate-800">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="dark:hover:bg-slate-800 hover:bg-slate-300 transition cursor-pointer active:bg-slate-200 dark:active:bg-slate-700"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
