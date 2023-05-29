/* eslint-disable */
import { z } from 'zod';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';
import { SpaceCreateNestedOneWithoutMembersInputObjectSchema } from './SpaceCreateNestedOneWithoutMembersInput.schema';
import { UserCreateNestedOneWithoutSpacesInputObjectSchema } from './UserCreateNestedOneWithoutSpacesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceUserCreateInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    role: z.lazy(() => SpaceUserRoleSchema),
    space: z.lazy(() => SpaceCreateNestedOneWithoutMembersInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutSpacesInputObjectSchema),
  })
  .strict();

export const SpaceUserCreateInputObjectSchema = Schema;
