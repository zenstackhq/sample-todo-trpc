/* eslint-disable */
import { z } from 'zod';
import { SpaceUserWhereUniqueInputObjectSchema } from './SpaceUserWhereUniqueInput.schema';
import { SpaceUserUpdateWithoutUserInputObjectSchema } from './SpaceUserUpdateWithoutUserInput.schema';
import { SpaceUserUncheckedUpdateWithoutUserInputObjectSchema } from './SpaceUserUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUpdateWithWhereUniqueWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceUserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SpaceUserUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceUserUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
