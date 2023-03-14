/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.NullableIntFieldUpdateOperationsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    set: z.number().optional().nullable(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  })
  .strict();

export const NullableIntFieldUpdateOperationsInputObjectSchema = Schema;
