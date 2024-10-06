"use client";

import Link from "next/link";
import { DeleteUser } from "./delete-user";
import { SelectUser } from "@/src/db/schema";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TableCell,
} from "@nextui-org/table";
import { useCallback } from "react";
import { Button } from "../ui/button";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

type UserColumns = keyof SelectUser | "actions";

export async function UserTable({ users }: { users: Array<SelectUser> }) {
  const renderCell = useCallback((user: SelectUser, columnKey: UserColumns) => {
    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Link href={`/users/${user.id}`}>
              <Button>View</Button>
            </Link>
            <DeleteUser userId={user.id} />
          </div>
        );
      default:
        return user[columnKey];
    }
  }, []);

  return (
    <Table aria-label="Users table" className="w-[600px]">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users} emptyContent="Add some users to start">
        {(user) => (
          <TableRow key={user.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(user, columnKey as UserColumns)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
