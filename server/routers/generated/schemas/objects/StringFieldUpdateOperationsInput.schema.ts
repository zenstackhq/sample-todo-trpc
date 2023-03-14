/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.StringFieldUpdateOperationsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    set: z.string().optional(),
  })
  .strict();

export const StringFieldUpdateOperationsInputObjectSchema = Schema;
