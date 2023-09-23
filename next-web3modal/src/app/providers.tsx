"use client";

import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { RecoilRoot } from "recoil";

import { chains, config, walletConnectProjectId } from "../wagmi";

const ethereumClient = new EthereumClient(config, chains);

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <RecoilRoot>
      <WagmiConfig config={config}>
        {mounted && children}
        <Web3Modal
          projectId={walletConnectProjectId}
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
    </RecoilRoot>
  );
}
