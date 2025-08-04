"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";

import mockData from "../constants/data.json";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

type User = {
  id: number;
  username: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  role: string;
};

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span>ID</span>,
  }),
  columnHelper.accessor("username", {
    cell: (info) => info.getValue(),
    header: () => <span>Username</span>,
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
  columnHelper.accessor("age", {
    cell: (info) => info.getValue(),
    header: () => <span>Age</span>,
  }),
  columnHelper.accessor("gender", {
    cell: (info) => info.getValue(),
    header: () => <span>Gender</span>,
  }),
  columnHelper.accessor("role", {
    cell: (info) => info.getValue(),
    header: () => <span>Role</span>,
  }),
  columnHelper.accessor((row) => row.address.city, {
    id: "city",
    cell: (info) => info.getValue(),
    header: () => <span>City</span>,
  }),
  columnHelper.accessor((row) => row.address.country, {
    id: "country",
    cell: (info) => info.getValue(),
    header: () => <span>Country</span>,
  }),
];

export default function ReactTable() {
  const [data] = useState<User[]>(() => [...mockData.users]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleChange = (event: SelectChangeEvent) => {
    const columnId = event.target.value;
    if (columnId) {
      setSorting([{ id: columnId, desc: false }]);
    } else {
      setSorting([]);
    }
  };

  console.log(table.getState());
  return (
    <Box className="w-full mx-auto px-4 pt-10">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sorting.length ? sorting[0].id : ""}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="username">Username</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="age">Age</MenuItem>
          <MenuItem value="city">City</MenuItem>
          <MenuItem value="country">Country</MenuItem>
          <MenuItem value="role">Role</MenuItem>
        </Select>
      </FormControl>

      <Box className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-left">
          <thead className="bg-gray-100 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-sm font-semibold cursor-pointer select-none"
                    // onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/* {header.column.getIsSorted() === "asc" && " 🔼"}
                    {header.column.getIsSorted() === "desc" && " 🔽"} */}
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

      {/* Pagination Controls */}
      <Box className="flex items-center justify-between mt-4 gap-4">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>
        <span>
          Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
          {table.getPageCount()}
        </span>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
