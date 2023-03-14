/* eslint-disable */
import { z } from 'zod';

export const SpaceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'name',
  'slug',
]);
