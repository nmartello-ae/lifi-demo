import { LiFiWidget } from "@lifi/widget";

import { Layout } from "@/components/Layout";
import { INTEGRATOR_NAME, widgetConfig } from "@/config/widgetConfig";

export const Swap = () => (
  <Layout
    title="Swap for USDL"
    subTitle="Swap USDL to and from USDC / USDT."
    showTermsAndConditionsLink
  >
    <LiFiWidget integrator={INTEGRATOR_NAME} config={widgetConfig} />
  </Layout>
);
