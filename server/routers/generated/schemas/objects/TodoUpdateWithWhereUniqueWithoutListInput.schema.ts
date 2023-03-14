/* eslint-disable */
import { z } from 'zod';
import { TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutListInputObjectSchema } from './TodoUpdateWithoutListInput.schema';
import { TodoUncheckedUpdateWithoutListInputObjectSchema } from './TodoUncheckedUpdateWithoutListInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoUpdateWithWhereUniqueWithoutListInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TodoUpdateWithoutListInputObjectSchema),
      z.lazy(() => TodoUncheckedUpdateWithoutListInputObjectSchema),
    ]),
  })
  .strict();

export const TodoUpdateWithWhereUniqueWithoutListInputObjectSchema = Schema;
