import { z } from 'zod';

/////////////////////////////////////////
// SCORE SCHEMA
/////////////////////////////////////////

export const ScoreSchema = z.object({
  id: z.string(),
  userId: z.string(),
  sessionId: z.string(),
  score: z.number().int(),
  createdAt: z.coerce.date(),
})

export type Score = z.infer<typeof ScoreSchema>

/////////////////////////////////////////
// SCORE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ScoreOptionalDefaultsSchema = ScoreSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
}))

export type ScoreOptionalDefaults = z.infer<typeof ScoreOptionalDefaultsSchema>

export default ScoreSchema;
