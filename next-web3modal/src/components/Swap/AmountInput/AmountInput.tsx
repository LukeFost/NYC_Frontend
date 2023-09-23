"use client";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tok1Amount, tok0Amount, DoSwitch } from "../../../Recoil/atom";

interface AmountInputInterface {
  clickedState: boolean;
}

const AmountInput = ({ clickedState }: AmountInputInterface) => {
  const [inputValue, setInputValue] = useRecoilState(tok1Amount);
  const [otherInputValue, setOtherInputValue] = useRecoilState(tok0Amount);
  const theDoSwitch = useRecoilValue(DoSwitch);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (theDoSwitch) {
      setInputValue(Number(e.target.value));
    } else {
      setOtherInputValue(Number(e.target.value));
    }
  };

  // If theDoSwitch is true and clickedState is false, disable the input;
  const isDisabled = theDoSwitch ? !clickedState : clickedState;

  return (
    <input
      type="number"
      placeholder="..."
      className="input input-bordered max-w-xs"
      onChange={handleInputChange}
      disabled={isDisabled}
    />
  );
};

export default AmountInput;
// if theDoSwitch is true then clickedState false is disabled
// Then setInputValue to e.target.value
// if theDoSwitch is false then clickedState true is disabled
// Then setInputValue to e.target.value
