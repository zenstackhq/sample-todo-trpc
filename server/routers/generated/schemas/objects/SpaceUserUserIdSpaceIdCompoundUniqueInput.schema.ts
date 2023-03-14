/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.SpaceUserUserIdSpaceIdCompoundUniqueInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    userId: z.string(),
    spaceId: z.string(),
  })
  .strict();

export const SpaceUserUserIdSpaceIdCompoundUniqueInputObjectSchema = Schema;
