import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','username','password','role','createdAt']);

export default UserScalarFieldEnumSchema;
