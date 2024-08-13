import app from "./config/init";
import { serve } from "@hono/node-server";
import logger from "./config/logger";
const PORT = 3000;

app.get("/health", (c) => c.json({ status: "ok" }));

logger.info(`Server listening on port ${PORT}`);
serve({ fetch: app.fetch, port: PORT });
