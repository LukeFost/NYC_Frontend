import { ISelect } from "../Interfaces/interfaces";
import { FaAngleDown } from "react-icons/fa";

const baseClass =
  "w-fit rounded-full font-medium text-xl flex gap-2 px-3 py-2 items-center";

export function TokenButton({ onClick, selectedToken }: ISelect) {
  if (selectedToken) {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} bg-slate-200 hover:bg-slate-300 text-slate-900`}
      >
        <div className="w-8 h-8 rounded-full bg-slate-500" />
        <div>{selectedToken.symbol}</div>
        <FaAngleDown />
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} bg-rose-500 hover:bg-rose-600 text-white`}
      >
        <div>Select token</div>
        <FaAngleDown />
      </button>
    );
  }
}
