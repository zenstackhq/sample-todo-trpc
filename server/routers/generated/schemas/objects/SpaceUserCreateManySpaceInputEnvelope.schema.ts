/* eslint-disable */
import { z } from 'zod';
import { SpaceUserCreateManySpaceInputObjectSchema } from './SpaceUserCreateManySpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserCreateManySpaceInputEnvelope,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    data: z.lazy(() => SpaceUserCreateManySpaceInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SpaceUserCreateManySpaceInputEnvelopeObjectSchema = Schema;
