/* eslint-disable */
import { z } from 'zod';
import { SpaceArgsObjectSchema } from './SpaceArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceUserSelect, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    space: z
      .union([z.boolean(), z.lazy(() => SpaceArgsObjectSchema)])
      .optional(),
    spaceId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    role: z.boolean().optional(),
  })
  .strict();

export const SpaceUserSelectObjectSchema = Schema;
