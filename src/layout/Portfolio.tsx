import { Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { DetailPanel } from "../components/panels/DetailPanel";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioLayout() {
  return (
    <Disclosure>
      {({ open }) => (
        <Fragment>
          <div className="relative flex items-stretch flex-shrink-0">
            <DetailPanel open={open}/>
            <div className="absolute left-0 xl:left-[22rem] w-full xl:w-[calc(100%-22rem)] min-h-screen">
              <Outlet />
            </div>
            <Disclosure.Button className={"fixed xl:hidden bottom-3 right-5 z-10 text-gray-900"}>
              <FontAwesomeIcon icon={faBars} className="h-6" />
            </Disclosure.Button>
          </div>
        </Fragment>
      )}
    </Disclosure>
  );
}
