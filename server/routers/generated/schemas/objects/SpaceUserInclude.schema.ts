/* eslint-disable */
import { z } from 'zod';
import { SpaceArgsObjectSchema } from './SpaceArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceUserInclude, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    space: z
      .union([z.boolean(), z.lazy(() => SpaceArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const SpaceUserIncludeObjectSchema = Schema;
