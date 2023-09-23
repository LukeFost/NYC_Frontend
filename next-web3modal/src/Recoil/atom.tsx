import { atom } from "recoil";
import {
  Token,
  TokenVector,
} from "../components/Swap/TokenSelector/Interfaces/interfaces";

export const token0 = atom<`0x${string}`>({
  key: "token0",
  default: undefined,
});

export const token1 = atom<`0x${string}`>({
  key: "token1",
  default: undefined,
});

export const DoSwap = atom<boolean>({
  key: "DoSwap",
  default: false,
});
export const DoSwitch = atom<boolean>({
  key: "DoSwitch",
  default: false,
});
export const tok0Amount = atom<number>({
  key: "tok0Amount",
  default: 0,
});

export const tok1Amount = atom<number>({
  key: "tok1Amount",
  default: 0,
});

export const tokens = atom<TokenVector[]>({
  key: "tokens",
  default: [
    {
      protocol: "Linkie",
      token: {
        name: "ETHER",
        symbol: "ETH",
        address: "0x",
      },
    },
  ],
});
