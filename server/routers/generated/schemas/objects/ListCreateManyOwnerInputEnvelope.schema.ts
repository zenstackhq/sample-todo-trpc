/* eslint-disable */
import { z } from 'zod';
import { ListCreateManyOwnerInputObjectSchema } from './ListCreateManyOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCreateManyOwnerInputEnvelope,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => ListCreateManyOwnerInputObjectSchema),
      z.lazy(() => ListCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ListCreateManyOwnerInputEnvelopeObjectSchema = Schema;
