import React, { useEffect, forwardRef, ForwardedRef } from 'react';
import { scrollReveal } from '../utils/scrollreveal.config';
import { Disclosure } from '@headlessui/react';

export const ScrollReveal = forwardRef<HTMLElement | null, { children: React.ReactNode }>(
  ({ children }, ref: ForwardedRef<HTMLElement | null>) => {
    useEffect(() => {
      if (ref && 'current' in ref && ref.current) {
        scrollReveal.reveal(ref.current, {});
      }
    }, [ref]);

    return (
      <Disclosure as={'div'} ref={ref}>
        {children}
      </Disclosure>
    );
  }
);
