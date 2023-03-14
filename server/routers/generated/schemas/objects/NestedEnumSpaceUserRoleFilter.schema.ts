/* eslint-disable */
import { z } from 'zod';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.NestedEnumSpaceUserRoleFilter,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    equals: z.lazy(() => SpaceUserRoleSchema).optional(),
    in: z
      .lazy(() => SpaceUserRoleSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => SpaceUserRoleSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => SpaceUserRoleSchema),
        z.lazy(() => NestedEnumSpaceUserRoleFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumSpaceUserRoleFilterObjectSchema = Schema;
