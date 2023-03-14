/* eslint-disable */
import { z } from 'zod';
import { ListWhereInputObjectSchema } from './ListWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.ListListRelationFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    every: z.lazy(() => ListWhereInputObjectSchema).optional(),
    some: z.lazy(() => ListWhereInputObjectSchema).optional(),
    none: z.lazy(() => ListWhereInputObjectSchema).optional(),
  })
  .strict();

export const ListListRelationFilterObjectSchema = Schema;
