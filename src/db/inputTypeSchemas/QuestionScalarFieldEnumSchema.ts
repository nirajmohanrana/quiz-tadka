import { z } from 'zod';

export const QuestionScalarFieldEnumSchema = z.enum(['id','quizId','question','optionA','optionB','optionC','optionD','correctOption','score']);

export default QuestionScalarFieldEnumSchema;
