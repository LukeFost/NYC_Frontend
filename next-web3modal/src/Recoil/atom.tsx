import { atom } from "recoil";
import {
  Token,
  TokenVector,
} from "../components/Swap/TokenSelector/Interfaces/interfaces";
import {
  PoolVector,
  Pool,
} from "../components/PartyBoost/PoolBooster/Interfaces/interfaces";

export const token0 = atom<`0x${string}`>({
  key: "token0Address",
  default: undefined,
});

export const token1 = atom<`0x${string}`>({
  key: "token1Address",
  default: undefined,
});

export const DoSwap = atom<boolean>({
  key: "DoSwap",
  default: true,
});
export const DoSwitch = atom<boolean>({
  key: "DoSwitch",
  default: false,
});
export const tok0Amount = atom<number>({
  key: "thetok0Amount",
  default: 0,
});

export const tok1Amount = atom<number>({
  key: "atok1Amount",
  default: 0,
});

export const feeLevel = atom<number>({
  key: "feeLevel",
  default: 3000,
});

export const amountOutMinimum = atom<bigint>({
  key: "theamountOutMinimum",
  default: BigInt(0),
});

export const sqrtPriceLimitX96 = atom<bigint>({
  key: "sqrtPriceLimitX96",
  default: BigInt(0),
});

export const customChangerMinimum = atom<bigint>({
  key: "thecustomWoopdidoo",
  default: BigInt(0),
});

export const tokens = atom<TokenVector[]>({
  key: "thetokens",
  default: [
    {
      protocol: "Goerli",
      token: {
        name: "ETHER - Arb Goerli",
        symbol: "ETH",
        address: "0x",
      },
    },
    {
      protocol: "Arbitrum Goerli",
      token: {
        name: "Hogwell - Arb Goerli",
        symbol: "HOG",
        address: "0x3cA0BDc410F58d04564C07ecD7f9A994F012e04b",
      },
    },
    {
      protocol: "Arbitrum Goerli",
      token: {
        name: "Wrapped ETH - Arb Goerli",
        symbol: "WETH",
        address: "0x865782BE8B791A8C11D174Da06D60Fa32828459C",
      },
    },
    {
      protocol: "Scroll Sepolia",
      token: {
        name: "Epic Dai - Scroll Sepolia",
        symbol: "EDAI",
        address: "0x62f02E0C7daEE5Fa55F3299dAF0b5b3435287D87",
      },
    },
    {
      protocol: "Gnosis Chain",
      token: {
        name: "Hogwell - Gnosis",
        symbol: "HOG",
        address: "0xDCbf6ECf42ab6a2b9c4F2473026303a383692238",
      },
    },
  ],
});

export const pools = atom<PoolVector[]>({
  key: "thepools",
  default: [
    {
      protocol: "Arbitrum Goerli",
      pool: {
        name: "ETHER",
        symbol: "ETH",
        address: "0x",
      },
    },
  ],
});

export const pool0 = atom<`0x${string}`>({
  key: "pool0Address",
  default: undefined,
});

export const pool1 = atom<`0x${string}`>({
  key: "pool1Address",
  default: undefined,
});

export const UniV3 = atom<boolean>({
  key: "uniswapv3trueornot",
  default: true,
});

export const targetDomain = atom<string>({
  key: "futuredomainpower",
  default: "0",
});
