import PoolSelector from "../../components/PartyBoost/PoolBooster/PoolSelector/PoolSelector";
import InputAmount from "./InputAmount/InputAmount";
//import PoolCreateButton from "./PoolCreateButton/PoolCreateButton";

const PoolPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center flex-grow shadow-xl rounded-lg p-4 bg-base-300 m-4 sm:w-96 lg:w-1/3">
        <div className="flex flex-row w-full mb-10 lg:mb-0 lg:flex-col lg:mr-6">
          <div className="flex-1 bg-blue-200 p-6 m-2 rounded-lg">
            Pool Creation
          </div>
          <div className="flex-1 bg-blue-300 p-6 m-2 rounded-lg">
            <div className="flex justify-center items-center p-1 space-x-2">
              <PoolSelector clickedState={true} />
              <InputAmount inputId={"first"} />
            </div>
          </div>
          <div className="flex-1 bg-blue-400 p-6 m-2 rounded-lg">
            <InputAmount inputId={"second"} />
          </div>
          <div className="flex-1 bg-blue-400 p-6 m-2 rounded-lg">
            <InputAmount inputId={"third"} />
          </div>
          <div className="flex-1 bg-blue-400 p-6 m-2 rounded-lg"></div>
        </div>

        <div className="flex flex-col w-full lg:mr-6">
          <div className="flex-1 bg-red-200 p-6 m-2 rounded-lg">
            Your Pool Stats
          </div>
          <div className="flex-1 flex justify-center items-center bg-red-300 p-6 m-2 rounded-lg">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Total Value Locked</div>
                <div className="stat-value">$69,420</div>
                <div className="stat-desc">80,000,0000 transactions!</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center bg-red-400 p-6 m-2 rounded-lg">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Your MOM!</div>
                <div className="stat-value">WHO?</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex-1 bg-green-200 p-6 m-2 rounded-lg">
            Protocol Pool Stats
          </div>
          <div className="flex-1 bg-green-300 p-6 m-2 rounded-lg">Box 2.2</div>
          <div className="flex-1 bg-green-400 p-6 m-2 rounded-lg">Box 2.3</div>
        </div>
      </div>
    </>
  );
};

export default PoolPage;
