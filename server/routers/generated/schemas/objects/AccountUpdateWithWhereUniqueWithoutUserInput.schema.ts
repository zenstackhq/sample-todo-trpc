/* eslint-disable */
import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountUpdateWithWhereUniqueWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
