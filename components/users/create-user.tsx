"use client"

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createUserAction } from "@/app/actions";
import { UserSchema } from "@/types/types";
import toast from "react-hot-toast";
import { InsertUser } from "@/src/db/schema";

export function CreateUser() {

  const clientAction = async (formData: FormData) => {
    // Make new user object
    const newUser = {
      name: formData.get("name"),
      age: Number(formData.get("age")),
      email: formData.get("email")
    }

    const result = UserSchema.safeParse(newUser)
    if (!result.success) {
      const errorMessage = result.error.issues.map((issue) => `${issue.path[0]}: ${issue.message}`).join(" ")
      toast.error(errorMessage)
      return
    } 
    
    try {
      await createUserAction(result.data as InsertUser)
      toast.success("User created!")
    } catch (e: unknown) {
      toast.error((e as Error).message)
    }
  }

  return (
    <form action={clientAction}>
      <div className="flex flex-col gap-3 max-w-10xl">
        <div className="flex gap-3">
          <Label title="Name" className="min-w-10">Name</Label>
          <Input name="name" />
        </div>
        <div className="flex gap-3">
          <Label title="Age" className="min-w-10" >Age</Label>
          <Input name="age"  />
        </div>
        <div className="flex flex-row gap-3">
          <Label title="Email" className="min-w-10" >Email</Label>
          <Input name="email" type="email" />
        </div>
      </div>
      <Button color="primary" className="mt-3" type="submit">Add user</Button>
    </form>
  );
}
