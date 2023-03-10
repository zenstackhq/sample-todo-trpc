/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoMinAggregateInputType,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    listId: z.literal(true).optional(),
    title: z.literal(true).optional(),
    completedAt: z.literal(true).optional(),
  })
  .strict();

export const TodoMinAggregateInputObjectSchema = Schema;
