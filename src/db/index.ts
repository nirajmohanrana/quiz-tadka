import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

export * from "./inputTypeSchemas";
export * from "./modelSchema";