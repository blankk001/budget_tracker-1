import { z } from "zod";

export const CreateTransactionSchema = z.object({
  amount: z.coerce.number().positive().multipleOf(0.01),
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  date: z.coerce.date(),
  category: z.string(),
  type: z.union([z.literal("income"), z.literal("expense"), z.literal("projectNote"), z.literal("outstandingTask")]),
  urgency: z.union([z.literal("low"), z.literal("medium"), z.literal("high"), z.literal("")]).optional(),
});

export type CreateTransactionSchemaType = z.infer<
  typeof CreateTransactionSchema
>;
