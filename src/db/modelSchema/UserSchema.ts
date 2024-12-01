import { z } from "zod";

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  role: z.string(),
  createdAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(
  z.object({
    role: z.string().optional(),
    createdAt: z.coerce.date().optional(),
  })
);

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>;

/////////////////////////////////////////
// USERNAME CHANGE SCHEMA
/////////////////////////////////////////

export const UsernameChangeSchema = z.object({
  id: z.string(), // Identify the user
  newUsername: z.string().min(3, "Username must be at least 3 characters long"),
});

export type UsernameChange = z.infer<typeof UsernameChangeSchema>;

/////////////////////////////////////////
// PASSWORD CHANGE SCHEMA
/////////////////////////////////////////

export const PasswordChangeSchema = z.object({
  id: z.string(), // Identify the user
  currentPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"), // For verification
  newPassword: z.string().min(8, "Password must be at least 8 characters long"),
});

export type PasswordChange = z.infer<typeof PasswordChangeSchema>;

/////////////////////////////////////////
// DEFAULT EXPORT
/////////////////////////////////////////

export default UserSchema;
