import { LiFiWidget } from "@lifi/widget";
import { WagmiProvider } from "wagmi";
import { createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
import { mainnet } from "wagmi/chains";
import { custom } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import clsx from "clsx";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

import { INTEGRATOR_NAME, widgetConfig } from "@/config/widgetConfig";

import Liftdollar from "@/assets/liftdollar.svg?react";
import { LedgerLiveEthereumProvider } from "./provider";

const queryClient = new QueryClient();

const provider = new LedgerLiveEthereumProvider();

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected({
      target() {
        return {
          id: "some random id, see docs",
          name: "some random name, see docs",
          provider: provider,
        };
      },
    }),
  ],
  transports: {
    [mainnet.id]: custom(provider),
  },
});

export const InsideLedgerDapp = () => (
  <QueryClientProvider client={queryClient}>
    <WagmiProvider config={config}>
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div
          className={clsx(
            "max-w-[420px]",
            "rounded-lg bg-white p-5 shadow-[0_3px_16px_rgba(0,0,0,0.1)]",
            "flex flex-col items-center justify-center gap-5"
          )}
        >
          <Liftdollar />
          <div className="relative">
            <button
              className="absolute left-[-179px] top-[42px] z-10 bg-transparent"
              onClick={() => window.location.reload()}
            >
              <ArrowPathIcon className="w-5 hover:text-slate-400" />
            </button>
          </div>
          <LiFiWidget
            integrator={INTEGRATOR_NAME}
            config={{
              ...widgetConfig,
              theme: {
                ...widgetConfig.theme,
                container: {
                  height: "100%",
                },
              },
              walletConfig: {
                usePartialWalletManagement: true,
              },
            }}
          />
          <p className="mx-5 max-w-sm text-center text-xs font-semibold text-gray-500">
            Use the &quot;Connect Wallet&quot; option within your Ledger
            application to securely connect your wallet. This ensures your
            transactions are managed directly through your Ledger device. If you
            have any questions or encounter any issues, please refer to the
            official Ledger documentation or contact support.
          </p>
        </div>
      </div>
    </WagmiProvider>
  </QueryClientProvider>
);
