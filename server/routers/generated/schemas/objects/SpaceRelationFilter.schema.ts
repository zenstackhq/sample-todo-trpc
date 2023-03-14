/* eslint-disable */
import { z } from 'zod';
import { SpaceWhereInputObjectSchema } from './SpaceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceRelationFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    is: z.lazy(() => SpaceWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => SpaceWhereInputObjectSchema).optional(),
  })
  .strict();

export const SpaceRelationFilterObjectSchema = Schema;
