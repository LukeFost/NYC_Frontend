//https://medium.com/@cyri113/web3-ui-ux-token-selector-f429b5f1f07f
"use client";

import React, { useState } from "react";
import { Token } from "../Interfaces/interfaces";
import TokenModal from "../TokenModal/TokenModal";

interface TokenSelectorProps {
  clickedState: boolean;
}

const TokenSelector = ({ clickedState }: TokenSelectorProps) => {
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(
    undefined
  );

  return (
    <div className="flex justify-center items-center">
      <TokenModal
        selectedToken={selectedToken}
        onClick={(token: Token) => setSelectedToken(token)}
        clickedState={clickedState}
      />
    </div>
  );
};

export default TokenSelector;
