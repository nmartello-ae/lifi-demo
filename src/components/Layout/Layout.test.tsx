import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { Layout } from "./";

describe("Layout", () => {
  it("renders with default message", () => {
    render(
      <Layout title="Swap USDL" subTitle="Swap USDL to and from USDC / USDT.">
        <div>hello world</div>
      </Layout>
    );
    expect(
      screen.getByText(
        "Swap USDL is not available to residents of the US and certain other restricted countries."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Swap USDL")).toBeInTheDocument();
    expect(
      screen.getByText("Swap USDL to and from USDC / USDT.")
    ).toBeInTheDocument();
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });

  it("renders with terms and conditions link", () => {
    render(
      <BrowserRouter>
        <Layout showTermsAndConditionsLink>
          <div>hello world</div>
        </Layout>
      </BrowserRouter>
    );

    expect(
      screen.getByText(
        "Swap USDL is not available to residents of the US and certain other restricted countries."
      )
    ).toBeInTheDocument();

    const termnsAndConditionsLink = screen.getByRole("link", {
      name: "Please refer to the Terms and Conditions here for more information.",
    });
    expect(termnsAndConditionsLink).toHaveAttribute(
      "href",
      "/terms-and-conditions"
    );
  });
});
