"use server";

import prisma from "@/lib/prisma";
import {
  CreateProductSchema
} from "@/schema/project";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export async function CreateTransaction(form: CreateProductSchema) {
  const parsedBody = CreateProductSchema.safeParse(form);
  if (!parsedBody.success) {
    throw new Error(parsedBody.error.message);
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const { name, description, userId } = parsedBody.data;

  // NOTE: don't make confusion between $transaction ( prisma ) and prisma.transaction (table)

  await prisma.project.create({
      data: {
        userId: user.id,
        name: name || "",
        description: description || "",
      },
    })
    .catch((e) => {
      throw new Error(e);
    });

}
