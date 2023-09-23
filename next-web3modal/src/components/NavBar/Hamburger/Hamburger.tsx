"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useState } from "react";

const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={() => setIsClicked(!isClicked)}
            className="swap swap-rotate btn btn-ghost"
          >
            {isClicked ? (
              <>
                {" "}
                <Bars3Icon className="swap-off inline-block w-5 h-5 stroke-current"></Bars3Icon>
                <XMarkIcon className="swap-on inline-block w-5 h-5 stroke-current"></XMarkIcon>
              </>
            ) : (
              <>
                {" "}
                <Bars3Icon className="swap-on inline-block w-5 h-5 stroke-current"></Bars3Icon>
                <XMarkIcon className="swap-off inline-block w-5 h-5 stroke-current"></XMarkIcon>
              </>
            )}
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
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href={"/boost"}>Boost</Link>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href={"/swap"}>Swap</Link>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Hamburger;
