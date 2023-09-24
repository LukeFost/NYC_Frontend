import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { goerli, gnosis, scrollSepolia, arbitrumGoerli } from "@wagmi/chains";

export const walletConnectProjectId = "9240491d00004f3f8ccb20ef90757e78";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrumGoerli, scrollSepolia, gnosis, goerli],
  [w3mProvider({ projectId: walletConnectProjectId })]
);

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
    version: 2,
  }),
  publicClient,
  webSocketPublicClient,
});

export { chains };
