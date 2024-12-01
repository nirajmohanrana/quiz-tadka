import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { UserSchema } from "@/db";

const tags = ["User"];

export const list = createRoute({
  path: "/user",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(z.array(UserSchema), "The list of user"),
  },
});

export type ListRoute = typeof list;
