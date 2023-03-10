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
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    list: z.lazy(() => ListCreateNestedOneWithoutTodosInputObjectSchema),
    title: z.string(),
    completedAt: z.date().optional().nullable(),
  })
  .strict();

export const TodoCreateWithoutOwnerInputObjectSchema = Schema;
