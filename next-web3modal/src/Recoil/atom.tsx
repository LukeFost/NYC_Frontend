import { atom } from "recoil";

export const token0 = atom<`0x${string}`>({
  key: "token0",
  default: undefined,
});

export const token1 = atom<`0x${string}`>({
  key: "token1",
  default: undefined,
});
