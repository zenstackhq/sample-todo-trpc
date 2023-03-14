/* eslint-disable */
import { z } from 'zod';

export const ListScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'spaceId',
  'ownerId',
  'title',
  'private',
]);
