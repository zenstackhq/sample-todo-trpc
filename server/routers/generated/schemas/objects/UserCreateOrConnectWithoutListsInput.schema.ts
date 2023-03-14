/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutListsInputObjectSchema } from './UserCreateWithoutListsInput.schema';
import { UserUncheckedCreateWithoutListsInputObjectSchema } from './UserUncheckedCreateWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateOrConnectWithoutListsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutListsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutListsInputObjectSchema = Schema;
