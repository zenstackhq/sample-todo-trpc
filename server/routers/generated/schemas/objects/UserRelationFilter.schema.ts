/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.UserRelationFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict();

export const UserRelationFilterObjectSchema = Schema;
