import { faBars, faClose, faCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { classNames } from '../../utils';

export const Navigation: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  const navLinks: { to: string; label: string }[] = [
    {
      to: '#about',
      label: 'home',
    },
    {
      to: '#services',
      label: 'services',
    },
    {
      to: '#recommendation',
      label: 'recommendation',
    },
  ];

  const handleActive = ({ isActive }: { isActive: boolean }) => {
    return classNames(
      isActive ? 'text-gray-800' : 'text-gray-600',
      'block text-2xl font-medium flex-shrink-0 capitalize py-2'
    );
  };
  return (
    <Disclosure as='nav' className='z-20 top-0 left-0 fixed right-0 bg-white shadow-sm'>
      {({ open }) => (
        <>
          <div className='mx-auto px-2 sm:px-2 lg:px-4 max-w-8xl'>
            <div className='relative flex h-24 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 dark:text-white text-gray-900 hover:dark:bg-gray-700 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  {open ? (
                    <FontAwesomeIcon icon={faClose} className='h-10 text-gray-800 ' />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className='h-10 text-gray-800' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex flex-1 items-center justify-center lg:justify-start lg:flex-none'>
                <div className='flex flex-shrink-0 items-center space-x-4'>
                  <FontAwesomeIcon icon={faCode} className='h-10' />
                  <span className='text-port-black text-3xl font-semibold'>Code Dev</span>
                </div>
              </div>

              <Disclosure as='div' className='space-x-10 items-center hidden lg:flex'>
                {navLinks.map(({ to, label }) => {
                  return (
                    <NavLink
                      key={label}
                      to={to}
                      className={(active) =>
                        classNames(
                          active ? 'text-port-gray' : 'text-gray-800',
                          'text-2xl capitalize font-semibold'
                        )
                      }>
                      {label}
                    </NavLink>
                  );
                })}
              </Disclosure>

              <button
                onClick={() => setOpen(true)}
                className='flex items-center justify-center rounded-full p-2 h-14 w-14 bg-port-gray text-gray-900 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <FontAwesomeIcon icon={faUser} className='h-8 text-white drop-shadow-md' />
              </button>
            </div>
          </div>
          <Disclosure.Panel className='lg:hidden bg-white'>
            <div className='space-y-3 px-4 py-4'>
              {navLinks.map((item) => (
                <NavLink key={item.label} to={item.to} className={handleActive}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
