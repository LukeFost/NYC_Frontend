//https://medium.com/@cyri113/web3-ui-ux-token-selector-f429b5f1f07f
"use client";

import React, { useEffect, useState } from "react";
import { Token } from "../Interfaces/interfaces";
import TokenModal from "../TokenModal/TokenModal";
import { useRecoilState } from "recoil";
import { token0, token1 } from "../../../../Recoil/atom";
import { RecoilRoot } from "recoil";

interface TokenSelectorProps {
  clickedState: boolean;
}

const TokenSelector = ({ clickedState }: TokenSelectorProps) => {
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(
    undefined
  );

  return (
    <RecoilRoot>
      <div className="flex justify-center items-center">
        <TokenModal
          selectedToken={selectedToken}
          onClick={(token: Token) => setSelectedToken(token)}
          clickedState={clickedState}
        />
      </div>
    </RecoilRoot>
  );
};

export default TokenSelector;
