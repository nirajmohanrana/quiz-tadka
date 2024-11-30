import { z } from 'zod';

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  quizId: z.string(),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date().nullable(),
  userId: z.string().nullable(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// SESSION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SessionOptionalDefaultsSchema = SessionSchema.merge(z.object({
  startedAt: z.coerce.date().optional(),
}))

export type SessionOptionalDefaults = z.infer<typeof SessionOptionalDefaultsSchema>

export default SessionSchema;
