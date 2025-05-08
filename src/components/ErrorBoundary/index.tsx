import React, { PropsWithChildren } from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  { error: Error | null }
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(e: Error): void {
      new Error("Failed to render the component.", {
        cause: e,
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="m-10 flex h-full w-full flex-col items-center justify-center gap-2">
          <button onClick={() => window.location.reload()}>
            <ArrowPathIcon className="w-5 hover:text-slate-400" />
          </button>
          <p className="mx-5 max-w-sm text-center text-xs font-semibold text-gray-500">
            Oops! Something went wrong. Please try again clicking in the Refresh
            button. If the error persists, please contact the support team.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
