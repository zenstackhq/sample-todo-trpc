/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SpaceUserUpdateManyWithoutSpaceNestedInputObjectSchema } from './SpaceUserUpdateManyWithoutSpaceNestedInput.schema';
import { ListUpdateManyWithoutSpaceNestedInputObjectSchema } from './ListUpdateManyWithoutSpaceNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceUpdateInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    slug: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    members: z
      .lazy(() => SpaceUserUpdateManyWithoutSpaceNestedInputObjectSchema)
      .optional(),
    lists: z
      .lazy(() => ListUpdateManyWithoutSpaceNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceUpdateInputObjectSchema = Schema;
