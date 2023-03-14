/* eslint-disable */
import { z } from 'zod';
import { ListCountOutputTypeSelectObjectSchema } from './ListCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCountOutputTypeArgs,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    select: z.lazy(() => ListCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ListCountOutputTypeArgsObjectSchema = Schema;
