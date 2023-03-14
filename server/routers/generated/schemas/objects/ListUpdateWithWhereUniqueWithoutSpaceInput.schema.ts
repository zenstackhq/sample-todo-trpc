/* eslint-disable */
import { z } from 'zod';
import { ListWhereUniqueInputObjectSchema } from './ListWhereUniqueInput.schema';
import { ListUpdateWithoutSpaceInputObjectSchema } from './ListUpdateWithoutSpaceInput.schema';
import { ListUncheckedUpdateWithoutSpaceInputObjectSchema } from './ListUncheckedUpdateWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListUpdateWithWhereUniqueWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => ListWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ListUpdateWithoutSpaceInputObjectSchema),
      z.lazy(() => ListUncheckedUpdateWithoutSpaceInputObjectSchema),
    ]),
  })
  .strict();

export const ListUpdateWithWhereUniqueWithoutSpaceInputObjectSchema = Schema;
