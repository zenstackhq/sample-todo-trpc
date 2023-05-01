/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListUncheckedCreateWithoutTodosInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    spaceId: z.string(),
    ownerId: z.string(),
    title: z.string(),
    private: z.boolean().optional(),
  })
  .strict();

export const ListUncheckedCreateWithoutTodosInputObjectSchema = Schema;
