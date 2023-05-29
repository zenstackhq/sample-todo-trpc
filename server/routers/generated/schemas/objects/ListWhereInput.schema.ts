/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { SpaceRelationFilterObjectSchema } from './SpaceRelationFilter.schema';
import { SpaceWhereInputObjectSchema } from './SpaceWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TodoListRelationFilterObjectSchema } from './TodoListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.ListWhereInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ListWhereInputObjectSchema),
        z.lazy(() => ListWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ListWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ListWhereInputObjectSchema),
        z.lazy(() => ListWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    spaceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    private: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    space: z
      .union([
        z.lazy(() => SpaceRelationFilterObjectSchema),
        z.lazy(() => SpaceWhereInputObjectSchema),
      ])
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    todos: z.lazy(() => TodoListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ListWhereInputObjectSchema = Schema;
