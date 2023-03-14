/* eslint-disable */
import { z } from 'zod';
import { SpaceUserWhereUniqueInputObjectSchema } from './SpaceUserWhereUniqueInput.schema';
import { SpaceUserUpdateWithoutSpaceInputObjectSchema } from './SpaceUserUpdateWithoutSpaceInput.schema';
import { SpaceUserUncheckedUpdateWithoutSpaceInputObjectSchema } from './SpaceUserUncheckedUpdateWithoutSpaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUpdateWithWhereUniqueWithoutSpaceInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceUserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SpaceUserUpdateWithoutSpaceInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedUpdateWithoutSpaceInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceUserUpdateWithWhereUniqueWithoutSpaceInputObjectSchema =
  Schema;
