import { z } from "zod";

/////////////////////////////////////////
// QUESTION SCHEMA
/////////////////////////////////////////

export const QuestionSchema = z.object({
  id: z.string(),
  quizId: z.string(),
  question: z.string().min(1, "Question must not be empty"),
  optionA: z.string().min(1, "Option A must not be empty"),
  optionB: z.string().min(1, "Option B must not be empty"),
  optionC: z.string().min(1, "Option C must not be empty"),
  optionD: z.string().min(1, "Option D must not be empty"),
  correctOption: z
    .enum(["A", "B", "C", "D"])
    .refine((val) => !!val, "Correct option must be one of A, B, C, or D"),
  score: z.number().int().min(1, "Score must be at least 1"),
});

export type Question = z.infer<typeof QuestionSchema>;

/////////////////////////////////////////
// QUESTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuestionOptionalDefaultsSchema = QuestionSchema.merge(
  z.object({})
);

export type QuestionOptionalDefaults = z.infer<
  typeof QuestionOptionalDefaultsSchema
>;

/////////////////////////////////////////
// QUESTION UPDATE SCHEMA
/////////////////////////////////////////

export const QuestionUpdateSchema = QuestionSchema.partial();

export type QuestionUpdate = z.infer<typeof QuestionUpdateSchema>;

/////////////////////////////////////////
// DEFAULT EXPORT
/////////////////////////////////////////

export default QuestionSchema;
