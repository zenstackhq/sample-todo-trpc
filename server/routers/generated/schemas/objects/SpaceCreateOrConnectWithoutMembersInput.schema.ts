/* eslint-disable */
import { z } from 'zod';
import { SpaceWhereUniqueInputObjectSchema } from './SpaceWhereUniqueInput.schema';
import { SpaceCreateWithoutMembersInputObjectSchema } from './SpaceCreateWithoutMembersInput.schema';
import { SpaceUncheckedCreateWithoutMembersInputObjectSchema } from './SpaceUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceCreateOrConnectWithoutMembersInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SpaceCreateWithoutMembersInputObjectSchema),
      z.lazy(() => SpaceUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceCreateOrConnectWithoutMembersInputObjectSchema = Schema;
