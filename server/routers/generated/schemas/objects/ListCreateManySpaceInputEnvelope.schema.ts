/* eslint-disable */
import { z } from 'zod';
import { ListCreateManySpaceInputObjectSchema } from './ListCreateManySpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCreateManySpaceInputEnvelope,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    data: z.lazy(() => ListCreateManySpaceInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ListCreateManySpaceInputEnvelopeObjectSchema = Schema;
