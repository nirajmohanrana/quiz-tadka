import { z } from 'zod';

export const ScoreScalarFieldEnumSchema = z.enum(['id','userId','sessionId','score','createdAt']);

export default ScoreScalarFieldEnumSchema;
