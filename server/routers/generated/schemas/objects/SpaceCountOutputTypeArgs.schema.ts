/* eslint-disable */
import { z } from 'zod';
import { SpaceCountOutputTypeSelectObjectSchema } from './SpaceCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceCountOutputTypeArgs,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    select: z.lazy(() => SpaceCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const SpaceCountOutputTypeArgsObjectSchema = Schema;
