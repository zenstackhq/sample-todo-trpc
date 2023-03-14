/* eslint-disable */
import { z } from 'zod';
import { SpaceUserWhereInputObjectSchema } from './SpaceUserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserListRelationFilter,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    every: z.lazy(() => SpaceUserWhereInputObjectSchema).optional(),
    some: z.lazy(() => SpaceUserWhereInputObjectSchema).optional(),
    none: z.lazy(() => SpaceUserWhereInputObjectSchema).optional(),
  })
  .strict();

export const SpaceUserListRelationFilterObjectSchema = Schema;
