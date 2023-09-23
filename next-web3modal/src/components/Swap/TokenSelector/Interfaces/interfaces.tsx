export interface ISelect {
  onClick: () => void;
  selectedToken?: Token;
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
  onClick: (token: Token) => void;
  clickedState: boolean;
}

export interface ITokenListItem {
  token: Token;
  selected: boolean;
  onClick: (token: Token) => void;
}
