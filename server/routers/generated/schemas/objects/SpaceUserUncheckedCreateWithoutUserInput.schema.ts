/* eslint-disable */
import { z } from 'zod';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUncheckedCreateWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    spaceId: z.string(),
    role: z.lazy(() => SpaceUserRoleSchema),
  })
  .strict();

export const SpaceUserUncheckedCreateWithoutUserInputObjectSchema = Schema;
