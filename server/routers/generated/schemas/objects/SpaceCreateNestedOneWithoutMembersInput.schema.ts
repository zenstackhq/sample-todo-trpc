/* eslint-disable */
import { z } from 'zod';
import { SpaceCreateWithoutMembersInputObjectSchema } from './SpaceCreateWithoutMembersInput.schema';
import { SpaceUncheckedCreateWithoutMembersInputObjectSchema } from './SpaceUncheckedCreateWithoutMembersInput.schema';
import { SpaceCreateOrConnectWithoutMembersInputObjectSchema } from './SpaceCreateOrConnectWithoutMembersInput.schema';
import { SpaceWhereUniqueInputObjectSchema } from './SpaceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceCreateNestedOneWithoutMembersInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => SpaceCreateWithoutMembersInputObjectSchema),
        z.lazy(() => SpaceUncheckedCreateWithoutMembersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SpaceCreateOrConnectWithoutMembersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SpaceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SpaceCreateNestedOneWithoutMembersInputObjectSchema = Schema;
