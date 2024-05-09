import { z } from "zod";

export const CreateTransactionSchema = z.object({
  urgency: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  type: z.union([z.literal("income"), z.literal("expense")]),
});

export type CreateTransactionSchemaType = z.infer<
  typeof CreateTransactionSchema
>;
