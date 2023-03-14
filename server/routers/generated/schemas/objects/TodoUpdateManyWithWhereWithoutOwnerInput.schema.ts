/* eslint-disable */
import { z } from 'zod';
import { TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutTodosInputObjectSchema } from './TodoUncheckedUpdateManyWithoutTodosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoUpdateManyWithWhereWithoutOwnerInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => TodoScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TodoUpdateManyMutationInputObjectSchema),
      z.lazy(() => TodoUncheckedUpdateManyWithoutTodosInputObjectSchema),
    ]),
  })
  .strict();

export const TodoUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
