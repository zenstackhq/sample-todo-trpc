/* eslint-disable */
import { z } from 'zod';
import { SpaceCreateNestedOneWithoutListsInputObjectSchema } from './SpaceCreateNestedOneWithoutListsInput.schema';
import { UserCreateNestedOneWithoutListsInputObjectSchema } from './UserCreateNestedOneWithoutListsInput.schema';
import { TodoCreateNestedManyWithoutListInputObjectSchema } from './TodoCreateNestedManyWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.ListCreateInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    space: z.lazy(() => SpaceCreateNestedOneWithoutListsInputObjectSchema),
    owner: z.lazy(() => UserCreateNestedOneWithoutListsInputObjectSchema),
    title: z.string(),
    private: z.boolean().optional(),
    todos: z
      .lazy(() => TodoCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListCreateInputObjectSchema = Schema;
