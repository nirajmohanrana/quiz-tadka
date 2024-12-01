import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";
import packageJSON from "../../package.json" with { type: "json" };

import { createRouter } from "@/lib/create-app";
import { APP_NAME } from "@/config";

const router = createRouter().openapi(
  createRoute({
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema(
          `${APP_NAME} API Index - version: ${packageJSON.version}`
        ),
        `${APP_NAME} API Index - version: ${packageJSON.version}`
      ),
    },
  }),
  (c) => {
    return c.json(
      {
        message: `${APP_NAME} API Index - version: ${packageJSON.version}`,
      },
      HttpStatusCodes.OK
    );
  }
);

export default router;
