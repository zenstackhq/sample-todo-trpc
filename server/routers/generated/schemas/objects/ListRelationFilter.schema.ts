/* eslint-disable */
import { z } from 'zod';
import { ListWhereInputObjectSchema } from './ListWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.ListRelationFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    is: z.lazy(() => ListWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ListWhereInputObjectSchema).optional(),
  })
  .strict();

export const ListRelationFilterObjectSchema = Schema;
