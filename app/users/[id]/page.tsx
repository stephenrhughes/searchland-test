import { Button } from "@/components/ui/button";
import { getUserById } from "@/src/db/queries/select";
import Link from "next/link";

export default async function Page({ params }: { params: { id: number } }) {
  const user = await getUserById(params.id);

  return (
    <div className="flex flex-col gap-3">
      {user.length === 0 && <p>User not found!</p>}
      {user.length > 0 && (
        <>
          <h1 className="text-lg font-bold">User details</h1>
          <span>Name: {user[0].name}</span>
          <span>Age: {user[0].age}</span>
          <span>Email: {user[0].email}</span>
        </>
      )}
      <Link href="/users">
        <Button>Back to list</Button>
      </Link>
    </div>
  );
}
