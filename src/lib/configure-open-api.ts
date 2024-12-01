import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import { APP_NAME, DOC_URL, REFERENCE_URL } from "@/config";

import packageJSON from "../../package.json" with { type: "json" };

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc(DOC_URL, {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: APP_NAME,
    },
  });

  app.get(
    REFERENCE_URL,
    apiReference({
      theme: "bluePlanet",
      layout: "modern",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      hideDarkModeToggle: true,
      spec: {
        url: DOC_URL,
      },
    })
  );
}
