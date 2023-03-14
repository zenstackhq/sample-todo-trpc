/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.NestedBoolFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
      .optional(),
  })
  .strict();

export const NestedBoolFilterObjectSchema = Schema;
