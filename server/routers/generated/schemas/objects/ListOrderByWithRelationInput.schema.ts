/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SpaceOrderByWithRelationInputObjectSchema } from './SpaceOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TodoOrderByRelationAggregateInputObjectSchema } from './TodoOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.ListOrderByWithRelationInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    spaceId: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    private: z.lazy(() => SortOrderSchema).optional(),
    space: z.lazy(() => SpaceOrderByWithRelationInputObjectSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    todos: z
      .lazy(() => TodoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ListOrderByWithRelationInputObjectSchema = Schema;
