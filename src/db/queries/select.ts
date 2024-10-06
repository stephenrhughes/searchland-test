import { asc, eq } from 'drizzle-orm';
import { db } from '../index';
import { SelectUser, usersTable } from '../schema';

export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function getUsers(pageNumber = 1, pageSize = 10): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
}>
> {
  const offset = ((pageNumber - 1) * pageSize)
  return db.select().from(usersTable).orderBy(asc(usersTable.id)).limit(pageSize).offset(offset)
}

export async function countUsers(): Promise<number> {
  return (await db.select().from(usersTable)).length
}
