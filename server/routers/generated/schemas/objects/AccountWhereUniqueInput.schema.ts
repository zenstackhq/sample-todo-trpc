/* eslint-disable */
import { z } from 'zod';
import { AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema } from './AccountProviderProviderAccountIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountWhereUniqueInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    provider_providerAccountId: z
      .lazy(
        () => AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountWhereUniqueInputObjectSchema = Schema;
