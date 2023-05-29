/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutListsInputObjectSchema } from './UserCreateNestedOneWithoutListsInput.schema';
import { TodoCreateNestedManyWithoutListInputObjectSchema } from './TodoCreateNestedManyWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCreateWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    title: z.string(),
    private: z.boolean().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutListsInputObjectSchema),
    todos: z
      .lazy(() => TodoCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListCreateWithoutSpaceInputObjectSchema = Schema;
