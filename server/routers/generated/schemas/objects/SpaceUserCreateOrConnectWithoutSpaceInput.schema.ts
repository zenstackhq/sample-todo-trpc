/* eslint-disable */
import { z } from 'zod';
import { SpaceUserWhereUniqueInputObjectSchema } from './SpaceUserWhereUniqueInput.schema';
import { SpaceUserCreateWithoutSpaceInputObjectSchema } from './SpaceUserCreateWithoutSpaceInput.schema';
import { SpaceUserUncheckedCreateWithoutSpaceInputObjectSchema } from './SpaceUserUncheckedCreateWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserCreateOrConnectWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SpaceUserCreateWithoutSpaceInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedCreateWithoutSpaceInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceUserCreateOrConnectWithoutSpaceInputObjectSchema = Schema;
