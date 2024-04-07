import { ButtonProps } from '../../types/button.type';
import { classNames } from '../../utils';

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(
        'inline-flex flex-shrink-0 justify-center items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shadow-sm transition px-5 py-4',
        rest.className || ''
      )}>
      {children}
    </button>
  );
};
