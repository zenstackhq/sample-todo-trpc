/* eslint-disable */
import { z } from 'zod';
import { SpaceUserSchema } from '../SpaceUser.schema';
import { ListSchema } from '../List.schema';
import { TodoSchema } from '../Todo.schema';
import { AccountSchema } from '../Account.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.UserInclude, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    spaces: z
      .union([z.boolean(), z.lazy(() => SpaceUserSchema.findMany)])
      .optional(),
    lists: z.union([z.boolean(), z.lazy(() => ListSchema.findMany)]).optional(),
    todos: z.union([z.boolean(), z.lazy(() => TodoSchema.findMany)]).optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountSchema.findMany)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
