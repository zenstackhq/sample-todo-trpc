/* eslint-disable */
import { z } from 'zod';
import { SpaceUserWhereUniqueInputObjectSchema } from './SpaceUserWhereUniqueInput.schema';
import { SpaceUserCreateWithoutUserInputObjectSchema } from './SpaceUserCreateWithoutUserInput.schema';
import { SpaceUserUncheckedCreateWithoutUserInputObjectSchema } from './SpaceUserUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserCreateOrConnectWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SpaceUserCreateWithoutUserInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceUserCreateOrConnectWithoutUserInputObjectSchema = Schema;
