/* eslint-disable */
import { z } from 'zod';
import { SpaceUserCreateNestedManyWithoutUserInputObjectSchema } from './SpaceUserCreateNestedManyWithoutUserInput.schema';
import { TodoCreateNestedManyWithoutOwnerInputObjectSchema } from './TodoCreateNestedManyWithoutOwnerInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateWithoutListsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    email: z.string(),
    emailVerified: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    password: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    spaces: z
      .lazy(() => SpaceUserCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutListsInputObjectSchema = Schema;
