/* eslint-disable */
import { z } from 'zod';

export const SpaceUserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'spaceId',
  'userId',
  'role',
]);
