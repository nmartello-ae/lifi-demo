import { BrowserRouter } from "react-router-dom";

import { Swap } from ".";

describe("SwapPage", () => {
  it("renders with default message", () => {
    cy.fixture("tokens-response.json").then(tokensResponse => {
      cy.intercept("GET", "https://li.quest/v1/tokens?chainTypes=*", {
        statusCode: 200,
        body: {
          tokens: tokensResponse,
        },
      }).as("getTokens");
    });

    cy.fixture("chains-response.json").then(chainsResponse => {
      cy.intercept("GET", "https://li.quest/v1/chains?chainTypes=*", {
        statusCode: 200,
        body: {
          chains: [chainsResponse],
        },
      }).as("getChains");
    });

    cy.fixture("routes-response.json").then(routesResponse => {
      cy.intercept("POST", "https://li.quest/v1/advanced/routes", {
        statusCode: 200,
        body: {
          routes: [routesResponse],
        },
      }).as("getRoutes");
    });

    cy.mount(
      <BrowserRouter>
        <Swap />
      </BrowserRouter>
    );
    cy.wait("@getTokens");
    cy.wait("@getChains");
    cy.findAllByText("Ethereum").should("exist").and("have.length", 2);

    cy.findByText("USDC").should("exist").click();
    cy.findByText("Exchange from").should("exist");
    cy.findByPlaceholderText("Search by token name or address").type("USDT");
    cy.findAllByText("USDT").eq(1).click();
    cy.findByPlaceholderText("0").type("10000");
    cy.wait("@getRoutes");
    cy.findByText("1 ETH ≈ 2,200.585915 USDT").should("exist");
  });
});
