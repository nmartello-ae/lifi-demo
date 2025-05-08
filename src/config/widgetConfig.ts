import { WidgetConfig, ChainId } from "@lifi/widget";

export const INTEGRATOR_NAME = "liftdollar-liquidity";

export const widgetConfig: WidgetConfig = {
  chains: {
    allow: [
      ChainId.BTC,
      ChainId.ETH,
      ChainId.ARB,
      ChainId.OPT,
      ChainId.SOL,
      ChainId.POL,
      ChainId.BAS,
      ChainId.BSC,
      ChainId.CEL,
      ChainId.AVA,
    ],
  },
  tokens: {
    allow: [
      {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        chainId: ChainId.ETH,
      },
      {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        chainId: ChainId.ETH,
      },
      {
        address: "0xbdC7c08592Ee4aa51D06C27Ee23D5087D65aDbcD",
        chainId: ChainId.ETH,
      },
      {
        address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        chainId: ChainId.SOL,
      },
      {
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        chainId: ChainId.SOL,
      },
    ],
  },
  toChain: ChainId.ETH,
  fromToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  toToken: "0xbdc7c08592ee4aa51d06c27ee23d5087d65adbcd",
  integrator: INTEGRATOR_NAME,
  theme: {
    palette: {
      primary: {
        main: "#20303b",
      },
      secondary: {
        main: "#FFFFFF",
      },
      background: {
        default: "#FFFFFF",
        paper: "#f8f8fa",
      },
      text: {
        primary: "#00070F",
        secondary: "#43494e",
      },
    },
    container: {
      boxShadow: "0px 3px 16px 0px #0000000f",
      borderRadius: "20px",
      background: "#21cffa",
      height: "100%",
    },
    shape: {
      borderRadiusSecondary: 20,
    },
  },
  hiddenUI: ["language", "appearance"],
};
