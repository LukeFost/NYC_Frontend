"use client";
import React, { useState, useEffect } from "react";
import {
  token0,
  token1,
  DoSwap,
  DoSwitch,
  tok0Amount,
  tok1Amount,
  feeLevel,
  amountOutMinimum,
  sqrtPriceLimitX96,
} from "../../../Recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useContractReads, erc20ABI, useAccount, useNetwork } from "wagmi";
import { formatUnits, parseUnits } from "viem";
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
  const currentFeeLevel = useRecoilValue(feeLevel);
  const currentAmountOutMinimum = useRecoilValue(amountOutMinimum);
  const currentSqrtPriceLimitX96 = useRecoilValue(sqrtPriceLimitX96);
  const [TheSwitch, setDoSwitch] = useRecoilState(DoSwitch);
  const [atok1Amount, setTok1Amount] = useRecoilState(tok1Amount);
  const [atok0Amount, setAToke0Amount] = useRecoilState(tok0Amount);
  const [approveVisibility, setApprovalVisibility] = useRecoilState(DoSwap);
  const [activeToken, setActiveToken] = useState<`0x${string}`>("0x");
  const [unActiveToken, setUnActiveToken] = useState<`0x${string}`>("0x");
  const [userAddress, setUserAddress] = useState<`0x${string}`>("0x");
  const [allowance, setAllowance] = useState<bigint>(BigInt(0));
  const [tokenDecimals, setTokenDecimals] = useState(0);
  const [tokenInAmount, setTokenInAmount] = useState<bigint>(BigInt(0));

  // Now I have the state for Doswap, token0, & token1
  //   // Now I have to check state for switch
  const { chain } = useNetwork();
  const currentSpender =
    chain?.name == "Arbitrum Goerli"
      ? "0xab7664500b19a7a2362Ab26081e6DfB971B6F1B0"
      : "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
  const { address } = useAccount();
  useEffect(() => {
    if (address) {
      setUserAddress(address);
    } else {
      setUserAddress("0x");
    }
  }, [address]);

  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        address: activeToken,
        abi: erc20ABI,
        functionName: "allowance",
        args: [userAddress, currentSpender],
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
        setAllowance(BigInt(data[0].result.toString()));
        console.log("Set allowance to:", data[0].result.toString());
      }

      if (data[1]?.result) {
        const decimalsValue =
          typeof (data[1].result as any).toNumber === "function"
            ? (data[1].result as any).toNumber()
            : data[1].result;

        setTokenDecimals(decimalsValue);
        console.log("Set token decimals to:", decimalsValue);
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
      if (atok0Amount > 0 && atok1Amount === 0) {
        const needApproval =
          Number(formatUnits(allowance, tokenDecimals)) < atok0Amount;
        setTokenInAmount(parseUnits(`${atok0Amount}`, tokenDecimals));
        setApprovalVisibility(needApproval);
        console.log(
          "Checking approval for token0. Need approval?",
          needApproval
        );
      } else if (atok1Amount > 0 && atok0Amount === 0) {
        const needApproval =
          Number(formatUnits(allowance, tokenDecimals)) < atok1Amount;
        setTokenInAmount(parseUnits(`${atok1Amount}`, tokenDecimals));
        setApprovalVisibility(needApproval);
        console.log(
          "Checking approval for token1. Need approval?",
          needApproval
        );
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
  }, [
    allowance,
    tokenDecimals,
    atok0Amount,
    atok1Amount,
    approveVisibility,
    setApprovalVisibility,
  ]);

  useEffect(() => {
    if (TheSwitch) {
      setActiveToken(currentToken0);
      setUnActiveToken(currentToken1);
      console.log("Active Token is token0:", currentToken0);
    } else {
      setActiveToken(currentToken1);
      setUnActiveToken(currentToken0);
      console.log("Active Token is token1:", currentToken1);
    }
  }, [TheSwitch, currentToken0, currentToken1]);

  const writeApproval = () => {
    console.log(allowance);
    console.log("What is the approval Now?", approveVisibility);
    console.log(Number(formatUnits(allowance, tokenDecimals)) < atok0Amount);
    console.log("TokenINAmount", tokenInAmount);
    console.log("tokenDecimals", tokenDecimals);
  };
  // if token0 is active, then use that

  return (
    <>
      <button onClick={writeApproval}>Click Me</button>
      {approveVisibility ? (
        <ApproveButton activeToken={activeToken} />
      ) : (
        <SwapButton
          tokenIn={activeToken}
          tokenOut={unActiveToken}
          fee={currentFeeLevel}
          recipient={address!}
          amountIn={tokenInAmount}
          amountOutMinimum={currentAmountOutMinimum}
          sqrtPriceLimitX96={currentSqrtPriceLimitX96}
        />
      )}
    </>
  );
};
{
}
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
