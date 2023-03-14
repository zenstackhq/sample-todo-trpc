/* eslint-disable */
import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountCreateOrConnectWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AccountCreateOrConnectWithoutUserInputObjectSchema = Schema;
