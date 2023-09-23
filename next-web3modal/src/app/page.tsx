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
import Switcher from "../components/Swap/Switcher/Switcher";
import TokenSelector from "../components/Swap/TokenSelector/TokenSelector/TokenSelector";
import { Token } from "../components/Token";
import { WatchContractEvents } from "../components/WatchContractEvents";
import { WatchPendingTransactions } from "../components/WatchPendingTransactions";
import { WriteContract } from "../components/WriteContract";
import { WriteContractPrepared } from "../components/WriteContractPrepared";

const Page = () => {
  return (
    <>
      <div className="flex items-center bg-blue-200 justify-center">
        <div className="shadow-xl rounded p-4 bg-red-300 m-4 sm:w-96 lg:w-1/3">
          <div className="flex-col justify-between mb-4 mt-8">
            <div className="flex justify-center items-center p-1 space-x-2">
              <input
                type="number"
                placeholder="..."
                className="input input-bordered max-w-xs"
              />
              <TokenSelector clickedState={true} />
            </div>
            <Switcher />
            <div className="flex justify-center items-center p-1 space-x-2">
              <input
                type="number"
                placeholder="..."
                className="input input-bordered max-w-xs"
              />
              <TokenSelector clickedState={true} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="btn btn-primary">Approve</button>
          </div>
        </div>
      </div>

      <Connected>
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected>
    </>
  );
};

export default Page;
