import React, { useEffect, forwardRef, ForwardedRef } from "react";
import { scrollReveal } from "../utils/scrollreveal.config";
import { Disclosure } from "@headlessui/react";

export const ScrollReveal = forwardRef<
  HTMLElement | null,
  { children: React.ReactNode; options?: { [x: string]: any } }
>(({ children, options }, ref: ForwardedRef<HTMLElement | null>) => {
  useEffect(() => {
    if (ref && "current" in ref && ref.current && options) {
      //   console.log(options);
      scrollReveal.reveal(ref?.current!, options!);
    }
  }, [ref]);

  return (
    <Disclosure as={"div"} ref={ref}>
      {children}
    </Disclosure>
  );
});
