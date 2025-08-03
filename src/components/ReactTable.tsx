"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import mockData from "../constants/data.json";
import React from "react";
import { Box } from "@mui/material";

const columnHelper = createColumnHelper<any>(); // You can replace `any` with your actual data type

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span>ID</span>,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor("email", {
    id: "email",
    cell: (info) => (
      <span className="text-cyan-600 italic">{info.getValue()}</span>
    ),
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor("phone", {
    cell: (info) => info.getValue(),
    header: () => <span>Phone</span>,
  }),
];

export default function ReactTable() {
  const [data] = React.useState(() => [...mockData]);
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box className="w-full max-w-6xl mx-auto px-4 pt-10">
      <Box className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-left">
          <thead className="bg-gray-100 sticky top-0 z-10 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className=" px-6 py-3 text-sm font-semibold"
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
          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}
