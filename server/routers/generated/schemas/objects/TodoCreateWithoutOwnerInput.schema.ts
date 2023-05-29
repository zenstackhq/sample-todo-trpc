/* eslint-disable */
import { z } from 'zod';
import { ListCreateNestedOneWithoutTodosInputObjectSchema } from './ListCreateNestedOneWithoutTodosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoCreateWithoutOwnerInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    title: z.string(),
    completedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    list: z.lazy(() => ListCreateNestedOneWithoutTodosInputObjectSchema),
  })
  .strict();

export const TodoCreateWithoutOwnerInputObjectSchema = Schema;
