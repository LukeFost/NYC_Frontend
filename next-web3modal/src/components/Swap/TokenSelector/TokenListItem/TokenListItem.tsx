import { FaCheck } from "react-icons/fa";
import { ITokenListItem } from "../Interfaces/interfaces";

export function TokenListItem({
  token,
  selected = false,
  onClick,
}: ITokenListItem) {
  return (
    <>
      <button
        className={`flex justify-between px-2 items-center hover:bg-slate-50 ${
          selected ? "opacity-40" : ""
        }`}
        onClick={() => onClick(token)}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-500" />
          <div className="flex flex-col items-start">
            <div className="text-lg text-slate-900">{token.name}</div>
            <div className="text-slate-400">{token.symbol}</div>
          </div>
        </div>
        <div>{selected && <FaCheck className="text-rose-500" />}</div>
      </button>
    </>
  );
}
