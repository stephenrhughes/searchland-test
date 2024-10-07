## Searchland Technical Test

This is a Next.js app, built with the [Next.js and Supabase Starter Kit](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

### Requirements
- [x] Create a repo / monorepo with a typescript react application and backend. (Can be server side or client side rendering) See requirements below.
- [x] Create a basic user table
- [x] Create the ability to add a user
- [x] List all the users (must have pagination)
- [x] Allow deleting of a user
- [x] Create a user profile page when clicking on a row in the table and display info about the user
- [x] Send us a link to your GitHub repo for us to review
- [x] Everything must be in typescript
- [x] Use [Drizzle](https://orm.drizzle.team/)
- [ ] Use tRPC
- [x] Use Tailwind


### Key Points

All changes can be seen in [this commit](https://github.com/stephenrhughes/searchland-test/commit/0413a4acb8fe19dd77b66ce6f7f5ef4e18c6537e) 

1. Supabase selected as database given it's fast setup time
2. Drizzle ORM used. See [src/db/schema.ts](./src/db/schema.ts) for DB schema.
See [src/db/queries](./src/db//queries/) for DB queries.
3. User table created and [migrations](./supabase/migrations/) applied to Supabase.
4. User table page created [here](./app/users/page.tsx)
5. Client Components for users table page [here](./components/users/)
6. Add user handled by [create-user.tsx](./components/users/create-user.tsx) and Server Action
7. Pagination handled by [pagination.tsx](./components/ui/pagination.tsx)
8. Deleting of user handled by [delete-user.tsx](./components/users/delete-user.tsx) and Server Action
9. User details page [here](./app/users/[id]/page.tsx)

### Other libraries used

1. `react-hot-toast` used for notifications to user
2. `nextjs-ui` table component used for users table
3. `zod` used for data validation
