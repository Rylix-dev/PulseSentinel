import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import * as Sentry from "@sentry/react";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

Sentry.init({
  dsn: "https://63f64860cca7e419f6a7c89beb118569@o4507558814351360.ingest.de.sentry.io/4507558818086992",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
      }}
    >
      <App />
    </ClerkProvider>
  </NextUIProvider>
);
