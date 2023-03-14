/* eslint-disable */
import { z } from 'zod';
import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.AccountCreateManyUserInputEnvelope,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    data: z.lazy(() => AccountCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const AccountCreateManyUserInputEnvelopeObjectSchema = Schema;
