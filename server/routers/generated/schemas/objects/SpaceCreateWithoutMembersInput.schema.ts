/* eslint-disable */
import { z } from 'zod';
import { ListCreateNestedManyWithoutSpaceInputObjectSchema } from './ListCreateNestedManyWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceCreateWithoutMembersInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    name: z.string(),
    slug: z.string(),
    lists: z
      .lazy(() => ListCreateNestedManyWithoutSpaceInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceCreateWithoutMembersInputObjectSchema = Schema;
