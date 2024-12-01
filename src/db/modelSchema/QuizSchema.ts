import { z } from "zod";

/////////////////////////////////////////
// QUIZ SCHEMA
/////////////////////////////////////////

export const QuizSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "Title must be at least 3 characters long"),
  hostId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
});

export type Quiz = z.infer<typeof QuizSchema>;

/////////////////////////////////////////
// QUIZ OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuizOptionalDefaultsSchema = QuizSchema.merge(
  z.object({
    createdAt: z.coerce.date().optional(),
  })
);

export type QuizOptionalDefaults = z.infer<typeof QuizOptionalDefaultsSchema>;

/////////////////////////////////////////
// QUIZ UPDATE SCHEMA
/////////////////////////////////////////

export const QuizUpdateSchema = QuizSchema.partial();

export type QuizUpdate = z.infer<typeof QuizUpdateSchema>;

/////////////////////////////////////////
// DEFAULT EXPORT
/////////////////////////////////////////

export default QuizSchema;
