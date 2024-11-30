import { z } from 'zod';

export const QuizScalarFieldEnumSchema = z.enum(['id','title','hostId','createdAt','updatedAt','category','description']);

export default QuizScalarFieldEnumSchema;
