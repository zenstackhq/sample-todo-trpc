/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutTodosInputObjectSchema } from './UserCreateNestedOneWithoutTodosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoCreateWithoutListInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutTodosInputObjectSchema),
    title: z.string(),
    completedAt: z.date().optional().nullable(),
  })
  .strict();

export const TodoCreateWithoutListInputObjectSchema = Schema;
