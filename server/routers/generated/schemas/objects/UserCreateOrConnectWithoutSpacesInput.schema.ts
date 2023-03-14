/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSpacesInputObjectSchema } from './UserCreateWithoutSpacesInput.schema';
import { UserUncheckedCreateWithoutSpacesInputObjectSchema } from './UserUncheckedCreateWithoutSpacesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateOrConnectWithoutSpacesInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSpacesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSpacesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutSpacesInputObjectSchema = Schema;
