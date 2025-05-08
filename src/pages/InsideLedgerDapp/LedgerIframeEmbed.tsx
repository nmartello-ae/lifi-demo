import { useState, useEffect } from "react";
import { Button } from "@headlessui/react";

export const LedgerIframeEmbed = () => {
  const [address, setAddress] = useState<string | null>(null);
  const isConnected = !!address;

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet.");
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="mx-6 mt-9 flex flex-col items-center justify-center gap-5">
      <img
        className="h-10 w-40"
        src="https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-logo-long.svg"
        alt="Ledger"
      />
      <p className="text-center text-lg font-semibold">
        This is a demo of the <strong>Ledger</strong> integration with the{" "}
        <strong>LiftDollar</strong> dApp. You can use this to test the
        integration.
      </p>
      {isConnected ? (
        <>
          <div className="font-semibold">Connected: {address}</div>
          <Button
            className="mt-4 w-full max-w-sm rounded-lg bg-dark p-2 text-white"
            disabled
          >
            to Disconnect use your wallet
          </Button>
        </>
      ) : (
        <Button
          onClick={connectWallet}
          className="mt-4 w-full max-w-sm rounded-lg bg-dark p-2 text-white"
        >
          Connect wallet
        </Button>
      )}
      <iframe
        title="SwapUSDL"
        src={`${window.location.origin}/inside-ledger-dapp`}
        height="900px"
        width="100%"
        className="rounded-lg border-2 border-dashed border-gray-300"
      />
    </div>
  );
};
