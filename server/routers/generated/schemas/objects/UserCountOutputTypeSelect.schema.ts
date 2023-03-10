/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCountOutputTypeSelect,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    spaces: z.boolean().optional(),
    lists: z.boolean().optional(),
    todos: z.boolean().optional(),
    accounts: z.boolean().optional(),
  })
  .strict();

export const UserCountOutputTypeSelectObjectSchema = Schema;
