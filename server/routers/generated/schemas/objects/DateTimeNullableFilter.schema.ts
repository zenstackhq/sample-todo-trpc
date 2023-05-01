/* eslint-disable */
import { z } from 'zod';
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.DateTimeNullableFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    equals: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    in: z
      .union([
        z.date().array().optional(),
        z.string().datetime().array().optional(),
      ])
      .nullable(),
    notIn: z
      .union([
        z.date().array().optional(),
        z.string().datetime().array().optional(),
      ])
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

export const DateTimeNullableFilterObjectSchema = Schema;
