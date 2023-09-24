export interface ISelect {
  onClick: () => void;
  selectedPool?: Pool;
}

export interface ISelectOther {
  onClick: (pool: Pool) => void;
  selectedPool?: Pool;
}

export interface Pool {
  name: string;
  symbol: string;
  address: `0x${string}`;
}

export interface PoolVector {
  protocol: string;
  pool: Pool;
}

// export const pools: Pool[] = [
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

export interface IPoolModal {
  selectedPool: Pool | undefined;
  onClick: (pool: Pool) => void;
  clickedState: boolean;
}

export interface IPoolListItem {
  pool: Pool;
  selected: boolean;
  onClick: (pool: Pool) => void;
}
