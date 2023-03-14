/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountProviderProviderAccountIdCompoundUniqueInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    provider: z.string(),
    providerAccountId: z.string(),
  })
  .strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema =
  Schema;
