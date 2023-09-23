export interface ISelect {
  onClick: () => void;
  selectedToken?: Token;
}

export interface ISelectOther {
  onClick: (token: Token) => void;
  selectedToken?: Token;
}

export interface Token {
  id: number;
  name: string;
  symbol: string;
  address: `0x${string}`;
}

export interface TokenVector {
  protocol: string;
  token: Token;
}

export const tokens: Token[] = [
  {
    id: 1,
    name: "Ether",
    symbol: "ETH",
    address: "0x",
  },
  {
    id: 2,
    name: "Wrapped Ether",
    symbol: "WETH",
    address: "0x",
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
