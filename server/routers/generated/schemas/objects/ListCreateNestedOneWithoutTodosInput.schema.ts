/* eslint-disable */
import { z } from 'zod';
import { ListCreateWithoutTodosInputObjectSchema } from './ListCreateWithoutTodosInput.schema';
import { ListUncheckedCreateWithoutTodosInputObjectSchema } from './ListUncheckedCreateWithoutTodosInput.schema';
import { ListCreateOrConnectWithoutTodosInputObjectSchema } from './ListCreateOrConnectWithoutTodosInput.schema';
import { ListWhereUniqueInputObjectSchema } from './ListWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListCreateNestedOneWithoutTodosInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => ListCreateWithoutTodosInputObjectSchema),
        z.lazy(() => ListUncheckedCreateWithoutTodosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ListCreateOrConnectWithoutTodosInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ListWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ListCreateNestedOneWithoutTodosInputObjectSchema = Schema;
