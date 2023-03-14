/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutTodosInputObjectSchema } from './UserCreateWithoutTodosInput.schema';
import { UserUncheckedCreateWithoutTodosInputObjectSchema } from './UserUncheckedCreateWithoutTodosInput.schema';
import { UserCreateOrConnectWithoutTodosInputObjectSchema } from './UserCreateOrConnectWithoutTodosInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateNestedOneWithoutTodosInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTodosInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutTodosInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutTodosInputObjectSchema = Schema;
