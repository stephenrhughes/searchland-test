import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().trim().min(1, {
    message: "User must have a name.",
  }).max(100, {
    message: "User name cannot be more than 100 characters."
  }),
  age: z.number().min(1).max(120),
  email: z.string().trim().min(1).max(200)
})