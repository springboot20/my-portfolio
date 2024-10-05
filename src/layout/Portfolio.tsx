import { Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { DetailPanel } from "../components/panels/DetailPanel";
import { Outlet } from "react-router-dom";

export default function PortfolioLayout() {
  return (
    <Disclosure>
      {({ open, close }) => (
        <Fragment>
          <div className="relative flex items-stretch flex-shrink-0">
            <DetailPanel open={open} close={close} />
            <div className="absolute left-0 xl:left-[22rem] w-full xl:w-[calc(100%-22rem)] min-h-screen">
              <Outlet />
            </div>
          </div>
        </Fragment>
      )}
    </Disclosure>
  );
}