/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SpaceUserRoleSchema } from '../enums/SpaceUserRole.schema';
import { EnumSpaceUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumSpaceUserRoleFieldUpdateOperationsInput.schema';
import { SpaceUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './SpaceUpdateOneRequiredWithoutMembersNestedInput.schema';
import { UserUpdateOneRequiredWithoutSpacesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSpacesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.SpaceUserUpdateInput, 'zenstack_transaction' | 'zenstack_guard'>
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
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.lazy(() => SpaceUserRoleSchema),
        z.lazy(() => EnumSpaceUserRoleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    space: z
      .lazy(() => SpaceUpdateOneRequiredWithoutMembersNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSpacesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpaceUserUpdateInputObjectSchema = Schema;
