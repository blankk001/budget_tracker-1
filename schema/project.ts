import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  userId: z.string(),
});

export type CreateProductSchema = z.infer<
  typeof CreateProductSchema
>;
