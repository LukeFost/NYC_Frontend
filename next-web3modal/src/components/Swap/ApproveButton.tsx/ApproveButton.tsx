"use client";

import { useState, useEffect } from "react";
import { BaseError, parseEther } from "viem";
import {
  erc20ABI,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import { UniV3 } from "../../../Recoil/atom";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState, useRecoilValue } from "recoil";

interface Iapprovebutt {
  activeToken: `0x${string}`;
}

const ApproveButton = ({ activeToken }: Iapprovebutt) => {
  const { chain } = useNetwork();
  const _value = parseEther("99999999999999999999999999999999999999999999999");
  const newUniV3 = useRecoilValue(UniV3);
  const [currentSpender, setCurrentSpender] = useState<`0x${string}`>("0x");

  useEffect(() => {
    if (newUniV3) {
      chain?.name === "Arbitrum Goerli"
        ? setCurrentSpender("0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0")
        : setCurrentSpender("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45");
    } else {
      chain?.name === "Gnosis Chain"
        ? setCurrentSpender("0x8c05fEE7945076d7FB87a9318702eF7858Db19D5")
        : setCurrentSpender("0x8c1698Ae4c9F5f9b29681ACcD0E6b8c88273ed44");
    }
  }, [newUniV3]);

  const { config, error } = usePrepareContractWrite({
    address: activeToken,
    abi: erc20ABI,
    functionName: "approve",
    args: [currentSpender, _value],
  });
  const { write, isLoading } = useContractWrite(config);

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
          disabled={!write}
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
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            ></path>
          </svg>
          Approve
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

export default ApproveButton;
