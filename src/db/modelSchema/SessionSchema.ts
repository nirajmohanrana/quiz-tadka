import { z } from "zod";

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  quizId: z.string(),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date().nullable(),
  userId: z.string().nullable(),
});

export type Session = z.infer<typeof SessionSchema>;

/////////////////////////////////////////
// SESSION CREATE SCHEMA
/////////////////////////////////////////

export const SessionCreateSchema = SessionSchema.omit({ id: true });

export type SessionCreate = z.infer<typeof SessionCreateSchema>;

/////////////////////////////////////////
// SESSION UPDATE SCHEMA
/////////////////////////////////////////

export const SessionUpdateSchema = SessionSchema.partial();

export type SessionUpdate = z.infer<typeof SessionUpdateSchema>;

/////////////////////////////////////////
// SESSION DELETE SCHEMA
/////////////////////////////////////////

export const SessionDeleteSchema = z.object({
  id: z.string(),
});

export type SessionDelete = z.infer<typeof SessionDeleteSchema>;

/////////////////////////////////////////
// DEFAULT EXPORT
/////////////////////////////////////////

export default SessionSchema;
