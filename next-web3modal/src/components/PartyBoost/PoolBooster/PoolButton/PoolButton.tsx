import { ISelect } from "../Interfaces/interfaces";
import { FaAngleDown } from "react-icons/fa";

const baseClass =
  "w-fit h-fit rounded font-medium text-xl flex gap-2 px-3 py-2 items-center";

export function PoolButton({ onClick, selectedPool }: ISelect) {
  if (selectedPool) {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} bg-slate-200 hover:bg-slate-300 text-slate-900`}
      >
        <div className="w-8 h-8 rounded-full bg-slate-500" />
        <div>{selectedPool.symbol}</div>
        <FaAngleDown />
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} bg-success hover:bg-rose-600 text-white`}
      >
        <div>Select Pool</div>
        <FaAngleDown />
      </button>
    );
  }
}
