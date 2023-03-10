/* eslint-disable */
import { z } from 'zod';
import { ListScalarWhereInputObjectSchema } from './ListScalarWhereInput.schema';
import { ListUpdateManyMutationInputObjectSchema } from './ListUpdateManyMutationInput.schema';
import { ListUncheckedUpdateManyWithoutListsInputObjectSchema } from './ListUncheckedUpdateManyWithoutListsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListUpdateManyWithWhereWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => ListScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ListUpdateManyMutationInputObjectSchema),
      z.lazy(() => ListUncheckedUpdateManyWithoutListsInputObjectSchema),
    ]),
  })
  .strict();

export const ListUpdateManyWithWhereWithoutSpaceInputObjectSchema = Schema;
