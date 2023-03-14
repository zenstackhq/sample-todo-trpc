/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutListsInputObjectSchema } from './UserUpdateWithoutListsInput.schema';
import { UserUncheckedUpdateWithoutListsInputObjectSchema } from './UserUncheckedUpdateWithoutListsInput.schema';
import { UserCreateWithoutListsInputObjectSchema } from './UserCreateWithoutListsInput.schema';
import { UserUncheckedCreateWithoutListsInputObjectSchema } from './UserUncheckedCreateWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpsertWithoutListsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutListsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutListsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutListsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutListsInputObjectSchema = Schema;
