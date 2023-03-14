/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.NestedDateTimeFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    equals: z.date().optional(),
    in: z.date().array().optional(),
    notIn: z.date().array().optional(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z
      .union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeFilterObjectSchema = Schema;
