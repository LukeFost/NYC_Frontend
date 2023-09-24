"use client";

import { useState } from "react";
import { BaseError } from "viem";
import {
  erc20ABI,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import { swapRouter_abi } from "../../ABI/swapRouter_abi";

interface ISwapButton {
  tokenIn: `0x${string}`;
  tokenOut: `0x${string}`;
  fee: number;
  recipient: `0x${string}`;
  amountIn: bigint;
  amountOutMinimum: bigint;
  sqrtPriceLimitX96: bigint;
}

const SwapButton = ({
  tokenIn,
  tokenOut,
  fee,
  recipient,
  amountIn,
  amountOutMinimum,
  sqrtPriceLimitX96,
}: ISwapButton) => {
  const { chain } = useNetwork();

  const activeAddress =
    chain?.name === "Arbitrum Goerli"
      ? "0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0"
      : "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";

  const ExactInputSingleParams = {
    tokenIn: tokenIn,
    tokenOut: tokenOut,
    fee: fee,
    recipient: recipient,
    amountIn: amountIn,
    amountOutMinimum: amountOutMinimum,
    sqrtPriceLimitX96: sqrtPriceLimitX96,
  };

  const { config, error } = usePrepareContractWrite({
    address: activeAddress,
    abi: swapRouter_abi,
    functionName: "exactInputSingle",
    args: [ExactInputSingleParams],
    value: BigInt(0),
  });
  const { write, isLoading } = useContractWrite(config);

  let noValue = amountIn <= 0;

  return (
    <>
      {isLoading ? (
        <button
          className="btn btn-wide"
          disabled={true}
          onClick={() => write?.()}
        >
          <span className="loading loading-spinner"></span>
          Loading...
        </button>
      ) : (
        <button
          className="btn btn-wide"
          disabled={!write || noValue}
          onClick={() => write?.()}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            ></path>
          </svg>
          Swap
        </button>
      )}
      {error && (
        <div>
          An error has occurred prepping the transaction: {error.message}
        </div>
      )}
    </>
  );
};

export default SwapButton;
