import { z } from 'zod';

/////////////////////////////////////////
// QUESTION SCHEMA
/////////////////////////////////////////

export const QuestionSchema = z.object({
  id: z.string(),
  quizId: z.string(),
  question: z.string(),
  optionA: z.string(),
  optionB: z.string(),
  optionC: z.string(),
  optionD: z.string(),
  correctOption: z.string(),
  score: z.number().int(),
})

export type Question = z.infer<typeof QuestionSchema>

/////////////////////////////////////////
// QUESTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuestionOptionalDefaultsSchema = QuestionSchema.merge(z.object({
}))

export type QuestionOptionalDefaults = z.infer<typeof QuestionOptionalDefaultsSchema>

export default QuestionSchema;
