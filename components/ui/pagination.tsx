"use client";

import { Button } from "./button";
import { useRouter } from "next/navigation";

export function Pagination({
  currentPage,
  totalItems,
  pageSize,
}: {
  currentPage: number;
  totalItems: number;
  pageSize: number;
}) {
  const router = useRouter();

  const handleBack = () => {
    router.push(`/users?page=${currentPage - 1}`);
  };

  const handleNext = () => {
    router.push(`/users?page=${currentPage + 1}`);
  };

  return (
    <div className="flex gap-2 justify-center">
      <Button disabled={currentPage <= 1} onClick={handleBack}>
        Previous
      </Button>
      <Button
        disabled={currentPage * pageSize > totalItems - 1}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}
