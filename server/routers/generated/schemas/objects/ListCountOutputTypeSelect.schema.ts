/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCountOutputTypeSelect,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    todos: z.boolean().optional(),
  })
  .strict();

export const ListCountOutputTypeSelectObjectSchema = Schema;
