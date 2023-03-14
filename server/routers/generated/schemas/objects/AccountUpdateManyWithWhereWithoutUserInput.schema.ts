/* eslint-disable */
import { z } from 'zod';
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema';
import { AccountUpdateManyMutationInputObjectSchema } from './AccountUpdateManyMutationInput.schema';
import { AccountUncheckedUpdateManyWithoutAccountsInputObjectSchema } from './AccountUncheckedUpdateManyWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountUpdateManyWithWhereWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => AccountScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AccountUpdateManyMutationInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
