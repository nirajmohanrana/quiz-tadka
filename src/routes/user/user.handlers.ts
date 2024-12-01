import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";

import type { ListRoute } from "./user.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const user = await db.user.findMany();
  return c.json(user, HttpStatusCodes.OK);
};
