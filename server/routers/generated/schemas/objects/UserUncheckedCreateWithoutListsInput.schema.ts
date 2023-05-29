/* eslint-disable */
import { z } from 'zod';
import { SpaceUserUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SpaceUserUncheckedCreateNestedManyWithoutUserInput.schema';
import { TodoUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserUncheckedCreateWithoutListsInput,
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
      .lazy(
        () => SpaceUserUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    todos: z
      .lazy(() => TodoUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutListsInputObjectSchema = Schema;
