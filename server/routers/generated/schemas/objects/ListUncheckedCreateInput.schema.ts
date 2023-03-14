/* eslint-disable */
import { z } from 'zod';
import { TodoUncheckedCreateNestedManyWithoutListInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListUncheckedCreateInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    spaceId: z.string(),
    ownerId: z.string(),
    title: z.string(),
    private: z.boolean().optional(),
    todos: z
      .lazy(() => TodoUncheckedCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListUncheckedCreateInputObjectSchema = Schema;
