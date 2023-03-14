/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { ListArgsObjectSchema } from './ListArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.TodoInclude, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    owner: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    list: z.union([z.boolean(), z.lazy(() => ListArgsObjectSchema)]).optional(),
  })
  .strict();

export const TodoIncludeObjectSchema = Schema;
