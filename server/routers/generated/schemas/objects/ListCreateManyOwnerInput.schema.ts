/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCreateManyOwnerInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    spaceId: z.string(),
    title: z.string(),
    private: z.boolean().optional(),
  })
  .strict();

export const ListCreateManyOwnerInputObjectSchema = Schema;
