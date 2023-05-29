/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.NestedDateTimeNullableFilter,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    equals: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    in: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    notIn: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    lt: z.union([z.date().optional(), z.string().datetime().optional()]),
    lte: z.union([z.date().optional(), z.string().datetime().optional()]),
    gt: z.union([z.date().optional(), z.string().datetime().optional()]),
    gte: z.union([z.date().optional(), z.string().datetime().optional()]),
    not: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NestedDateTimeNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedDateTimeNullableFilterObjectSchema = Schema;
