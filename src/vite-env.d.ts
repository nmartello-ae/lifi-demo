/// <reference types="vite/client" />
/// <reference types="@types/node/timers"/>
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  const src: string;
  export default src;
}

declare const APP_VERSION: string;

declare module globalThis {
  var processEnv: Record<string, string | number | boolean>;
  var config: Record<string, string | number | boolean>;
}
