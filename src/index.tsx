import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Swap } from "@/pages/Swap";
import { InsideLedgerDapp } from "@/pages/InsideLedgerDapp";
import { NotFound } from "@/pages/NotFound";
import { TermsAndConditions } from "@/pages/TermsAndConditions";

import { LedgerIframeEmbed } from "./pages/InsideLedgerDapp/LedgerIframeEmbed";

import "@/styles/index.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/" element={<Swap />} />
        <Route path="/inside-ledger-dapp" element={<InsideLedgerDapp />} />
        {import.meta.env.MODE !== "production" && (
          <Route path="/ledger-iframe-embed" element={<LedgerIframeEmbed />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);
