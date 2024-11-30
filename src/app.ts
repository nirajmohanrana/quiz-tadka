import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";

const app = createApp();

configureOpenAPI(app);

const _routes = [index] as const;

export type AppType = (typeof _routes)[number];

export default app;
