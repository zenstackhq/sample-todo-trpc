/* eslint-disable */
import { z } from 'zod';
import { TodoWhereInputObjectSchema } from './TodoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.TodoListRelationFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    every: z.lazy(() => TodoWhereInputObjectSchema).optional(),
    some: z.lazy(() => TodoWhereInputObjectSchema).optional(),
    none: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  })
  .strict();

export const TodoListRelationFilterObjectSchema = Schema;
