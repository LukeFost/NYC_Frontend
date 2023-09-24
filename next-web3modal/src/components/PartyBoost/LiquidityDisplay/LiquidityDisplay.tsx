// Get the Selected Pools address and read it for the total pooled assets within it
"use client";
interface ILiquidityDisplay {
  poolAddress: `0x${string}`;
}

const LiquidityDisplay = ({ poolAddress }: ILiquidityDisplay) => {
  return <>{poolAddress}</>;
};

export default LiquidityDisplay;
