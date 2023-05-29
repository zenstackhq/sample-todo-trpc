/* eslint-disable */
import { z } from 'zod';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSpaceUserRoleFilterObjectSchema } from './NestedEnumSpaceUserRoleFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.NestedEnumSpaceUserRoleWithAggregatesFilter,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    equals: z.lazy(() => SpaceUserRoleSchema).optional(),
    in: z
      .union([
        z.lazy(() => SpaceUserRoleSchema).array(),
        z.lazy(() => SpaceUserRoleSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => SpaceUserRoleSchema).array(),
        z.lazy(() => SpaceUserRoleSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => SpaceUserRoleSchema),
        z.lazy(() => NestedEnumSpaceUserRoleWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSpaceUserRoleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSpaceUserRoleFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumSpaceUserRoleWithAggregatesFilterObjectSchema = Schema;
