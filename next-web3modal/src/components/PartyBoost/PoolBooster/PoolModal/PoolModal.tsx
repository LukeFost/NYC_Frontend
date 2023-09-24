// Referenced and partially sourced from: https://medium.com/@cyri113/web3-ui-ux-token-selector-f429b5f1f07f
"use client";

import { Dialog, Transition } from "@headlessui/react";
import { IPoolModal, Pool, PoolVector } from "../Interfaces/interfaces";
import { PoolButton } from "../PoolButton/PoolButton";
import PoolList from "../PoolList/PoolList";
import React, { useEffect, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { pool0, pool1, pools } from "../../../../Recoil/atom"; // Ensure you have updated these atoms as well
import { getAddress } from "viem";
import { useContractReads, erc20ABI, useNetwork } from "wagmi";

export default function PoolModal({
  selectedPool,
  onClick,
  clickedState,
}: IPoolModal) {
  const [currentPool0, setCurrentPool0] = useRecoilState(pool0);
  const [currentPool1, setCurrentPool1] = useRecoilState(pool1);

  // State for temp input values
  const [address, setAddress] = useState<`0x${string}`>("0x");
  const [warning, setWarning] = useState<boolean>(false);

  const [poolVector, setPoolVector] = useState<PoolVector | null>(null);

  const [currentPools, setPools] = useRecoilState(pools);

  const { chain } = useNetwork();

  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        address: address,
        abi: erc20ABI,
        functionName: "name",
      },
      {
        address: address,
        abi: erc20ABI,
        functionName: "symbol",
      },
    ],
  });

  const handleSubmit = async () => {
    try {
      if (isSuccess && data) {
        const localName = data[0]?.result!;
        const localSymbol = data[1]?.result;
        const localProtocol = chain?.name!;

        if (localName && localSymbol && localProtocol) {
          const pool: Pool = {
            name: localName,
            symbol: localSymbol,
            address,
          };

          const newPoolVector: PoolVector = {
            protocol: localProtocol,
            pool,
          };

          setPoolVector(newPoolVector);
          setWarning(false);
        }
      } else {
        setWarning(true);
        return null;
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while reading the contract.");
    }
  };

  useEffect(() => {
    if (poolVector) {
      const addressExists = currentPools.some(
        (existingPoolVector) =>
          existingPoolVector.pool.address === poolVector.pool.address
      );
      if (!addressExists) {
        setPools((prevPools) => [...prevPools, poolVector]);
        setWarning(false);
      } else {
        setWarning(true);
      }
    }
  }, [poolVector, pools]);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setWarning(false);
    setIsOpen(false);
  }

  useEffect(() => {
    if (selectedPool && selectedPool.address) {
      if (clickedState === true) {
        setCurrentPool0(selectedPool.address);
        console.log(selectedPool.address);
      } else if (clickedState === false) {
        setCurrentPool1(selectedPool.address);
        console.log(selectedPool.address);
      } else {
        console.log("ERROR IN CLICKSTATE");
      }
    }
  }, [clickedState, selectedPool, setCurrentPool0, setCurrentPool1]);

  useEffect(() => {
    console.log("Pool 0 Set", currentPool0);
    console.log("Selected Pool Logic, Pool 0", selectedPool?.address!);
  }, [currentPool0, selectedPool]);

  useEffect(() => {
    console.log("Pool 0 Set", currentPool1);
  }, [currentPool1, selectedPool]);

  function openModal() {
    setWarning(false);
    setIsOpen(true);
  }

  function handleClick(pool: Pool) {
    onClick(pool);
    closeModal();
  }

  return (
    <>
      <PoolButton selectedPool={selectedPool} onClick={() => openModal()} />

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Select a pool
                  </Dialog.Title>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder={isLoading ? "Loading..." : "Type here..."}
                      className="input input-bordered mt-2 mb-2 flex-grow mr-2.5"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const isValid = /^0x[a-fA-F0-9]{40}$/.test(inputValue);
                        if (isValid) {
                          setAddress(getAddress(inputValue));
                          setWarning(false);
                        } else {
                          setWarning(true);
                        }
                      }}
                    />
                    <button
                      onClick={handleSubmit}
                      className="btn btn-square justify-center items-center btn-outline w-12 h-12"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {warning ? (
                    <div className="alert alert-error">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Error!</span>
                    </div>
                  ) : null}
                  <div className="mt-2">
                    <PoolList
                      onClick={handleClick}
                      selectedPool={selectedPool}
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

// The pool button moves into the modal
// we add a function that is called when the button is clicked
// we declare a state that allows us to control whether the modal is visible
// we declare two functions closeModal() and openModal() that are called respectively
