/* eslint-disable */
import { z } from 'zod';
import { SpaceUserCreateNestedManyWithoutSpaceInputObjectSchema } from './SpaceUserCreateNestedManyWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceCreateWithoutListsInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    name: z.string(),
    slug: z.string(),
    members: z
      .lazy(() => SpaceUserCreateNestedManyWithoutSpaceInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceCreateWithoutListsInputObjectSchema = Schema;
