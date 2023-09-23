export interface ISelect {
  onClick: () => void;
  selectedToken: Token | undefined;
}

export interface Token {
  id: number;
  name: string;
  symbol: string;
}

export const tokens: Token[] = [
  {
    id: 1,
    name: "Ether",
    symbol: "ETH",
  },
  {
    id: 2,
    name: "Wrapped Ether",
    symbol: "WETH",
  },
];

export interface ITokenModal {
  selectedToken: Token | undefined;
}
