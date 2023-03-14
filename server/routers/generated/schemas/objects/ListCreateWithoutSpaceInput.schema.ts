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
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutListsInputObjectSchema),
    title: z.string(),
    private: z.boolean().optional(),
    todos: z
      .lazy(() => TodoCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListCreateWithoutSpaceInputObjectSchema = Schema;
