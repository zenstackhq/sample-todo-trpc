/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.BoolFieldUpdateOperationsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    set: z.boolean().optional(),
  })
  .strict();

export const BoolFieldUpdateOperationsInputObjectSchema = Schema;
