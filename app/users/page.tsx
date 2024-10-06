import React from "react";
import { countUsers, getUsers } from "@/src/db/queries/select";
import { CreateUser } from "@/components/users/create-user";
import { UserTable } from "@/components/users/user-table";
import { Pagination } from "@/components/ui/pagination";

const PAGE_SIZE = 10;

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const users = await getUsers(currentPage, PAGE_SIZE);
  const totalUsers = await countUsers();

  return (
    <>
      <div className="flex flex-row gap-6">
        <CreateUser />
        <div className="flex flex-col gap-2">
          <UserTable users={users} />
          <p>Total users: {totalUsers}</p>
          <Pagination
            currentPage={currentPage}
            totalItems={totalUsers}
            pageSize={PAGE_SIZE}
          />
        </div>
      </div>
    </>
  );
}
