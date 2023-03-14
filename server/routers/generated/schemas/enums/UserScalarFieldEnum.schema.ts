/* eslint-disable */
import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'email',
  'emailVerified',
  'password',
  'name',
  'image',
]);
