/* eslint-disable */
import { z } from 'zod';
import { ListSelectObjectSchema } from './ListSelect.schema';
import { ListIncludeObjectSchema } from './ListInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.ListArgs, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    select: z.lazy(() => ListSelectObjectSchema).optional(),
    include: z.lazy(() => ListIncludeObjectSchema).optional(),
  })
  .strict();

export const ListArgsObjectSchema = Schema;
