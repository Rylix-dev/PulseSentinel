import "dotenv/config";
import { sentry } from "@hono/sentry";
import { Hono } from "hono";
import connectDB from "./db";

const app = new Hono();

app.use("*", sentry({ dsn: process.env.SENTRY_DSN!, tracesSampleRate: 1.0 }));

connectDB();

export default app;
