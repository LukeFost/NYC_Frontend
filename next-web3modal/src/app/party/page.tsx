import PoolSelector from "../../components/PartyBoost/PoolBooster/PoolSelector/PoolSelector";
import LiquidityDisplay from "../../components/PartyBoost/LiquidityDisplay/LiquidityDisplay";
import AprDisplay from "../../components/PartyBoost/AprDisplay/AprDisplay";

const PartyPage = () => {
  // input user address to get their onChain positions

  // After getting their onChain positions...

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow shadow-xl rounded-lg p-4 bg-base-300 m-4 sm:w-96 lg:w-1/3">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-1/2 h-3/4 mb-4 lg:mb-0 min-h-[200px]">
          <div className="flex items-center justify-center bg-blue-300 h-1/3 border-b-2">
            <PoolSelector clickedState />
          </div>
          <div className="flex items-center justify-center bg-blue-400 h-1/3 border-b-2">
            <LiquidityDisplay poolAddress={"0xhello"} />
          </div>
          <div className="flex items-center justify-center bg-blue-500 h-1/3">
            <AprDisplay poolAddress={"0xhello"} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:w-1/2 h-3/4 min-h-[200px]">
          <div className="flex items-center justify-center bg-red-300 h-1/2 border-b-2">
            <PoolSelector clickedState />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex h-1/2">
            {/* Right Row 2 Split */}
            <div className="flex items-center justify-center bg-red-400 w-1/2 border-r-2">
              Your Position Component
            </div>
            <div className="flex items-center justify-center bg-red-500 w-1/2">
              Current Incentives Component
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartyPage;
// Pool Selector Component
// -> Complete
// Liquidity Display Component
// ->
// APR Display Component
// Your Position Component
// Current Incentives Component
// Incentive Token Picking Component
