/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutSpacesInputObjectSchema } from './UserCreateNestedOneWithoutSpacesInput.schema';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserCreateWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSpacesInputObjectSchema),
    role: z.lazy(() => SpaceUserRoleSchema),
  })
  .strict();

export const SpaceUserCreateWithoutSpaceInputObjectSchema = Schema;
