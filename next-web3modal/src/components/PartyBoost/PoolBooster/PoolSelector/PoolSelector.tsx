//https://medium.com/@cyri113/web3-ui-ux-token-selector-f429b5f1f07f
"use client";

import React, { useState } from "react";
import { Pool } from "../Interfaces/interfaces";
import PoolModal from "../PoolModal/PoolModal";

interface PoolSelectorProps {
  clickedState: boolean;
}

const PoolSelector = ({ clickedState }: PoolSelectorProps) => {
  const [selectedPool, setSelectedPool] = useState<Pool | undefined>(undefined);

  return (
    <div className="flex justify-center items-center">
      <PoolModal
        selectedPool={selectedPool}
        onClick={(pool: Pool) => setSelectedPool(pool)}
        clickedState={clickedState}
      />
    </div>
  );
};

export default PoolSelector;
