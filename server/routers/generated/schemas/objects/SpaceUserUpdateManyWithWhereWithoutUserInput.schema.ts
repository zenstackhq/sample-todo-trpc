/* eslint-disable */
import { z } from 'zod';
import { SpaceUserScalarWhereInputObjectSchema } from './SpaceUserScalarWhereInput.schema';
import { SpaceUserUpdateManyMutationInputObjectSchema } from './SpaceUserUpdateManyMutationInput.schema';
import { SpaceUserUncheckedUpdateManyWithoutSpacesInputObjectSchema } from './SpaceUserUncheckedUpdateManyWithoutSpacesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUpdateManyWithWhereWithoutUserInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => SpaceUserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SpaceUserUpdateManyMutationInputObjectSchema),
      z.lazy(() => SpaceUserUncheckedUpdateManyWithoutSpacesInputObjectSchema),
    ]),
  })
  .strict();

export const SpaceUserUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
