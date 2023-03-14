/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutTodosInputObjectSchema } from './UserUpdateWithoutTodosInput.schema';
import { UserUncheckedUpdateWithoutTodosInputObjectSchema } from './UserUncheckedUpdateWithoutTodosInput.schema';
import { UserCreateWithoutTodosInputObjectSchema } from './UserCreateWithoutTodosInput.schema';
import { UserUncheckedCreateWithoutTodosInputObjectSchema } from './UserUncheckedCreateWithoutTodosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpsertWithoutTodosInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTodosInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutTodosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTodosInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutTodosInputObjectSchema = Schema;
