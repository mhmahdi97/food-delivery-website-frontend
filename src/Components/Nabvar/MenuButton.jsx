import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function MenuButton() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-menu text-menu-primary px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Menu
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-icon"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "menu-active" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "menu-active" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Details
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "menu-active" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Category
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "menu-active" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    My Favourites
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "menu-active" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "menu-active" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Log In/Sign Up
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}