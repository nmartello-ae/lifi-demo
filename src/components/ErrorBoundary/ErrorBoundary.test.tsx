import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ErrorBoundary } from ".";

const Child = () => {
  throw new Error();
};

describe("Error Boundary", () => {
  it("should render error boundary component when there is an error", () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );
    expect(
      screen.getByText(
        "Oops! Something went wrong. Please try again clicking in the Refresh button. If the error persists, please contact the support team."
      )
    ).toBeInTheDocument();
  });
});
