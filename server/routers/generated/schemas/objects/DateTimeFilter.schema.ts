/* eslint-disable */
import { z } from 'zod';
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.DateTimeFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    equals: z.union([z.date().optional(), z.string().datetime().optional()]),
    in: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    notIn: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    lt: z.union([z.date().optional(), z.string().datetime().optional()]),
    lte: z.union([z.date().optional(), z.string().datetime().optional()]),
    gt: z.union([z.date().optional(), z.string().datetime().optional()]),
    gte: z.union([z.date().optional(), z.string().datetime().optional()]),
    not: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NestedDateTimeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DateTimeFilterObjectSchema = Schema;
