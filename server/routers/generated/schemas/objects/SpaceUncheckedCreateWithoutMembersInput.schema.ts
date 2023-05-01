/* eslint-disable */
import { z } from 'zod';
import { ListUncheckedCreateNestedManyWithoutSpaceInputObjectSchema } from './ListUncheckedCreateNestedManyWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUncheckedCreateWithoutMembersInput,
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
      .lazy(() => ListUncheckedCreateNestedManyWithoutSpaceInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceUncheckedCreateWithoutMembersInputObjectSchema = Schema;
