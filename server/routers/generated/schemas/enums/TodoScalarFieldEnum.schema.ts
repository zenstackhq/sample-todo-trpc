/* eslint-disable */
import { z } from 'zod';

export const TodoScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'ownerId',
  'listId',
  'title',
  'completedAt',
]);
