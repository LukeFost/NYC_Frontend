"use client";

import React, { useState, useEffect } from "react";
import Ellipsis from "./Hamburger/Hamburger";
import Hamburger from "./Ellipsis/Ellipsis";
import Link from "next/link";
import { NetworkSwitcher } from "../NetworkSwitcher";
import { Web3Button } from "@web3modal/react";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        {/* <div className="flex-none">
          <Ellipsis></Ellipsis>
        </div> */}

        <div className="flex-1">
          <Link href={"/"}>
            <label className="btn btn-ghost normal-case text-xl">NYC</label>
          </Link>
        </div>
        <div className="flex-none pr-4">
          <NetworkSwitcher />
        </div>
        <div className="flex-none pr-4">
          <Web3Button />
        </div>
        <div className="flex-none">
          <Hamburger></Hamburger>
        </div>
      </div>
    </>
  );
};

export default NavBar;
