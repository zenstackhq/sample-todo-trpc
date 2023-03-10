/* eslint-disable */
import { z } from 'zod';
import { SpaceUserCreateNestedManyWithoutSpaceInputObjectSchema } from './SpaceUserCreateNestedManyWithoutSpaceInput.schema';
import { ListCreateNestedManyWithoutSpaceInputObjectSchema } from './ListCreateNestedManyWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceCreateInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    slug: z.string(),
    members: z
      .lazy(() => SpaceUserCreateNestedManyWithoutSpaceInputObjectSchema)
      .optional(),
    lists: z
      .lazy(() => ListCreateNestedManyWithoutSpaceInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceCreateInputObjectSchema = Schema;
