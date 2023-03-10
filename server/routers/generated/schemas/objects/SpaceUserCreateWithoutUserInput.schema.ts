/* eslint-disable */
import { z } from 'zod';
import { SpaceCreateNestedOneWithoutMembersInputObjectSchema } from './SpaceCreateNestedOneWithoutMembersInput.schema';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserCreateWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    space: z.lazy(() => SpaceCreateNestedOneWithoutMembersInputObjectSchema),
    role: z.lazy(() => SpaceUserRoleSchema),
  })
  .strict();

export const SpaceUserCreateWithoutUserInputObjectSchema = Schema;
