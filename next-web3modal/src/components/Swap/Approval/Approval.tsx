"use client";
import React, { useState, useEffect } from "react";
import {
  token0,
  token1,
  DoSwap,
  DoSwitch,
  tok0Amount,
  tok1Amount,
} from "../../../Recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useContractReads, erc20ABI, useAccount } from "wagmi";
import { formatUnits } from "viem";
import SwapButton from "../SwapButton/SwapButton";
import ApproveButton from "../ApproveButton.tsx/ApproveButton";

type Contractread = {
  restult?: {
    toNumber?: () => number;
    [key: string]: any;
  };
};

type Data = Contractread[];

const Approval = () => {
  const currentToken0 = useRecoilValue(token0);
  const currentToken1 = useRecoilValue(token1);
  const [TheSwitch, setDoSwitch] = useRecoilState(DoSwitch);
  const [atok1Amount, setTok1Amount] = useRecoilState(tok1Amount);
  const [atok0Amount, setAToke0Amount] = useRecoilState(tok0Amount);
  const [approveVisibility, setApprovalVisibility] = useRecoilState(DoSwap);
  const [activeToken, setActiveToken] = useState<`0x${string}`>("0x");
  const [allowance, setAllowance] = useState(BigInt(0));
  const [tokenDecimals, setTokenDecimals] = useState(0);

  // Now I have the state for Doswap, token0, & token1
  //   // Now I have to check state for switch
  const { address } = useAccount();
  const spender = "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD";

  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        address: activeToken,
        abi: erc20ABI,
        functionName: "allowance",
        args: [address!, spender],
      },
      {
        address: activeToken,
        abi: erc20ABI,
        functionName: "decimals",
      },
    ],
  });

  useEffect(() => {
    if (isSuccess && data) {
      if (data[0]?.result) {
        setAllowance(data[0].result);
      }

      if (data[1]?.result) {
        const decimalsValue =
          typeof (data[1].result as any).toNumber === "function"
            ? (data[1].result as any).toNumber()
            : data[1].result;

        setTokenDecimals(decimalsValue);
      }
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (
      allowance !== null &&
      allowance !== undefined &&
      tokenDecimals !== null &&
      tokenDecimals !== undefined
    ) {
      if (!atok0Amount && atok1Amount) {
        const needApproval =
          Number(formatUnits(allowance, tokenDecimals)) < atok0Amount;
        setApprovalVisibility(needApproval);
      } else if (atok0Amount && !atok1Amount) {
        const needApproval =
          Number(formatUnits(allowance, tokenDecimals)) < atok1Amount;
        setApprovalVisibility(needApproval);
      } else {
        console.log(
          allowance,
          tokenDecimals,
          atok0Amount,
          atok1Amount,
          approveVisibility
        );
      }
    }
  }, [allowance, tokenDecimals, atok0Amount, atok1Amount]);

  useEffect(() => {
    if (TheSwitch) {
      setActiveToken(currentToken0);

      console.log("Active Token is token0:", currentToken0);
    } else if (!TheSwitch) {
      setActiveToken(currentToken1);
      console.log("Active Token is token1:", currentToken1);
    } else {
      console.log("Error in Setting ActiveToken!");
    }
  }, [TheSwitch, currentToken0, currentToken1]);

  const writeApproval = () => {
    console.log(tokenDecimals);
    console.log(allowance);
    console.log(approveVisibility);
  };
  // if token0 is active, then use that

  return (
    <>
      {approveVisibility ? (
        <ApproveButton activeToken={activeToken} />
      ) : (
        <SwapButton />
      )}
    </>
  );
};

export default Approval;

// import the two addresses
// if switch is up position choose token0
// if switch is in down position choose token1
// With the local token address picked
// read the erc20abi for allowance and save to local var
// get erc20 decimals and set the amount to that power
// compare the local var for allowance to the input number value in select token(making sure to set to the decimal power)
// If allowance is less than input number value enable button and wait for click
// If allowance is greater than input number value hide button and setSwap recoil to true
// {Swap ? <Swap/> : <Approve/>}
