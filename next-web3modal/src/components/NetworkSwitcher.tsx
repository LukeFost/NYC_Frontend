"use client";

import { useNetwork, useSwitchNetwork } from "wagmi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <div>
      {switchNetwork && (
        <div className="dropdown dropdown-end pl-2">
          <label tabIndex={0} className="btn btn-base rounded-btn">
            {chain?.name ?? chain?.id}
            {chain?.unsupported && "Unsupported"}
          </label>
          <ul className="menu dropdown-content z-[1] p-2 shadow bg-base rounded-box w-52 mt-4">
            {chains.map((x) =>
              x.id === chain?.id ? null : (
                <li className="" key={x.id} onClick={() => switchNetwork(x.id)}>
                  {x.name}
                  {isLoading && x.id === pendingChainId && " (switching)"}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      <div>{error?.message}</div>
    </div>
  );
}
