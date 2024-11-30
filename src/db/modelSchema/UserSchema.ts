import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

export default UserSchema;
