/* eslint-disable */
import { z } from 'zod';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUncheckedCreateWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.string(),
    role: z.lazy(() => SpaceUserRoleSchema),
  })
  .strict();

export const SpaceUserUncheckedCreateWithoutSpaceInputObjectSchema = Schema;
