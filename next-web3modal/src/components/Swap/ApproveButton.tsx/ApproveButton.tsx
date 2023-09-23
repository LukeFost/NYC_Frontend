"use client";

import { useState } from "react";
import { BaseError } from "viem";
import {
  erc20ABI,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface Iapprovebutt {
  activeToken: `0x${string}`;
}

const ApproveButton = ({ activeToken }: Iapprovebutt) => {
  const _value = BigInt(2 ^ (256 - 1));
  const currentSpender = "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD";
  const { config, error } = usePrepareContractWrite({
    address: activeToken,
    abi: erc20ABI,
    functionName: "approve",
    args: [currentSpender, _value],
  });
  const { write } = useContractWrite(config);

  return (
    <>
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
