import { Account } from "../components/Account";
import { Balance } from "../components/Balance";
import { BlockNumber } from "../components/BlockNumber";
import { Connected } from "../components/Connected";
import { ReadContract } from "../components/ReadContract";
import { ReadContracts } from "../components/ReadContracts";
import { ReadContractsInfinite } from "../components/ReadContractsInfinite";
import { SendTransaction } from "../components/SendTransaction";
import { SendTransactionPrepared } from "../components/SendTransactionPrepared";
import { SignMessage } from "../components/SignMessage";
import { SignTypedData } from "../components/SignTypedData";
import AmountInput from "../components/Swap/AmountInput/AmountInput";
import Approval from "../components/Swap/Approval/Approval";
import Switcher from "../components/Swap/Switcher/Switcher";
import CurrentTargetDomain from "../components/Swap/TargetDomain/TargetDomain";
import ToggleV4 from "../components/Swap/ToggleV4/ToggleV4";
import TokenSelector from "../components/Swap/TokenSelector/TokenSelector/TokenSelector";
import { Token } from "../components/Token";
import { WatchContractEvents } from "../components/WatchContractEvents";
import { WatchPendingTransactions } from "../components/WatchPendingTransactions";
import { WriteContract } from "../components/WriteContract";
import { WriteContractPrepared } from "../components/WriteContractPrepared";

const Page = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-grow">
        <div className="shadow-xl rounded p-4 bg-base-300 m-4 sm:w-96 lg:w-1/3">
          <div className="flex-col justify-between mb-4 mt-8">
            <div className="flex justify-center items-center p-1 space-x-2">
              <AmountInput clickedState={false} />
              <TokenSelector clickedState={false} />
            </div>
            <Switcher />
            <div className="flex justify-center items-center p-1 space-x-2">
              <AmountInput clickedState={true} />
              <TokenSelector clickedState={true} />
            </div>
            <ToggleV4 />
            <CurrentTargetDomain />
          </div>
          <div className="flex items-center justify-center mt-8">
            <Approval />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
