import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';
import { FaCaretDown } from 'react-icons/fa';

type Props = {
  label: string;
  children: React.ReactNode;
  className: string;
  closeOnClick?: boolean;
};

const Popup = ({ label, children, className, closeOnClick = false }: Props) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              open && 'text-opacity-90',
              'group inline-flex items-center rounded-md px-3 py-2  font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              className
            )}
          >
            <span>{label}</span>
            <FaCaretDown
              className={clsx(
                open && 'text-opacity-70',
                'ml-2 h-3 w-3 transition duration-150 ease-in-out group-hover:text-opacity-80'
              )}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-2/3 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              {({ close }) => (
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="relative grid gap-1 bg-white p-4 lg:grid-cols-2"
                    onClick={() => (closeOnClick ? close() : () => '')}
                  >
                    {children}
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Popup;
