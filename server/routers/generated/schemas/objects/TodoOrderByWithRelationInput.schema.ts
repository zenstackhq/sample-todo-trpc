/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ListOrderByWithRelationInputObjectSchema } from './ListOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.TodoOrderByWithRelationInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    list: z.lazy(() => ListOrderByWithRelationInputObjectSchema).optional(),
    listId: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    completedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TodoOrderByWithRelationInputObjectSchema = Schema;
