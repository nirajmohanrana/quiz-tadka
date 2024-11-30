import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id','quizId','startedAt','endedAt','userId']);

export default SessionScalarFieldEnumSchema;
