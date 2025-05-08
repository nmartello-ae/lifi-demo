import { datadogRum } from "@datadog/browser-rum";

const initDataDog = (hasGrantedConsent: boolean = false) => {
  datadogRum.init({
    applicationId: import.meta.env.VITE_DD_APPLICATION_ID,
    clientToken: import.meta.env.VITE_DD_CLIENT_TOKEN,
    site: "datadoghq.com",
    service: "swap-usdl",
    env: import.meta.env.MODE,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask",
    trackingConsent: hasGrantedConsent ? "granted" : "not-granted",
  });
};

if (import.meta.env.MODE === "staging") {
  initDataDog(true);
} else if (
  import.meta.env.MODE === "sandbox" ||
  import.meta.env.MODE === "production"
) {
  initDataDog(false);
}
