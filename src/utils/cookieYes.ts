import { CookieYesClient } from "@pax/shared/src/clients/CookieYesClient";
import { datadogRum } from "@datadog/browser-rum";

if (["sandbox", "production"].includes(import.meta.env.MODE)) {
  new CookieYesClient({
    clientId: import.meta.env.VITE_COOKIE_YES_CLIENT_ID,
    onUpdateConsent: ({ accepted }) => {
      datadogRum.setTrackingConsent(
        accepted.includes("analytics") ? "granted" : "not-granted"
      );
    },
  });
}
