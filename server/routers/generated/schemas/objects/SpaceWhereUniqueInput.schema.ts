/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceWhereUniqueInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
    slug: z.string().optional(),
  })
  .strict();

export const SpaceWhereUniqueInputObjectSchema = Schema;
