/* eslint-disable */
import { z } from 'zod';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.EnumSpaceUserRoleFieldUpdateOperationsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    set: z.lazy(() => SpaceUserRoleSchema).optional(),
  })
  .strict();

export const EnumSpaceUserRoleFieldUpdateOperationsInputObjectSchema = Schema;
