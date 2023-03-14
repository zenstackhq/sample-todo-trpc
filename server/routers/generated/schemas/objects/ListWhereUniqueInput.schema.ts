/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.ListWhereUniqueInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const ListWhereUniqueInputObjectSchema = Schema;
