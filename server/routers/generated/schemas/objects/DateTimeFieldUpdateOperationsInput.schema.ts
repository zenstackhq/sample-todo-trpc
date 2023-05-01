/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.DateTimeFieldUpdateOperationsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    set: z.union([z.date().optional(), z.string().datetime().optional()]),
  })
  .strict();

export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema;
