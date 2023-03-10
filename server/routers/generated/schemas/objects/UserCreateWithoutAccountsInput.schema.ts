/* eslint-disable */
import { z } from 'zod';
import { SpaceUserCreateNestedManyWithoutUserInputObjectSchema } from './SpaceUserCreateNestedManyWithoutUserInput.schema';
import { ListCreateNestedManyWithoutOwnerInputObjectSchema } from './ListCreateNestedManyWithoutOwnerInput.schema';
import { TodoCreateNestedManyWithoutOwnerInputObjectSchema } from './TodoCreateNestedManyWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateWithoutAccountsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    email: z.string(),
    emailVerified: z.date().optional().nullable(),
    password: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    spaces: z
      .lazy(() => SpaceUserCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    image: z.string().optional().nullable(),
    lists: z
      .lazy(() => ListCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
