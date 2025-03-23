import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";

import { createClerkHandler } from "@clerk/tanstack-start/server";
import { createRouter } from "./router";
import { getRouterManifest } from "@tanstack/start/router-manifest";

export default createClerkHandler(
  createStartHandler({
    createRouter,
    getRouterManifest,
  })
)(defaultStreamHandler);
