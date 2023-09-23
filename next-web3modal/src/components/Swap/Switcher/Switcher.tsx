"use client";

import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

const Switcher = () => {
  const [arrowClicked, setArrowClicked] = useState(false);
  return (
    <div className="flex justify-center mt-2 mb-2">
      <button onClick={() => setArrowClicked(!arrowClicked)}>
        {arrowClicked ? (
          <div className="flex items-center bg-white bg-opacity-50 rounded p-2 inline-block">
            <ArrowDownIcon className="w-5 h-5 stroke-current"></ArrowDownIcon>
          </div>
        ) : (
          <div className="flex items-center bg-white bg-opacity-50 rounded p-2 inline-block">
            <ArrowUpIcon className="inline-block w-5 h-5 stroke-current"></ArrowUpIcon>
          </div>
        )}
      </button>
    </div>
  );
};

export default Switcher;
