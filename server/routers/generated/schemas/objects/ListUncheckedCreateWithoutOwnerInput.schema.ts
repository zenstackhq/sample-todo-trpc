/* eslint-disable */
import { z } from 'zod';
import { TodoUncheckedCreateNestedManyWithoutListInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListUncheckedCreateWithoutOwnerInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    spaceId: z.string(),
    title: z.string(),
    private: z.boolean().optional(),
    todos: z
      .lazy(() => TodoUncheckedCreateNestedManyWithoutListInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListUncheckedCreateWithoutOwnerInputObjectSchema = Schema;
