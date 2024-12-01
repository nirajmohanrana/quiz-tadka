import { z } from "zod";

/////////////////////////////////////////
// SCORE SCHEMA
/////////////////////////////////////////

export const ScoreSchema = z.object({
  id: z.string(),
  userId: z.string(),
  sessionId: z.string(),
  score: z.number().int(),
  createdAt: z.coerce.date(),
});

export type Score = z.infer<typeof ScoreSchema>;

/////////////////////////////////////////
// SCORE CREATE SCHEMA
/////////////////////////////////////////

export const ScoreCreateSchema = ScoreSchema.omit({
  id: true,
  createdAt: true,
});

export type ScoreCreate = z.infer<typeof ScoreCreateSchema>;

/////////////////////////////////////////
// SCORE UPDATE SCHEMA
/////////////////////////////////////////

export const ScoreUpdateSchema = ScoreSchema.partial();

export type ScoreUpdate = z.infer<typeof ScoreUpdateSchema>;

/////////////////////////////////////////
// SCORE DELETE SCHEMA
/////////////////////////////////////////

export const ScoreDeleteSchema = z.object({
  id: z.string(),
});

export type ScoreDelete = z.infer<typeof ScoreDeleteSchema>;

/////////////////////////////////////////
// DEFAULT EXPORT
/////////////////////////////////////////

export default ScoreSchema;
