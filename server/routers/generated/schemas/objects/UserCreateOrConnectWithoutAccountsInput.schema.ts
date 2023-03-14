/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateOrConnectWithoutAccountsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAccountsInputObjectSchema = Schema;
