/* eslint-disable */
import { z } from 'zod';
import { SpaceUserUncheckedCreateNestedManyWithoutSpaceInputObjectSchema } from './SpaceUserUncheckedCreateNestedManyWithoutSpaceInput.schema';
import { ListUncheckedCreateNestedManyWithoutSpaceInputObjectSchema } from './ListUncheckedCreateNestedManyWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUncheckedCreateInput,
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
      .lazy(
        () => SpaceUserUncheckedCreateNestedManyWithoutSpaceInputObjectSchema,
      )
      .optional(),
    lists: z
      .lazy(() => ListUncheckedCreateNestedManyWithoutSpaceInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceUncheckedCreateInputObjectSchema = Schema;
