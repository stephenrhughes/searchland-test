"use client";

import { deleteUserAction } from "@/app/actions";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

export function DeleteUser({ userId }: { userId: number }) {
  const onDeleteClicked = async () => {
    try {
      await deleteUserAction(userId);
    } catch (e: unknown) {
      toast.error((e as Error).message);
    }
  };

  return (
    <Button className="bg-red-700 dark:bg-red-300" onClick={onDeleteClicked}>
      Delete
    </Button>
  );
}
