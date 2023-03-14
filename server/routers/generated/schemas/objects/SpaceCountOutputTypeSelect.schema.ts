/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceCountOutputTypeSelect,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    members: z.boolean().optional(),
    lists: z.boolean().optional(),
  })
  .strict();

export const SpaceCountOutputTypeSelectObjectSchema = Schema;
