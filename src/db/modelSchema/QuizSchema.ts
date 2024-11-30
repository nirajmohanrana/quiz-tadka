import { z } from 'zod';

/////////////////////////////////////////
// QUIZ SCHEMA
/////////////////////////////////////////

export const QuizSchema = z.object({
  id: z.string(),
  title: z.string(),
  hostId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  category: z.string(),
  description: z.string(),
})

export type Quiz = z.infer<typeof QuizSchema>

/////////////////////////////////////////
// QUIZ OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuizOptionalDefaultsSchema = QuizSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
}))

export type QuizOptionalDefaults = z.infer<typeof QuizOptionalDefaultsSchema>

export default QuizSchema;
