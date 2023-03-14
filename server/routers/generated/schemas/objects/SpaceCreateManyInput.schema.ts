/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceCreateManyInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    slug: z.string(),
  })
  .strict();

export const SpaceCreateManyInputObjectSchema = Schema;
