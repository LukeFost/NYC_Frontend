"use client";

import { useEffect, useState } from "react";
import { BaseError } from "viem";
import { parseEther } from "viem";
import {
  erc20ABI,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useNetwork,
  useAccount,
} from "wagmi";
import { swapRouter_abi } from "../../ABI/swapRouter_abi";
import { swapRouter4_abi } from "../../ABI/swapRouter4_abi";
import {
  customChangerMinimum,
  UniV3,
  targetDomain,
} from "../../../Recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";

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
  const { address } = useAccount();
  const newUniV3 = useRecoilValue(UniV3);
  const futureDomain = useRecoilValue(targetDomain);

  const [customChangeAmount, setCustomChangeAmount] =
    useRecoilState(customChangerMinimum);
  const [currentSpender, setCurrentSpender] = useState<`0x${string}`>("0x");
  const [selectedAbi, setSelectedAbi] = useState<any>(swapRouter_abi);

  useEffect(() => {
    setSelectedAbi(newUniV3 ? swapRouter_abi : swapRouter4_abi);
  }, [newUniV3]);

  useEffect(() => {
    if (newUniV3) {
      chain?.name === "Arbitrum Goerli"
        ? setCurrentSpender("0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0")
        : setCurrentSpender("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45");
    } else {
      chain?.name == "Gnosis"
        ? setCurrentSpender("0x8c1698Ae4c9F5f9b29681ACcD0E6b8c88273ed44")
        : setCurrentSpender("0x8c05fEE7945076d7FB87a9318702eF7858Db19D5");
    }
  }, [newUniV3]);

  const ExactInputSingleParams = {
    tokenIn: tokenIn,
    tokenOut: tokenOut,
    fee: fee,
    recipient: recipient,
    amountIn: amountIn,
    amountOutMinimum: amountOutMinimum,
    sqrtPriceLimitX96: sqrtPriceLimitX96,
  };

  const argsForContract = newUniV3
    ? [ExactInputSingleParams]
    : [tokenIn, amountIn, futureDomain, address, tokenOut];
  const functionNameForContract = newUniV3
    ? "exactInputSingle"
    : "swapToOtherChain";

  const { config, error, data } = usePrepareContractWrite({
    address: currentSpender,
    abi: selectedAbi,
    functionName: functionNameForContract,
    args: argsForContract,
    value: parseEther("0.1"),
  });

  useEffect(() => {
    if (data && customChangeAmount !== (data?.result as unknown as bigint)) {
      setCustomChangeAmount(data.result as unknown as bigint);
      console.log("My request for DATA!!!");
    }
  }, [data, customChangeAmount, setCustomChangeAmount]);
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
