/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserOrderByRelationAggregateInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SpaceUserOrderByRelationAggregateInputObjectSchema = Schema;
