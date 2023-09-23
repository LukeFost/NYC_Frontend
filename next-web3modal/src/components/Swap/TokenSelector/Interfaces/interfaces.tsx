export interface ISelect {
  onClick: () => void;
  selectedToken?: Token;
}

export interface ISelectOther {
  onClick: (token: Token) => void;
  selectedToken?: Token;
}

export interface Token {
  name: string;
  symbol: string;
  address: `0x${string}`;
}

export interface TokenVector {
  protocol: string;
  token: Token;
}

// export const tokens: Token[] = [
//   {
//     name: "Ether",
//     symbol: "ETH",
//     address: "0x",
//   },
//   {
//     name: "Wrapped Ether",
//     symbol: "WETH",
//     address: "0x",
//   },
// ];

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
