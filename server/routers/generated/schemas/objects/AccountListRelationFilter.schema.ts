/* eslint-disable */
import { z } from 'zod';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountListRelationFilter,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    every: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    some: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    none: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  })
  .strict();

export const AccountListRelationFilterObjectSchema = Schema;
