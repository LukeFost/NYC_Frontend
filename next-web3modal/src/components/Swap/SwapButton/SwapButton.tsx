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
  const { write } = useContractWrite(config);

  return (
    <>
      <button disabled={!write} onClick={() => write?.()}>
        Swap
      </button>
      {error && (
        <div>
          An error has occurred prepping the transaction: {error.message}
        </div>
      )}
    </>
  );
};

export default SwapButton;
