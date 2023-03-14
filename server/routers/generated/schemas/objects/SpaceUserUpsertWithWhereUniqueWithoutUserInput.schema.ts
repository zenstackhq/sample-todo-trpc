/* eslint-disable */
import { z } from 'zod';
import { SpaceUserWhereUniqueInputObjectSchema } from './SpaceUserWhereUniqueInput.schema';
import { SpaceUserUpdateWithoutUserInputObjectSchema } from './SpaceUserUpdateWithoutUserInput.schema';
import { SpaceUserUncheckedUpdateWithoutUserInputObjectSchema } from './SpaceUserUncheckedUpdateWithoutUserInput.schema';
import { SpaceUserCreateWithoutUserInputObjectSchema } from './SpaceUserCreateWithoutUserInput.schema';
import { SpaceUserUncheckedCreateWithoutUserInputObjectSchema } from './SpaceUserUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUpsertWithWhereUniqueWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceUserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SpaceUserUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SpaceUserCreateWithoutUserInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceUserUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
