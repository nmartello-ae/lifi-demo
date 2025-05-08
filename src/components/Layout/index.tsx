import clsx from "clsx";
import { Link } from "react-router-dom";

import Liftdollar from "@/assets/liftdollar.svg?react";

import "./Layout.styles.scss";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  showTermsAndConditionsLink?: boolean;
}

export const Layout = ({
  children,
  title,
  subTitle,
  showTermsAndConditionsLink,
}: LayoutProps) => (
  <>
    <div
      className={clsx("w-full bg-bright p-5 text-sm", "flex justify-center")}
    >
      <p>
        Swap USDL is not available to residents of the US and certain other
        restricted countries.&nbsp;
        {showTermsAndConditionsLink && (
          <Link to="/terms-and-conditions">
            Please refer to the Terms and Conditions here for more information.
          </Link>
        )}
      </p>
    </div>
    <div className="mx-auto flex w-full max-w-[1320px] justify-center">
      <div className="mx-5 mt-5 flex w-full justify-between">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://liftdollar.com/"
        >
          <Liftdollar />
        </a>
      </div>
    </div>
    <div
      className={clsx(
        "sky-background",
        "flex flex-col items-center gap-[20px] md:gap-[50px]",
        "ms:pb-[40px] h-[350px] w-full py-[80px]"
      )}
    >
      <div className="text-center">
        {title && (
          <h1 className="mb-4 text-5xl font-[400] tracking-[-0.04em]">
            {title}
          </h1>
        )}
        {subTitle && <h2 className="text-[20px] font-[400]">{subTitle}</h2>}
      </div>
    </div>
    <div
      className={clsx(
        "m-auto px-10 py-10",
        "flex flex-col items-center",
        "relative mt-[-150px]",
        "w-full max-w-[1320px]"
      )}
    >
      {children}
    </div>
    <div className="mt-10 flex w-full justify-center px-5 py-5">
      <div
        className={clsx(
          "border-t border-gray-200",
          "text-center text-[11px]",
          "w-full max-w-[1320px]",
          "pt-5"
        )}
      >
        Swap USDL Platform services are provided by Bruntal SA. Swap USDL
        Platform is not a &#34;regulated&#34; service and is not designed to
        adhere to any specific regulatory framework.
      </div>
    </div>
  </>
);
