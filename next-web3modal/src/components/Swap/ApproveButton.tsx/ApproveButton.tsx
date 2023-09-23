"use client";

import { useState } from "react";
import { BaseError, parseEther } from "viem";
import {
  erc20ABI,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface Iapprovebutt {
  activeToken: `0x${string}`;
}

const ApproveButton = ({ activeToken }: Iapprovebutt) => {
  const { chain } = useNetwork();
  const _value = parseEther("99999999999999999999999999999999999999999999999");
  const currentSpender =
    chain?.name == "Arbitrum Goerli"
      ? "0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0"
      : "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
  const { config, error } = usePrepareContractWrite({
    address: activeToken,
    abi: erc20ABI,
    functionName: "approve",
    args: [currentSpender, _value],
  });
  const { write, isSuccess } = useContractWrite(config);
  const successToast = "Only-Success-Toasts";

  if (isSuccess) {
    toast("Your transaction is Complete!", { toastId: successToast });
  }

  return (
    <>
      <ToastContainer />
      <button disabled={!write} onClick={() => write?.()}>
        Approve
      </button>
      {error && (
        <div>
          An error has occurred prepping the transaction: {error.message}
        </div>
      )}
    </>
  );
};

export default ApproveButton;
