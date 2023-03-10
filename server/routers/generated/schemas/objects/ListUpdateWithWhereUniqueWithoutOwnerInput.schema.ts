/* eslint-disable */
import { z } from 'zod';
import { ListWhereUniqueInputObjectSchema } from './ListWhereUniqueInput.schema';
import { ListUpdateWithoutOwnerInputObjectSchema } from './ListUpdateWithoutOwnerInput.schema';
import { ListUncheckedUpdateWithoutOwnerInputObjectSchema } from './ListUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListUpdateWithWhereUniqueWithoutOwnerInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => ListWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ListUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => ListUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const ListUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
