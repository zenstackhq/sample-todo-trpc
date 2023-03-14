/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.NullableStringFieldUpdateOperationsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    set: z.string().optional().nullable(),
  })
  .strict();

export const NullableStringFieldUpdateOperationsInputObjectSchema = Schema;
