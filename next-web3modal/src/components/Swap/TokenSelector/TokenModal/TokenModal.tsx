//Referenced and partially sourced from: https://medium.com/@cyri113/web3-ui-ux-token-selector-f429b5f1f07f
"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ITokenModal, Token } from "../Interfaces/interfaces";
import { TokenButton } from "../TokenButton/TokenButton";
import TokenList from "../TokenList/TokenList";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { token0, token1 } from "../../../../Recoil/atom";

export default function TokenModal({
  selectedToken,
  onClick,
  clickedState,
}: ITokenModal) {
  const [currentToken0, setCurrentToken0] = useRecoilState(token0);
  const [currentToken1, setCurrentToken1] = useRecoilState(token1);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleClick(token: Token) {
    onClick(token);
    closeModal();
  }

  useEffect(() => {
    if (clickedState) {
      //settoken0state
      setCurrentToken0(selectedToken?.address!);
    } else {
      //settoken1state
      setCurrentToken1(selectedToken?.address!);
    }

    //if both have state fetchpool address
  }, [selectedToken, currentToken0, currentToken1]);

  return (
    <>
      <TokenButton selectedToken={selectedToken} onClick={() => openModal()} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Select a token
                  </Dialog.Title>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full mt-2 mb-2 max-w-xs"
                  />
                  <div className="mt-2">
                    <TokenList
                      onClick={handleClick}
                      selectedToken={selectedToken}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// The token button moves into the modal
// we add a function that is called when the button is called
// we declare a state that allows us to control whether the modal is visible
// we declare two function closeModal() and openModal() that is called respectively.
