"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  firstInputField,
  secondInputField,
  thirdInputField,
} from "../../../Recoil/atom";
interface InputAmountProps {
  inputId: string;
}

const InputAmount = ({ inputId }: InputAmountProps) => {
  const [genericFirstInput, setGenericFirstInput] =
    useRecoilState(firstInputField);
  const [genericSecondInput, setGenericSecondInput] =
    useRecoilState(secondInputField);
  const [genericThirdInput, setGenericThirdInput] =
    useRecoilState(thirdInputField);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputId) {
      setGenericFirstInput(Number(e.target.value));
      //firstInputField
    } else if (inputId === "second") {
      setGenericSecondInput(Number(e.target.value));
      //secondInputField
    } else if (inputId === "third") {
      setGenericThirdInput(Number(e.target.value));
      //thirdInputField
    } else {
      console.log("Erred at InputAmounts after Inputid");
    }
  };

  return (
    <input
      type="number"
      placeholder="0.0"
      className="input input-bordered w-full max-w-xs h-18"
      onChange={handleInputChange}
    ></input>
  );
};

export default InputAmount;
