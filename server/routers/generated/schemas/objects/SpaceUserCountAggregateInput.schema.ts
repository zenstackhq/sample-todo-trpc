/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserCountAggregateInputType,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    spaceId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    role: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const SpaceUserCountAggregateInputObjectSchema = Schema;
