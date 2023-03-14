/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoUncheckedCreateWithoutOwnerInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    listId: z.string(),
    title: z.string(),
    completedAt: z.date().optional().nullable(),
  })
  .strict();

export const TodoUncheckedCreateWithoutOwnerInputObjectSchema = Schema;
