import {
  faCode,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure } from '@headlessui/react'

export const Navigation: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setOpen }) => {
  return (
    <Disclosure
      as="nav"
      className="z-20 top-0 left-0 fixed right-0 bg-white shadow-sm"
    >
      <div className="mx-auto px-2 sm:px-2 lg:px-6 max-w-8xl">
        <div className="relative flex h-24 items-center justify-between">
          <div className="flex flex-1 items-center justify-start lg:flex-none">
            <div className="flex flex-shrink-0 items-center space-x-4">
              <FontAwesomeIcon icon={faCode} className="h-10" />
              <span className="text-port-black text-3xl font-semibold">
                CodeSuite
              </span>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center rounded-full p-2 h-14 w-14 bg-port-gray text-gray-900 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">user icon</span>
            <FontAwesomeIcon
              icon={faUser}
              className="h-8 text-white drop-shadow-md"
            />
          </button>
        </div>
      </div>
    </Disclosure>
  )
}
