/* eslint-disable */
import { z } from 'zod';
import { UserSelectObjectSchema } from './UserSelect.schema';
import { UserIncludeObjectSchema } from './UserInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.UserArgs, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict();

export const UserArgsObjectSchema = Schema;
